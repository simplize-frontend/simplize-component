export type MediaQueries = typeof mediaQueries;

export const sizeResponsive = {
  desktop: 'min-width: 1000px',
  mobile: 'max-width: 999px',
  tablet: '(max-width: 1366px) and (min-width: 1000px)',
};

export const mediaQueries = {
  // Mobile portrait:
  xs: '@media (max-width: 479px)',

  // Mobile landscape:
  sm: '@media (max-width: 599px)',

  // Tablet portrait:
  md: '@media (max-width: 767px)',

  // Tablet landscape:
  lg: '@media (max-width: 1023px)',

  // Laptop/desktop:
  xl: '@media (max-width: 1199px)',

  // Desktop:
  xxl: '@media (min-width: 1200px)',

  desktop: `@media (${sizeResponsive.desktop})`,
  mobile: `@media (${sizeResponsive.mobile})`,
  tablet: `@media ${sizeResponsive.tablet}`,
};
