import { Route, Routes, useNavigate } from "react-router-dom"
import AdminEvents from "../pages/AdminEvents/AdminEventsPage"
import { AdminLogsPage } from "../pages/AdminLogs/AdminLogsPage"
import { HomePage } from "../pages/HomePage"
import { RoomPage } from "../pages/RoomPage/RoomPage"
import Header from "../shared/components/Header/Header"
import { BackLink } from "../pages/RoomPage/stylesRoomPage"
import { ArrowLeft } from "lucide-react"

export const FinnegansRoutes = () => {

    const navigate = useNavigate()

    return (
        <>
            <Header />
            {window.location.pathname !== "/home" && (
                <BackLink onClick={() => navigate("/home")}>
                    <ArrowLeft size={18} />
                    Volver
                </BackLink>
            )}
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/room/:id" element={<RoomPage />} />
                <Route path="/admin/logs" element={<AdminLogsPage />} />
                <Route path="/admin/events" element={<AdminEvents />} />

                <Route path="/*" element={<div>Finnegans Routes</div>} />
            </Routes>
        </>
    )
}