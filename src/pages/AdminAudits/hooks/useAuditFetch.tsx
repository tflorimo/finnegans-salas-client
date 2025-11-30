import { useCallback, useState } from 'react';

import { adminService } from '../../../services/admin/admin.service';
import type { AuditDTO } from '../../../services/admin/audits/types';
import { usePagination } from '../../../shared/hooks/usePagination';
import type { SearchParam } from '../../AdminEvents/types/AdminEvents.types';

export const useAuditsFetch = () => {

  const [search, setSearch] = useState<SearchParam>(undefined);

  const fetcher = useCallback(
    (page: number, perPage: number) => {
      return adminService.getAudits(page, perPage, search);
    },
    [search]
  );

  const result = usePagination<AuditDTO>(fetcher, 10, search);

  const clearFilters = useCallback(() => {
    setSearch(undefined);
    result.handlePageChange(1);
  }, [result]);

  return {
    loading: result.loading,
    audits: result.data,
    pagination: result.pagination,
    currentPage: result.currentPage,
    handlePageChange: result.handlePageChange,
    error: result.error,
    search,
    setSearch,
    clearFilters,
  };
};
