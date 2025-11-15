import styled from "styled-components";
import { themes } from "../../theme/Theme";
import type { ThemeStylesType, ThemeType } from "../../theme/Types";

export const LayoutStyles = styled.div<{$theme: ThemeType}>`
  background-color: ${({ $theme }: { $theme: ThemeType }) => themes[$theme].BACKGROUND_COLOR};
  color: ${({ $theme }: { $theme: ThemeType }) => themes[$theme].TEXT_COLOR};
`;