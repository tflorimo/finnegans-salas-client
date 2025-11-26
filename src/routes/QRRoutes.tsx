import { Route, Routes } from "react-router-dom";
import { QRCheckInHandler } from "../pages/RoomPage/components/QRCheckInHandler";
import { NotFoundPage } from "../pages/NotFoundPage";
import Header from "../shared/components/Header/Header";

export const QRRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/:roomEmail" element={<QRCheckInHandler />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
