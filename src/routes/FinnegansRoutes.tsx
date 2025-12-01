import { Route, Routes } from "react-router-dom"

import { AdminAuditPage } from "../pages/AdminAudits/AdminAuditPage"
import { AdminEventsPage } from "../pages/AdminEvents/AdminEventsPage"
import { HeatmapPage } from "../pages/HeatmapPage/HeatmapPage"
import HomePage from "../pages/HomePage/HomePage"
import { NotFoundPage } from "../pages/NotFoundPage"
import { RoomPage } from "../pages/RoomPage/RoomPage"
import { AdminRoute } from "../router/AdminRouter"
import Header from "../shared/components/Header/Header"

export const FinnegansRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/heatmap" element={<HeatmapPage />} />
        <Route path="/room/:id" element={<RoomPage />} />
        <Route path="/admin/audits" element={
          <AdminRoute>
            <AdminAuditPage />
          </AdminRoute>
        }
        />
        <Route path="/admin/events" element={
          <AdminRoute>
            <AdminEventsPage />
          </AdminRoute>
        }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}