import { Button } from "../../components/Button/Button";
import { Header } from "../../shared/components/Header/Header";
import { CardContainer } from "../../components/CardContainer/CardContainer";
import { Tag } from "../../components/Tag/Tag";
import { Tags } from "../../components/Tag/types";
import { css } from "styled-components";
import {
  ArrowLeft,
  AudioLines,
  Monitor,
  MonitorPlay,
  QrCode,
  Users,
  Wifi,
  Clock,
} from "lucide-react";
import {
  BackLink,
  ContentGrid,
  ColumnaPrincipal,
  ColumnaLateral,
  FilaEstado,
  QRBox,
  RoomPageContainer,
  PageInner,
  ReservationItem,
  ResLeft,
  ResRight,
  Avatar,
  ResInfo,
  ReservasLista,
} from "./stylesRoomPage";

export const RoomPage = () => {
  console.log("RoomPage");

  return (
    <>
      {/* Barra de arriba */}
      <Header />

      {/* Página */}
      <RoomPageContainer>
        <PageInner>
          {/* Volver atrás */}
          <BackLink onClick={() => console.log("Volver atrás")}>
            <ArrowLeft size={18} />
            Volver a todas las salas
          </BackLink>

          <ContentGrid>
            {/* Columna izquierda (principal) */}
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
                {/* Título + estado */}
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
                      Sala de Juntas Principal
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
                      <span>Capacidad: 12 personas</span>
                    </div>
                  </div>

                  <Tag
                    text="Libre"
                    type={Tags.success}
                    customStyle={css`
                      font-weight: 600;
                      padding: 6px 12px;
                      border-radius: 999px;
                      display: inline-flex;
                      align-items: center;
                      gap: 8px;
                      &::before {
                        content: "";
                        width: 8px;
                        height: 8px;
                        border-radius: 999px;
                        background: currentColor;
                      }
                    `}
                  />
                </div>

                {/* Equipamiento */}
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
                  <Tag
                    icon={<Monitor size={18} color="#2563eb" />}
                    text="Proyector"
                    type={Tags.info}
                    customStyle={css`
                      background: #f9fafb;
                      color: #0f172a;
                      font-weight: 500;
                      padding: 8px 12px;
                      gap: 6px;
                    `}
                  />
                  <Tag
                    icon={<Wifi size={18} color="#2563eb" />}
                    text="Wifi"
                    type={Tags.info}
                    customStyle={css`
                      background: #f9fafb;
                      color: #0f172a;
                      font-weight: 500;
                      padding: 8px 12px;
                      gap: 6px;
                    `}
                  />
                  <Tag
                    icon={<AudioLines size={18} color="#2563eb" />}
                    text="Sistema de audio"
                    type={Tags.info}
                    customStyle={css`
                      background: #f9fafb;
                      color: #0f172a;
                      font-weight: 500;
                      padding: 8px 12px;
                      gap: 6px;
                    `}
                  />
                  <Tag
                    icon={<MonitorPlay size={18} color="#2563eb" />}
                    text="Pizarra digital"
                    type={Tags.info}
                    customStyle={css`
                      background: #f9fafb;
                      color: #0f172a;
                      font-weight: 500;
                      padding: 8px 12px;
                      gap: 6px;
                    `}
                  />
                </div>
              </CardContainer>

              {/* Card: Check-in */}
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
                  text="Hacer check in"
                  onClick={() => console.log("Hacer check in")}
                  customStyle={css`
                    width: 100%;
                    justify-content: center;
                    gap: 10px;
                    background: rgba(0, 66, 206, 1);
                    color: rgba(255, 255, 255, 1);
                    border: 1px solid #e2e8f0;
                    box-shadow: 0 2px 8px rgba(2, 8, 23, 0.05);
                    &:hover {
                      background: rgba(92, 0, 104, 1);
                    }
                  `}
                />
              </CardContainer>

              {/* Card: Reservas de la semana */}
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
                  <ReservationItem>
                    <ResLeft>
                      <Avatar>MG</Avatar>
                      <ResInfo>
                        <span>María González</span>
                        <small>Hoy</small>
                      </ResInfo>
                    </ResLeft>
                    <ResRight>
                      <Clock size={16} />
                      <span>09:00 - 10:30</span>
                    </ResRight>
                  </ReservationItem>

                  <ReservationItem>
                    <ResLeft>
                      <Avatar>CR</Avatar>
                      <ResInfo>
                        <span>Carlos Rodríguez</span>
                        <small>Hoy</small>
                      </ResInfo>
                    </ResLeft>
                    <ResRight>
                      <Clock size={16} />
                      <span>14:00 - 15:30</span>
                    </ResRight>
                  </ReservationItem>

                  <ReservationItem>
                    <ResLeft>
                      <Avatar>AM</Avatar>
                      <ResInfo>
                        <span>Ana Martínez</span>
                        <small>Hoy</small>
                      </ResInfo>
                    </ResLeft>
                    <ResRight>
                      <Clock size={16} />
                      <span>16:00 - 17:00</span>
                    </ResRight>
                  </ReservationItem>

                  <ReservationItem>
                    <ResLeft>
                      <Avatar>LF</Avatar>
                      <ResInfo>
                        <span>Luis Fernández</span>
                        <small>Mañana</small>
                      </ResInfo>
                    </ResLeft>
                    <ResRight>
                      <Clock size={16} />
                      <span>10:00 - 11:30</span>
                    </ResRight>
                  </ReservationItem>
                </ReservasLista>
              </CardContainer>
            </ColumnaPrincipal>

            {/* Columna derecha (lateral) */}
            <ColumnaLateral>
              {/* Card: Estado actual */}
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
                  <Tag
                    text="Libre"
                    type={Tags.success}
                    customStyle={css`
                      font-weight: 600;
                      padding: 6px 12px;
                      border-radius: 999px;
                      display: inline-flex;
                      align-items: center;
                      gap: 8px;
                      &::before {
                        content: "";
                        width: 8px;
                        height: 8px;
                        border-radius: 999px;
                        background: currentColor;
                      }
                    `}
                  />
                </FilaEstado>

                <FilaEstado>
                  <span>Capacidad:</span>
                  <strong>12 personas</strong>
                </FilaEstado>

                <FilaEstado>
                  <span>Reservas hoy:</span>
                  <strong>3</strong>
                </FilaEstado>
              </CardContainer>

              {/* Card: Código QR */}
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
                  <QrCode size={56} />
                </QRBox>
              </CardContainer>
            </ColumnaLateral>
          </ContentGrid>
        </PageInner>
      </RoomPageContainer>
    </>
  );
}