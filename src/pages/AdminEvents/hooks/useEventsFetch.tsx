import { useCallback, useState } from 'react';
import { adminService } from '../../../services/admin/admin.service';
import type { EventListItemDTO } from '../../../services/admin/audits/types';
import { usePagination } from '../../../shared/hooks/usePagination';
import type { SearchParam } from '../types/AdminEvents.types';

export const useEventsFetch = () => {
  const [search, setSearch] = useState<SearchParam>(undefined);

  const fetcher = useCallback(
    (page: number, perPage: number) => {
      return adminService.getEvents(page, perPage, search);
    },
    [search]
  );

  const result = usePagination<EventListItemDTO>(fetcher, 10, search);

  const clearFilters = useCallback(() => {
    setSearch(undefined);
    result.handlePageChange(1);
  }, [result]);

  return {
    loading: result.loading,
    events: result.data,
    pagination: result.pagination,
    currentPage: result.currentPage,
    handlePageChange: result.handlePageChange,
    error: result.error,
    search,
    setSearch,
    clearFilters
  };
};
