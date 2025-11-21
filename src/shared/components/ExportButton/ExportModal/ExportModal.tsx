import { FileText, FileSpreadsheet, X } from "lucide-react";
import { EXPORT_CANCEL, EXPORT_CSV_OPTION, EXPORT_MODAL_TITLE, EXPORT_PDF_OPTION } from "../constants";
import { CancelButton, ModalButton, ModalButtons, ModalContent, ModalOverlay, ModalTitle } from "../styles";
import type { ExportModalProps } from "../types";

export const ExportModal = ({ isOpen, onClose, onSelectFormat }: ExportModalProps) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalTitle>{EXPORT_MODAL_TITLE}</ModalTitle>
        <ModalButtons>
          <ModalButton onClick={() => onSelectFormat("csv")}>
            <FileSpreadsheet />
            {EXPORT_CSV_OPTION}
          </ModalButton>
          <ModalButton onClick={() => onSelectFormat("pdf")}>
            <FileText />
            {EXPORT_PDF_OPTION}
          </ModalButton>
          <CancelButton onClick={onClose}>
            <X />
            {EXPORT_CANCEL}
          </CancelButton>
        </ModalButtons>
      </ModalContent>
    </ModalOverlay>
  );
};
