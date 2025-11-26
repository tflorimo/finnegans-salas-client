import { usePagination } from '../../../shared/hooks/usePagination';
import { adminService } from '../../../services/admin/admin.service';
import type { AuditDTO } from '../../../services/admin/audits/types';

export const useAuditsFetch = () => {
  const result = usePagination<AuditDTO>(
    (page, perPage) => adminService.getAudits(page, perPage),
    10
  );

  return {
    loading: result.loading,
    audits: result.data,
    pagination: result.pagination,
    currentPage: result.currentPage,
    handlePageChange: result.handlePageChange,
    error: result.error,
  };
};
