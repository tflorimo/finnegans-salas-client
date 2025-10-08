import styled from "styled-components";

export const SIDEBAR_WIDTH = 240;
export const SIDEBAR_COLLAPSED_WIDTH = 80;

export const SideBarContainer = styled.aside<{ $collapsed: boolean }>`
  width: ${({ $collapsed }) => ($collapsed ? `${SIDEBAR_COLLAPSED_WIDTH}px` : `${SIDEBAR_WIDTH}px`)};
  min-height: 100vh;
  background: #f8fafc;
  border-right: 1px solid #e2e8f0;
  padding: 24px 0;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 50;
  display: flex;
  flex-direction: column;
  transition: width 0.25s ease;
  overflow: hidden;
`;

export const ToggleButton = styled.button<{ $collapsed: boolean }>`
  position: ${({ $collapsed }) => ($collapsed ? "static" : "absolute")};
  top: ${({ $collapsed }) => ($collapsed ? "auto" : "16px")};
  right: ${({ $collapsed }) => ($collapsed ? "auto" : "16px")};
  width: 32px;
  height: 32px;
  border: none;
  background: #ffffff;
  color: #64748b;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: all 0.2s ease;
  z-index: ${({ $collapsed }) => ($collapsed ? "auto" : "10")};
  margin: ${({ $collapsed }) => ($collapsed ? "0 auto" : "0")};
  
  &:hover {
    background: #f1f5f9;
    color: #475569;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const SideBarHeader = styled.div<{ $collapsed: boolean }>`
  padding: ${({ $collapsed }) => ($collapsed ? "0 12px 24px" : "0 24px 24px")};
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: ${({ $collapsed }) => ($collapsed ? "center" : "flex-start")};
  transition: padding 0.25s ease;
`;

export const SideBarTitle = styled.h2`
  font-size: 16px;
  font-weight: 700;
  color: #1d4ed8;
  margin: 0 0 4px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SideBarSubtitle = styled.p`
  font-size: 12px;
  color: #64748b;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SideBarNav = styled.nav<{ $collapsed: boolean }>`
  flex: 1;
  padding: 0 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;