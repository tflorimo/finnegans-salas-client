import { /*Bell,*/ LogOut, Settings } from "lucide-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import LogoFinnegans from "../../../assets/images/logoFinnegans.svg";
import { AuthContext } from "../../../context/auth/authContext";
import {
  TopBar,
  TopBarInner,
  TopBarLeft,
  TopBarRight,
} from "./styles";

/**
 * @description Header component that displays the top navigation bar with logo and admin controls.
 * @export
 */
export const Header = () => {

  const { logout } = useContext(AuthContext)
  return (
    <TopBar>
      <TopBarInner>
        <TopBarLeft>
          <img src={LogoFinnegans} alt="Finnegans" width={32} height={32} />
          <div>
            <h1>Finnegans</h1>
            <h2>Reservas de Sala In-Situ</h2>
          </div>
        </TopBarLeft>
        <TopBarRight>
          {/*TODO: Descomentar cuando se implementen las notificaciones */}
          {/* <Bell size={20} /> */}
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
            <Settings size={20} />
          </NavLink>
          <LogOut size={20} onClick={() => logout()} />
        </TopBarRight>
      </TopBarInner>
    </TopBar>
  );
};

export default Header;