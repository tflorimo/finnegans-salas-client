import type { ThemeType } from "../../../theme/Types";

export interface ExportButtonProps<T> {
  data: T[];
  fileName: string;
  disabled?: boolean;
}

export type ExportFormat = "csv" | "pdf";

export interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectFormat: (format: ExportFormat) => void;
  theme: ThemeType;
}
