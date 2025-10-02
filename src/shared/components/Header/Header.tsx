import LogoFinnegans from "../../assets/images/logoFinnegans.svg";
import {
  TopBar,
  TopBarInner,
  TopBarLeft,
  TopBarCenter,
  TopBarRight,
} from "./styles";
import { Bell, Settings, User } from "lucide-react";

export const Header = () => {
  console.log("Header");
  return (
    <TopBar>
      <TopBarInner>
        {/* Izquierda */}
        <TopBarLeft>
          <img src={LogoFinnegans} alt="Finnegans" width={32} height={32} />
          <div>
            <h1>Finnegans</h1>
            <h2>Reservas de Sala In-Situ</h2>
          </div>
        </TopBarLeft>
        <TopBarCenter>
          {/* Espacio para editar en cada page */}
        </TopBarCenter>
        {/* Derecha */}
        <TopBarRight>
          <Bell size={20} />
          <Settings size={20} />
          <User size={20} />
        </TopBarRight>
      </TopBarInner>
    </TopBar>
  );
};

export default Header;
