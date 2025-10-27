import { Edit2, Eye, Filter } from "lucide-react";
import { useMemo, useState } from "react";

import { Button } from "../../components/Button/Button";
import { ButtonVariant } from "../../components/Button/types";
import { CardContainer } from "../../components/CardContainer/CardContainer";
import { Tag } from "../../components/Tag/Tag";
import { Tags } from "../../components/Tag/types";
import { SideBar } from "../../shared/components/SideBar/SideBar";
import Header from "../../shared/components/Header/Header";
//import { InputSearch } from "../../components/InputSearch/InputSearch";

import {
  AdminEventsContainer,
  AdminEventsPageWrapper,
  AdminHeaderWrapper,
  attendeesTagStyle,
  EmptyState,
  filterButtonStyle,
  HeaderContent,
  IconBtn,
  PageHeader,
  PageInner,
  PageTitle,
  Table,
  tableCardStyle,
  Toolbar,
} from "./stylesAdminEvents";

// uso los datos del mock
import { useGetAdminEvents } from "./hooks/useGetAdminEvents";

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
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
  const [eventSearched, setEventSearched] = useState<string>("");

  const { roomEvents } = useGetAdminEvents()

  const filteredEvents = useMemo(() => {
    const searchTerm = eventSearched.trim().toLowerCase();
    if (!searchTerm) return roomEvents;
    return roomEvents.filter((ev) =>
      ev.title?.toLowerCase().includes(searchTerm) ||
      ev.roomName?.toLowerCase().includes(searchTerm)
    );
  }, [eventSearched, roomEvents]);

  return (
    <AdminEventsPageWrapper>
      <SideBar
        isCollapsed={isSidebarCollapsed}
        onToggle={() => setIsSidebarCollapsed((prevState) => !prevState)}
      />
      
      <AdminHeaderWrapper $collapsed={isSidebarCollapsed}>
        <Header />
      </AdminHeaderWrapper>

      <AdminEventsContainer $collapsed={isSidebarCollapsed}>
        <PageInner>
          <PageHeader>
            <HeaderContent>
              <PageTitle>Eventos Programados</PageTitle>
            </HeaderContent>
          </PageHeader>

          <Toolbar>
            {/* TODO: Descomentar cuando se implemente el componente InputSearch*/}
            {/* <InputSearch
              placeholder="Buscar eventos..."
              value={query}
              onSearch={(term) => setEventSearched(term)}
              onChange={(e) => setEventSearched(e.target.value)}
            /> */}

            <Button
              text="Filtrar"
              icon={<Filter size={16} />}
              variant={ButtonVariant.light}
              onClick={() => { }}
              customStyle={filterButtonStyle}
            />
          </Toolbar>

          <CardContainer customStyle={tableCardStyle}>
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
                {filteredEvents.length === 0 && (
                  <tr>
                    <td colSpan={6}>
                      <EmptyState>
                        <h3>Sin resultados</h3>
                        <p>Probá con otro término de búsqueda.</p>
                      </EmptyState>
                    </td>
                  </tr>
                )}

                {filteredEvents.map((ev) => (
                  <tr key={ev.id}>
                    <td>{ev.title}</td>
                    <td>{ev.roomName}</td>
                    <td>{fmtDate(ev.start)}</td>
                    <td>{`${fmtTime(ev.start)}–${fmtTime(ev.end)}`}</td>
                    <td>
                      <Tag
                        text={`${ev.attendees ?? ev.guests?.length ?? 0}`}
                        type={Tags.info}
                        customStyle={attendeesTagStyle}
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