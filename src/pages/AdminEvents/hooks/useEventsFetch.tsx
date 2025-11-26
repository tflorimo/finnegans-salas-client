import { usePagination } from '../../../shared/hooks/usePagination';
import { adminService } from '../../../services/admin/admin.service';
import type { EventListItemDTO } from '../../../services/admin/audits/types';

export const useEventsFetch = () => {
  const result = usePagination<EventListItemDTO>(
    (page, perPage) => adminService.getEvents(page, perPage),
    10
  );

  return {
    loading: result.loading,
    events: result.data,
    pagination: result.pagination,
    currentPage: result.currentPage,
    handlePageChange: result.handlePageChange,
    error: result.error,
  };
};
