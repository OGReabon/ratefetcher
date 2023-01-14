import { BREAKPOINTS } from "../utils/constants";

export const theme = {
  colors: {},
  shadows: {},
  gradients: {},
  fontSizes: {
    root: "16",
  },
  mediaQueries: {
    xs: `min-width: ${BREAKPOINTS.xs}px`,
    sm: `min-width: ${BREAKPOINTS.sm}px`,
    md: `min-width: ${BREAKPOINTS.md}px`,
    lg: `min-width: ${BREAKPOINTS.lg}px`,
    xl: `min-width: ${BREAKPOINTS.xl}px`,
    xxl: `min-width: ${BREAKPOINTS.xxl}px`,
    xxxl: `min-width: ${BREAKPOINTS.xxxl}px`,
    xsMax: `max-width: ${BREAKPOINTS.xs - 1}px`,
    smMax: `max-width: ${BREAKPOINTS.sm - 1}px`,
    mdMax: `max-width: ${BREAKPOINTS.md - 1}px`,
    lgMax: `max-width: ${BREAKPOINTS.lg - 1}px`,
    xlMax: `max-width: ${BREAKPOINTS.xl - 1}px`,
    xxlMax: `max-width: ${BREAKPOINTS.xxl - 1}px`,
    xxxlMax: `max-width: ${BREAKPOINTS.xxxl - 1}px`,
  },
};
