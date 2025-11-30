import axiosInstance from "../../api/axios/axios.instance";

export const buildPaginatedUrl = (
  baseUrl: string,
  page?: number,
  perPage?: number,
  search?: { key: string; value: string }
): string => {
  const params = new URLSearchParams();
  if (page) params.append('page', String(page));
  if (perPage) params.append('perPage', String(perPage));
  if (search?.key) params.append('searchKey', String(search.key));
  if (search?.value) params.append('searchValue', String(search.value));

  const query = params.toString();
  return query ? `${baseUrl}?${query}` : baseUrl;
};

export const fetchAllPages = async <T extends { items?: any[]; totalPages?: number }>(
  baseUrl: string,
  itemsPerPage: number = 1000
): Promise<T['items']> => {
  const firstResponse = await axiosInstance.get<T>(
    buildPaginatedUrl(baseUrl, 1, itemsPerPage)
  );
  
  const firstData = firstResponse.data;
  let allItems = [...(firstData.items || [])];
  
  if (firstData.totalPages && firstData.totalPages > 1) {
    const pageRequests = [];
    for (let page = 2; page <= firstData.totalPages; page++) {
      pageRequests.push(
        axiosInstance.get<T>(buildPaginatedUrl(baseUrl, page, itemsPerPage))
      );
    }
    
    const results = await Promise.all(pageRequests);
    results.forEach((result) => {
      allItems = [...allItems, ...(result.data.items || [])];
    });
  }
  
  return allItems;
};
