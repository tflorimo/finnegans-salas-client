export const breakpoints = {
  xs: "425px",
  sm: "480px",
  md: "768px",
  lg: "1024px",
  xl: "1200px",
  xxl: "1280px",
  xxxl: "1440px",
};

export const media = {
  xs: `@media (max-width: ${breakpoints.xs})`,
  sm: `@media (max-width: ${breakpoints.sm})`,
  md: `@media (max-width: ${breakpoints.md})`,
  lg: `@media (max-width: ${breakpoints.lg})`,
  xl: `@media (max-width: ${breakpoints.xl})`,
  xxl: `@media (max-width: ${breakpoints.xxl})`,
  xxxl: `@media (max-width: ${breakpoints.xxxl})`,
};

export const mediaMin = {
  xs: `@media (min-width: ${breakpoints.xs})`,
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  mdPlus: `@media (min-width: 769px)`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  xxl: `@media (min-width: ${breakpoints.xxl})`,
  xxxl: `@media (min-width: ${breakpoints.xxxl})`,
};