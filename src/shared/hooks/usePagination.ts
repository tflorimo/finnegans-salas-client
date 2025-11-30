import { useEffect, useState } from 'react';
import type { PaginatedResponse } from '../types/pagination.types';

interface UsePaginationState<T> {
  loading: boolean;
  data: T[];
  currentPage: number;
  pagination: {
    page: number;
    perPage: number;
    total: number;
    totalPages: number;
  };
  error: Error | null;
}

interface UsePaginationReturn<T> extends UsePaginationState<T> {
  handlePageChange: (page: number) => void;
}

export const usePagination = <T,>(
  fetchFn: (page: number, perPage: number) => Promise<PaginatedResponse<T>>,
  perPage: number = 10,
  search: unknown = undefined
): UsePaginationReturn<T> => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<T[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pagination, setPagination] = useState<{
    page: number;
    perPage: number;
    total: number;
    totalPages: number;
  }>({
    page: 1,
    perPage,
    total: 0,
    totalPages: 0,
  });
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async (page: number) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetchFn(page, perPage);
      setData(response.items);
      setPagination({
        page: response.page,
        perPage: response.perPage,
        total: response.total,
        totalPages: response.totalPages,
      });
      setCurrentPage(response.page);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
    fetchData(1);
  }, [search]);

  useEffect(() => {
    fetchData(currentPage);
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    fetchData(page);
  };

  return { loading, data, currentPage, pagination, error, handlePageChange };
};
