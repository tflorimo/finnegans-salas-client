import { FileSpreadsheet, FileText, X } from "lucide-react";

import { EXPORT_CANCEL, EXPORT_CSV_OPTION, EXPORT_MODAL_TITLE, EXPORT_PDF_OPTION } from "../constants";
import { CancelButton, ModalButton, ModalButtons, ModalContent, ModalOverlay, ModalTitle } from "../styles";
import type { ExportModalProps } from "../types";

export const ExportModal = ({ isOpen, onClose, onSelectFormat, theme }: ExportModalProps) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose} $theme={theme}>
      <ModalContent onClick={(e) => e.stopPropagation()} $theme={theme}>
        <ModalTitle $theme={theme}>{EXPORT_MODAL_TITLE}</ModalTitle>
        <ModalButtons>
          <ModalButton onClick={() => onSelectFormat("csv")} $theme={theme}>
            <FileSpreadsheet />
            {EXPORT_CSV_OPTION}
          </ModalButton>
          <ModalButton onClick={() => onSelectFormat("pdf")} $theme={theme}>
            <FileText />
            {EXPORT_PDF_OPTION}
          </ModalButton>
          <CancelButton onClick={onClose} $theme={theme}>
            <X />
            {EXPORT_CANCEL}
          </CancelButton>
        </ModalButtons>
      </ModalContent>
    </ModalOverlay>
  );
};
