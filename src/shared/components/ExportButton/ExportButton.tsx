import { useState, useContext } from "react";
import { Download } from "lucide-react";
import { Button } from "../../../components/Button/Button";
import { ButtonVariant } from "../../../components/Button/types";
import { exportToCSV, exportToPDF } from "./utils";
import { EXPORT_BUTTON_TEXT } from "./constants";
import { ExportModal } from "./ExportModal/ExportModal";
import { EXPORT_BUTTON_STYLE } from "./styles";
import type { ExportButtonProps, ExportFormat } from "./types";
import { ThemeContext } from "../../../context/theme/themeContext";

export const ExportButton = <T extends Record<string, any>>({
  data,
  fileName,
  disabled = false,
  onClick,
}: ExportButtonProps<T>) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentData, setCurrentData] = useState(data);
  const { theme } = useContext(ThemeContext);

  const handleExport = (format: ExportFormat) => {
    if (currentData.length === 0) return;

    if (format === "csv") {
      exportToCSV(currentData, fileName);
    } else {
      exportToPDF(currentData, fileName);
    }

    setIsModalOpen(false);
  };

  const handleButtonClick = async () => {
    if (!disabled) {
      if (onClick) {
        setIsLoading(true);
        try {
          const result = await onClick();
          if (Array.isArray(result) && result.length > 0) {
            setCurrentData(result);
            setIsModalOpen(true);
          }
        } catch (err) {
          console.error('Error en onClick del ExportButton:', err);
        } finally {
          setIsLoading(false);
        }
      } else {
        setCurrentData(data);
        setIsModalOpen(true);
      }
    }
  };

  return (
    <>
      <Button
        icon={<Download size={16} />}
        text={EXPORT_BUTTON_TEXT}
        variant={ButtonVariant.light}
        onClick={handleButtonClick}
        customStyle={EXPORT_BUTTON_STYLE(disabled || isLoading, theme)}
      />
      <ExportModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelectFormat={handleExport}
        theme={theme}
      />
    </>
  );
};
