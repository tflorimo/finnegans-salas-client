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
}: ExportButtonProps<T>) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  const handleExport = (format: ExportFormat) => {
    if (data.length === 0) return;

    if (format === "csv") {
      exportToCSV(data, fileName);
    } else {
      exportToPDF(data, fileName);
    }

    setIsModalOpen(false);
  };

  const handleButtonClick = () => {
    if (!disabled) {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <Button
        icon={<Download size={16} />}
        text={EXPORT_BUTTON_TEXT}
        variant={ButtonVariant.light}
        onClick={handleButtonClick}
        customStyle={EXPORT_BUTTON_STYLE(disabled, theme)}
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
