import { Route, Routes } from "react-router-dom";

import { NotFoundPage } from "../pages/NotFoundPage";
import { QRCheckInHandler } from "../pages/RoomPage/components/QRCheckInHandler";
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
