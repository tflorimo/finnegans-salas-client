import { LogOut, Settings, Sun } from "lucide-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import LogoFinnegans from "../../../assets/images/Isotipo Celeste.svg";
import { AuthContext } from "../../../context/auth/authContext";
import { decodeJwt } from "../../utils/decodeJwt.utils";
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

  const { authToken, logout } = useContext(AuthContext)
  const {theme, toggleTheme } = useContext(ThemeContext);

  const decodedToken = authToken ? decodeJwt(authToken) : null;
  const isAdmin = decodedToken?.role === "admin";

  return (
    <TopBar theme={theme}>
      <TopBarInner>
        <TopBarLeft $theme={theme}>
          <img src={LogoFinnegans} alt="Finnegans" width={32} height={32} />
          <div>
            <h1>Finnegans</h1>
            <h2>Reservas de Sala In-Situ</h2>
          </div>
        </TopBarLeft>
        <TopBarRight $theme={theme}>
          <Sun onClick={toggleTheme}/>
          <NavLink
            to="/admin/logs"
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