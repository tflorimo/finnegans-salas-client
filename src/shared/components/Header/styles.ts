import styled from "styled-components";
import type { ThemeType } from "../../../theme/Types";


export const TopBar = styled.header<{theme: ThemeType}>`
  width: 100%;
  top: 0;
  z-index: 100;
  background: ${({ theme }) => (theme === "light" ? "#768ecaff" : "#000000")};
  border-bottom: 1px solid #e5e7eb;
  height: 64px;
`;

export const TopBarInner = styled.div`
  max-width: auto;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem;
`;

export const TopBarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  h1 {
    font-size: 16px;
    font-weight: 700;
    color: #4bc3fe; /* celeste */
    margin: 0;
  }

  h2 {
    font-size: 12px;
    font-weight: 400;
    color: #ffffffff; /* blanco */
    margin: 0;
  }
    margin-left: -60px;
`;

export const TopBarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  svg {
    cursor: pointer;
    color: #ffffffff;

    &:hover {
      color: #2563eb;
    }
  }
`;
