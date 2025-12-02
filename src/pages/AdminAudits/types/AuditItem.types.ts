import type { AuditDTO } from "../../../services/admin/admin.types";

export interface AuditItemProps {
  log: AuditDTO;
}

export interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  theme: 'light' | 'dark';
  isLoading: boolean;
}
