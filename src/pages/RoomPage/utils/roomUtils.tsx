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

export function timeRange(start: Date, end: Date): string {
  const f = new Intl.DateTimeFormat(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${f.format(start)} - ${f.format(end)}`;
}

export const renderStatusTag = (loading: boolean, is_bussy?: boolean) => {
  if (loading) return <Tag text="…" type={Tags.info} />;
  if (is_bussy) return <Tag text="Libre" type={Tags.success} />;
  else return <Tag text="Ocupada" type={Tags.info} />;
};
