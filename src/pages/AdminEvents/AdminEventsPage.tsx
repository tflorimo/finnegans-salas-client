import { useMemo, useState } from "react";
import { Eye, Edit2, Filter } from "lucide-react";
import { css } from "styled-components";

import { SideBar } from "../../shared/components/SideBar/SideBar";
import { Button } from "../../components/Button/Button";
import { ButtonVariant } from "../../components/Button/types";
import { CardContainer } from "../../components/CardContainer/CardContainer";
import { Tag } from "../../components/Tag/Tag";
import { Tags } from "../../components/Tag/types";
import { InputSearch } from "../../components/InputSearch/InputSearch";

import {
  AdminEventsPageWrapper,
  AdminEventsContainer,
  PageInner,
  PageHeader,
  HeaderContent,
  PageTitle,
  Toolbar,
  Table,
  IconBtn,
  EmptyState,
} from "./stylesAdminEvents";

// uso los datos del mock
import { mockRoomsData } from "../../services/rooms/roomMocks";

type FlatEvent = {
  id: string;
  title: string;
  organizer?: string;
  start: string;
  end: string;
  attendees?: number;
  guests?: string[];
  roomId?: string;
  roomName: string;
};

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString(undefined, { year: "numeric", month: "2-digit", day: "2-digit" });

const fmtTime = (iso: string) =>
  new Date(iso).toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });

export default function AdminEvents() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [query, setQuery] = useState("");

  const allEvents: FlatEvent[] = useMemo(() => {
    const nameById = new Map(
      mockRoomsData.map((r) => [r.roomDetails.id, r.roomDetails.name])
    );
    return mockRoomsData.flatMap((r) =>
      (r.roomEvents ?? []).map((ev) => ({
        ...ev,
        roomName: nameById.get(ev.roomId ?? r.roomDetails.id) ?? r.roomDetails.name,
      }))
    );
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allEvents;
    return allEvents.filter((ev) =>
      ev.title?.toLowerCase().includes(q) ||
      ev.organizer?.toLowerCase().includes(q) ||
      ev.roomName?.toLowerCase().includes(q)
    );
  }, [allEvents, query]);

  return (
    <AdminEventsPageWrapper>
      <SideBar
        isCollapsed={isSidebarCollapsed}
        onToggle={() => setIsSidebarCollapsed((v) => !v)}
      />

      <AdminEventsContainer $collapsed={isSidebarCollapsed}>
        <PageInner>
          <PageHeader>
            <HeaderContent>
              <PageTitle>Eventos Programados</PageTitle>
            </HeaderContent>
          </PageHeader>

          <Toolbar>
            <InputSearch
              placeholder="Buscar eventos..."
              value={query}
              onSearch={(term) => setQuery(term)}
              onChange={(e) => setQuery(e.target.value)}
            />

            <Button
              text="Filtrar"
              icon={<Filter size={16} />}
              variant={ButtonVariant.light}
              onClick={() => {}}
              customStyle={css`
                height: 40px;
                padding: 0 14px;
                border: 1px solid #e2e8f0;
                border-radius: 10px;
                background: #fff;
                color: #0f172a;
                &:hover { background: #f8fafc; }
              `}
            />
          </Toolbar>

          <CardContainer
            customStyle={css`
              padding: 0;
              border: 1px solid #e5e7eb;
              border-radius: 14px;
              overflow: hidden;
              align-items: stretch;
              justify-content: flex-start;
            `}
          >
            <Table>
              <thead>
                <tr>
                  <th>Evento</th>
                  <th>Sala</th>
                  <th>Fecha</th>
                  <th>Horario</th>
                  <th>Asistentes</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              <tbody>
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={6}>
                      <EmptyState>
                        <h3>Sin resultados</h3>
                        <p>Probá con otro término de búsqueda.</p>
                      </EmptyState>
                    </td>
                  </tr>
                )}

                {filtered.map((ev) => (
                  <tr key={ev.id}>
                    <td>{ev.title}</td>
                    <td>{ev.roomName}</td>
                    <td>{fmtDate(ev.start)}</td>
                    <td>{`${fmtTime(ev.start)}–${fmtTime(ev.end)}`}</td>
                    <td>
                      <Tag
                        text={`${ev.attendees ?? ev.guests?.length ?? 0}`}
                        type={Tags.info}
                        customStyle={css`
                          min-width: 28px;
                          height: 28px;
                          padding: 0 8px;
                          font-weight: 700;
                          font-size: 12px;
                        `}
                      />
                    </td>
                    <td>
                      <IconBtn title="Ver">
                        <Eye size={16} />
                      </IconBtn>
                      <IconBtn title="Editar">
                        <Edit2 size={16} />
                      </IconBtn>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardContainer>
        </PageInner>
      </AdminEventsContainer>
    </AdminEventsPageWrapper>
  );
}