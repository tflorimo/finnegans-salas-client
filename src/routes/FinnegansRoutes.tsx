import { Route, Routes } from "react-router-dom"
import AdminEvents from "../pages/AdminEvents/AdminEventsPage"
import { AdminLogs } from "../pages/AdminLogs/AdminLogsPage"
import { HomePage } from "../pages/HomePage"
import { RoomPage } from "../pages/RoomPage/RoomPage"
import Header from "../shared/components/Header/Header"

export const FinnegansRoutes = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/room/:id" element={<RoomPage />} />
                <Route path="/admin/logs" element={<AdminLogs />} />
                <Route path="/admin/events" element={<AdminEvents />} />

                <Route path="/*" element={<div>Finnegans Routes</div>} />
            </Routes>
        </>
    )
}