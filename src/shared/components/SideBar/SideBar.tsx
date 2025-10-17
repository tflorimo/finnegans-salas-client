import type { JSX } from "react";
import { FileText, BarChart3, ChevronLeft, ChevronRight } from "lucide-react";
import { css } from "styled-components";
import { Button } from "../../../components/Button/Button";
import { ButtonVariant } from "../../../components/Button/types";
import {
  SideBarContainer,
  SideBarHeader,
  SideBarTitle,
  SideBarSubtitle,
  SideBarNav,
  ToggleButton
} from "./styles";
import type { SideBarProps } from "./types";

/**
 * @description SideBar component that provides collapsible navigation with toggle functionality.
 * Displays admin panel title, navigation buttons for Logs and Events, and supports collapsed state.
 * @export
 * @param {SideBarProps} {
 *   isCollapsed,
 *   onToggle,
 *   onLogsClick,
 *   onEventsClick,
 * }
 * @return {JSX.Element}
 */

// TODO: Queda pendiente agregar la navegación entre LOGS y Eventos
export const SideBar = ({
  isCollapsed,
  onToggle,
  onLogsClick,
  onEventsClick
}: SideBarProps): JSX.Element => {

  const getBaseButtonStyles = () => css`
    width: 100%;
    justify-content: ${isCollapsed ? "center" : "flex-start"};
    align-items: center;
    gap: ${isCollapsed ? "0" : "12px"};
    padding: 12px ${isCollapsed ? "0" : "16px"};
    border-radius: 12px;
    font-size: 14px;
    font-weight: 500;
    box-shadow: none;
    text-align: ${isCollapsed ? "center" : "left"};
    white-space: nowrap;
    overflow: hidden;

    svg {
      color: inherit;
    }
  `;

  return (
    <SideBarContainer $collapsed={isCollapsed}>
      <SideBarHeader $collapsed={isCollapsed}>
        {isCollapsed ? (
          <ToggleButton
            type="button"
            onClick={onToggle}
            $collapsed={isCollapsed}
            aria-label="Expandir menú"
          >
            <ChevronRight size={18} />
          </ToggleButton>
        ) : (
          <>
            <ToggleButton
              type="button"
              onClick={onToggle}
              $collapsed={isCollapsed}
              aria-label="Contraer menú"
            >
              <ChevronLeft size={18} />
            </ToggleButton>
            <SideBarTitle>Finnegans Admin</SideBarTitle>
            <SideBarSubtitle>Panel de Control</SideBarSubtitle>
          </>
        )}
      </SideBarHeader>

      <SideBarNav $collapsed={isCollapsed}>
        <Button
          text={isCollapsed ? undefined : "LOGS"}
          icon={<FileText size={18} />}
          variant={ButtonVariant.primary}
          onClick={onLogsClick || (() => {})}
          customStyle={css`
            ${getBaseButtonStyles()}
            background: #0b5be7;
            color: #ffffff;

            &:hover {
              background: #0a4fd0;
              color: #ffffff;
            }
          `}
        />
        
        <Button
          text={isCollapsed ? undefined : "Visualizar Eventos"}
          icon={<BarChart3 size={18} />}
          variant={ButtonVariant.light}
          onClick={onEventsClick || (() => {})}
          customStyle={css`
            ${getBaseButtonStyles()}
            background: #ffffff;
            color: #1e293b;
            border: 1px solid #e2e8f0;

            &:hover {
              background: #f8fafc;
            }
          `}
        />
      </SideBarNav>
    </SideBarContainer>
  );
};