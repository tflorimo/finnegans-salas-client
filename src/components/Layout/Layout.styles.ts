import styled from "styled-components";
import { themes } from "../../theme/Theme";
import type { ThemeType } from "../../theme/Types";

export const LayoutStyles = styled.div<{$theme: ThemeType}>`
  background-color: ${({ $theme }: { $theme: ThemeType }) => themes[$theme].BACKGROUND_COLOR};
  color: ${({ $theme }: { $theme: ThemeType }) => themes[$theme].TEXT_COLOR};
  min-height: 100vh;
  transition: background-color 0.3s ease, color 0.3s ease;
`;