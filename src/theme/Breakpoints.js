const size = {
  xs: '360px',
  sm: '576px',
  md: '768px',
  lg: '1240px',
  xl: '1440px',
  xxl: '1920px',
};

export const breakpoint = {
  xs: `@media (min-width: ${size.xs})`,
  sm: `@media (min-width: ${size.sm})`,
  md: `@media (min-width: ${size.md})`,
  lg: `@media (min-width: ${size.lg})`,
  xl: `@media (min-width: ${size.xl})`,
  xxl: `@media (min-width: ${size.xxl})`,
};

export default { size, breakpoint };