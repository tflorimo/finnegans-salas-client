import { Route, Routes } from "react-router-dom"
import { AdminEventsPage } from "../pages/AdminEvents/AdminEventsPage"
import { AdminLogsPage } from "../pages/AdminLogs/AdminLogsPage"
import { HomePage } from "../pages/HomePage"
import { RoomPage } from "../pages/RoomPage/RoomPage"
import { AdminRoute } from "../router/AdminRouter"
import Header from "../shared/components/Header/Header"

export const FinnegansRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/room/:id" element={<RoomPage />} />
        <Route path="/admin/logs" element={
          <AdminRoute>
            <AdminLogsPage />
          </AdminRoute>
        }
        />
        <Route path="/admin/events" element={
          <AdminRoute>
            <AdminEventsPage />
          </AdminRoute>
        }
        />

        <Route path="/*" element={<div>Finnegans Routes</div>} />
      </Routes>
    </>
  )
}