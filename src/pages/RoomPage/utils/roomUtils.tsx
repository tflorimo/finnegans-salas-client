import { Tag } from "../../../components/Tag/Tag";
import { Tags } from "../../../components/Tag/types";

export function initials(name: string): string {
  return name
    .split(" ")
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function timeRange(start: string, end: string): string {
  const f = new Intl.DateTimeFormat(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${f.format(new Date(start))} - ${f.format(new Date(end))}`;
}

export const renderStatusTag = (loading: boolean, status?: string) => {
  if (loading) return <Tag text="…" type={Tags.info} />;
  if (status === "available") return <Tag text="Libre" type={Tags.success} />;
  if (status === "occupied") return <Tag text="Ocupada" type={Tags.info} />;
  if (status === "maintenance")
    return <Tag text="Mantenimiento" type={Tags.danger} />;
  return null;
};
