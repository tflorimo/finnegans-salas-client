import {
  ArrowLeft,
  AudioLines,
  Clock,
  Monitor,
  MonitorPlay,
  QrCode,
  Users,
  Wifi,
} from "lucide-react";
import { useEffect, useState } from "react";
import { css } from "styled-components";
import { Button } from "../../components/Button/Button";
import { CardContainer } from "../../components/CardContainer/CardContainer";
import { Tag } from "../../components/Tag/Tag";
import { Tags } from "../../components/Tag/types";
import { roomService } from "../../services/rooms/roomService";
import type { RoomData } from "../../shared/types/types";
import {
  Avatar,
  BackLink,
  ColumnaLateral,
  ColumnaPrincipal,
  ContentGrid,
  FilaEstado,
  PageInner,
  QRBox,
  ReservasLista,
  ReservationItem,
  ResInfo,
  ResLeft,
  ResRight,
  RoomPageContainer,
} from "./stylesRoomPage";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function timeRange(start: string, end: string) {
  const f = new Intl.DateTimeFormat(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${f.format(new Date(start))} - ${f.format(new Date(end))}`;
}

export const RoomPage = () => {
  /* const { roomId } = useParams(); */
  const [data, setData] = useState<RoomData | null>(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    const fetchRooms = async () => {
      try {
        const data = await roomService.getRoom(/* roomId */);
        setData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error en la solicitud de consulta de Salas:', error);
      }
    };
    fetchRooms();
  }, [])

  const d = data?.roomDetails;
  const status = d?.status;

  const renderStatusTag = () => {
    if (loading) return <Tag text="…" type={Tags.info} />;
    if (status === "available") return <Tag text="Libre" type={Tags.success} />;
    if (status === "occupied") return <Tag text="Ocupada" type={Tags.info} />;
    if (status === "maintenance")
      return <Tag text="Mantenimiento" type={Tags.danger} />;
    return null;
  };

  return (
    <>
      <RoomPageContainer>
        <PageInner>
{/*           <BackLink onClick={() => window.history.back()}>
            <ArrowLeft size={18} />
            Volver a todas las salas
          </BackLink> */}

          <ContentGrid>
            <ColumnaPrincipal>
              <CardContainer
                customStyle={css`
                  width: 100%;
                  text-align: left;
                  display: flow-root;
                  h1,
                  h2 {
                    margin-top: 0;
                  }
                `}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: 16,
                    marginBottom: 16,
                  }}
                >
                  <div>
                    <h1
                      style={{
                        color: "rgba(0,0,0,1)",
                        margin: 0,
                        fontSize: 24,
                        fontWeight: 700,
                      }}
                    >
                      {loading ? "Cargando…" : d?.name ?? "Sala"}
                    </h1>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        color: "rgba(0,0,0,1)",
                        fontSize: 14,
                        marginTop: 6,
                      }}
                    >
                      <Users size={16} />
                      <span>
                        Capacidad: {loading ? "…" : d?.capacity ?? "-"} personas
                      </span>
                    </div>
                  </div>
                  {renderStatusTag()}
                </div>

                <h2 style={{ color: "rgba(0, 0, 0, 1)", marginBottom: "8px" }}>
                  Equipamiento disponible
                </h2>

                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    flexWrap: "wrap",
                  }}
                >
                  {(d?.equipment ?? []).map((label) => (
                    <Tag
                      key={label}
                      icon={
                        label.toLowerCase().includes("wifi") ? (
                          <Wifi size={18} color="#2563eb" />
                        ) : label.toLowerCase().includes("audio") ? (
                          <AudioLines size={18} color="#2563eb" />
                        ) : label.toLowerCase().includes("pizarra") ||
                          label.toLowerCase().includes("video") ? (
                          <MonitorPlay size={18} color="#2563eb" />
                        ) : (
                          <Monitor size={18} color="#2563eb" />
                        )
                      }
                      text={label}
                      type={Tags.info}
                      customStyle={css`
                        background: #f9fafb;
                        color: #0f172a;
                        font-weight: 500;
                        padding: 8px 12px;
                        gap: 6px;
                      `}
                    />
                  ))}
                </div>
              </CardContainer>

              <CardContainer>
                <h1
                  style={{
                    color: "rgba(0, 0, 0, 1)",
                    marginBottom: "8px",
                    fontSize: "24px",
                  }}
                >
                  Confirmanos tu presencia escaneando el código QR
                </h1>
                <Button
                  text={"Hacer check in"}
                  onClick={() => {
                    const canCheckIn = !!data?.roomEvents?.some(
                      (x) => x.status !== "completed"
                    );
                    if (!canCheckIn) return;
                    const e = data?.roomEvents?.find(
                      (x) => x.status !== "completed"
                    );
                    if (e) roomService.checkInEvent(e.id);
                  }}
                  customStyle={css`
                    width: 100%;
                    justify-content: center;
                    gap: 10px;
                    background: rgba(0, 66, 206, 1);
                    color: rgba(255, 255, 255, 1);
                    border: 1px solid #e2e8f0;
                    box-shadow: 0 2px 8px rgba(2, 8, 23, 0.05);
                    opacity: ${data?.roomEvents?.some(
                    (x) => x.status !== "completed"
                  )
                      ? 1
                      : 0.5};
                    pointer-events: ${data?.roomEvents?.some(
                        (x) => x.status !== "completed"
                      )
                      ? "auto"
                      : "none"};
                    &:hover {
                      background: rgba(92, 0, 104, 1);
                    }
                  `}
                />
              </CardContainer>

              <CardContainer
                customStyle={css`
                  h1 {
                    color: rgba(0, 0, 0, 1);
                    margin-bottom: 8px;
                    font-size: 24px;
                  }
                `}
              >
                <h1>Reservas de la semana</h1>
                <ReservasLista>
                  {(data?.roomEvents ?? []).map((ev) => (
                    <ReservationItem key={ev.id}>
                      <ResLeft>
                        <Avatar>{initials(ev.organizer)}</Avatar>
                        <ResInfo>
                          <span>{ev.organizer}</span>
                          <small>
                            {new Intl.DateTimeFormat(undefined, {
                              weekday: "long",
                            }).format(new Date(ev.start))}
                          </small>
                        </ResInfo>
                      </ResLeft>
                      <ResRight>
                        <Clock size={16} />
                        <span>{timeRange(ev.start, ev.end)}</span>
                      </ResRight>
                    </ReservationItem>
                  ))}
                </ReservasLista>
              </CardContainer>
            </ColumnaPrincipal>

            <ColumnaLateral>
              <CardContainer
                customStyle={css`
                  width: 100%;
                  text-align: left;
                  h3 {
                    margin: 0 0 12px;
                    font-size: 18px;
                    font-weight: 700;
                  }
                `}
              >
                <h3>Estado actual</h3>
                <FilaEstado>
                  <span>Estado:</span>
                  {renderStatusTag()}
                </FilaEstado>
                <FilaEstado>
                  <span>Capacidad:</span>
                  <strong>{loading ? "…" : d?.capacity ?? "-"} personas</strong>
                </FilaEstado>
                <FilaEstado>
                  <span>Reservas hoy:</span>
                  <strong>
                    {
                      (data?.roomEvents ?? []).filter((ev) => {
                        const s = new Date(ev.start);
                        const n = new Date();
                        return s.toDateString() === n.toDateString();
                      }).length
                    }
                  </strong>
                </FilaEstado>
              </CardContainer>

              <CardContainer
                customStyle={css`
                  width: 100%;
                  text-align: center;
                  h3 {
                    margin: 0 0 12px;
                    font-size: 18px;
                    font-weight: 700;
                  }
                  p {
                    margin: 0 0 16px;
                    color: #64748b;
                    font-size: 14px;
                  }
                `}
              >
                <h3>Código QR</h3>
                <p>Escaneá para acceso rápido a esta sala</p>
                <QRBox>
                  {d?.qrImageUrl ? (
                    <img
                      src={d.qrImageUrl}
                      alt={`QR ${d.name}`}
                      width={120}
                      height={120}
                      style={{ borderRadius: 8 }}
                    />
                  ) : (
                    <QrCode size={56} />
                  )}
                </QRBox>
              </CardContainer>
            </ColumnaLateral>
          </ContentGrid>
        </PageInner>
      </RoomPageContainer>
    </>
  );
};