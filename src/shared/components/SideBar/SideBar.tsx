import { BarChart3, ChevronLeft, ChevronRight, FileText, Download } from "lucide-react";
import { useContext, type JSX } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../../../components/Button/Button";
import { ButtonVariant } from "../../../components/Button/types";
import {
  SideBarContainer,
  SideBarHeader,
  SideBarNav,
  SideBarSubtitle,
  SideBarTitle,
  ToggleButton,
  getBaseButtonStyles
} from "./styles";
import type { SideBarProps } from "./types";
import { ThemeContext } from "../../../context/theme/themeContext";

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

export const SideBar = ({
  isCollapsed,
  onToggle,
  onLogsClick,
  onEventsClick,
  onDownloadQRs
}: SideBarProps): JSX.Element => {

  const {theme} = useContext(ThemeContext);

  return (
    <SideBarContainer $collapsed={isCollapsed} $theme={theme}>
      <SideBarHeader $collapsed={isCollapsed} $theme={theme}>
        {isCollapsed ? (
          <ToggleButton
            type="button"
            onClick={onToggle}
            $collapsed={isCollapsed}
            $theme={theme}
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
              $theme={theme}
              aria-label="Contraer menú"
            >
              <ChevronLeft size={18} />
            </ToggleButton>
            <SideBarTitle $theme={theme}>Finnegans Admin</SideBarTitle>
            <SideBarSubtitle $theme={theme}>Panel de Control</SideBarSubtitle>
          </>
        )}
      </SideBarHeader>

      <SideBarNav $collapsed={isCollapsed}>
        <NavLink to="/admin/audits">
          {({ isActive }) => {
            return (
              <Button
                text={isCollapsed ? undefined : "Auditorías"}
                icon={<FileText size={18} />}
                variant={ButtonVariant.primary}
                onClick={onLogsClick || (() => { })}
                customStyle={getBaseButtonStyles(isActive, theme, isCollapsed)}
              />
            )
          }
          }
        </NavLink>
        <NavLink to="/admin/events">
          {({ isActive }) => (

            <Button
              text={isCollapsed ? undefined : "Visualizar Eventos"}
              icon={<BarChart3 size={18} />}
              variant={ButtonVariant.light}
              onClick={onEventsClick || (() => { })}
              customStyle={getBaseButtonStyles(isActive, theme, isCollapsed)}
            />
          )}
        </NavLink>
        <Button
          text={isCollapsed ? undefined : "Descargar QRs"}
          icon={<Download size={18} />}
          variant={ButtonVariant.light}
          onClick={onDownloadQRs || (() => { })}
          customStyle={getBaseButtonStyles(false, theme, isCollapsed)}
        />
      </SideBarNav>
    </SideBarContainer>
  );
};