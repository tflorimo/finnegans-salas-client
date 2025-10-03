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
  Users,
  Wifi,
} from "lucide-react";
import { BackLink } from "./stylesRoomPage";
import { RoomPageContainer, PageInner } from "./stylesRoomPage.ts";

export const RoomPage = () => {
  console.log("RoomPage");

  return (
    <>
      {/* Barra de arriba */}
      <Header />
      {/* Arranca la pagina */}
      <RoomPageContainer>
        <PageInner>
          {/* Volver atras a ver las salas */}
          <>
            <BackLink onClick={() => console.log("Volver atrás")}>
              <ArrowLeft size={18} />
              Volver a todas las salas
            </BackLink>
          </>

          {/* Card */}
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
                    color: "rgba(0, 0, 0, 1)",
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
                    color: "rgba(0, 0, 0, 1)",
                    fontSize: 14,
                    marginTop: 6,
                  }}
                >
                  <Users size={16} />
                  <span>Capacidad: 12 personas</span>
                </div>
              </div>

              {/* Tag con Estado dinámico Libre, ocupada, mantenimiento */}
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
            {/* Subtítulo */}
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
            {/* Eventos - Agenda de la semana */}
            <CardContainer children={undefined}></CardContainer>
          </CardContainer>
        </PageInner>
      </RoomPageContainer>
    </>
  );
};
