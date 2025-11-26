import { PaginationContainer, PageButton, PageInfo } from "../styles";
import type { PaginationControlsProps } from "../types/AuditItem.types";

export const PaginationControls = ({
  currentPage,
  totalPages,
  onPageChange,
  theme,
  isLoading,
}: PaginationControlsProps) => {
  const maxVisiblePages = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage < maxVisiblePages - 1) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  return (
    <PaginationContainer $theme={theme}>
      <PageButton
        $theme={theme}
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1 || isLoading}
        title="Primera página"
      >
        «
      </PageButton>

      <PageButton
        $theme={theme}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1 || isLoading}
        title="Página anterior"
      >
        ‹
      </PageButton>

      {startPage > 1 && (
        <>
          <PageButton
            $theme={theme}
            onClick={() => onPageChange(1)}
            disabled={isLoading}
          >
            1
          </PageButton>
          {startPage > 2 && <PageInfo $theme={theme}>...</PageInfo>}
        </>
      )}

      {pages.map((page) => (
        <PageButton
          key={page}
          $theme={theme}
          $active={page === currentPage}
          onClick={() => onPageChange(page)}
          disabled={isLoading}
        >
          {page}
        </PageButton>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <PageInfo $theme={theme}>...</PageInfo>}
          <PageButton
            $theme={theme}
            onClick={() => onPageChange(totalPages)}
            disabled={isLoading}
          >
            {totalPages}
          </PageButton>
        </>
      )}

      <PageButton
        $theme={theme}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages || isLoading}
        title="Página siguiente"
      >
        ›
      </PageButton>

      <PageButton
        $theme={theme}
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages || isLoading}
        title="Última página"
      >
        »
      </PageButton>

      <PageInfo $theme={theme}>
        Página {currentPage} de {totalPages}
      </PageInfo>
    </PaginationContainer>
  );
};
