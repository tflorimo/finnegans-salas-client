export type SideBarProps = {
  isCollapsed: boolean;
  onToggle: () => void;
  onLogsClick?: () => void;
  onEventsClick?: () => void;
  onDownloadQRs?: () => void;
};
