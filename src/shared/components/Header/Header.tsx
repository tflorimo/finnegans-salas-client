import { LogOut, Settings, Sun } from "lucide-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import logoFinnegas from "../../../assets/images/isotipo-celeste.svg";
import { AuthContext } from "../../../context/auth/authContext";
import { HEADER_TEXTS } from "./constants";
import {
  TopBar,
  TopBarInner,
  TopBarLeft,
  TopBarRight,
} from "./styles";
import { ThemeContext } from "../../../context/theme/themeContext";

/**
 * @description Header component that displays the top navigation bar with logo and admin controls.
 * @export
 */
export const Header = () => {

  const { logout, userRole } = useContext(AuthContext)
  const {theme, toggleTheme } = useContext(ThemeContext);

  const isAdmin = userRole === "admin";

  return (
    <TopBar theme={theme}>
      <TopBarInner>
        <TopBarLeft $theme={theme}>
          <img src={logoFinnegas} alt={HEADER_TEXTS.LOGO_ALT} width={32} height={32} />
          <div>
            <h1>{HEADER_TEXTS.TITLE}</h1>
            <h2>{HEADER_TEXTS.SUBTITLE}</h2>
          </div>
        </TopBarLeft>
        <TopBarRight $theme={theme}>
          <Sun onClick={toggleTheme}/>
          <NavLink
            to="/admin/audits"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                marginTop: "5px",
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "black",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
          >
            {isAdmin && <Settings size={20} />}
          </NavLink>
          <LogOut size={20} onClick={() => logout()} />
        </TopBarRight>
      </TopBarInner>
    </TopBar>
  );
};

export default Header;