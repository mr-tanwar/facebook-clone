const fontSizes = {
  small: '0.875rem', // 14px - Captions, small text
  body: '1rem', // 16px - Default body text
  lead: '1.25rem', // 20px - Introductory text, emphasized text
  h1: '2.5rem', // 40px - Main headings
  h2: '2rem', // 32px - Subheadings
  h3: '1.5rem', // 24px - Section headings
  h4: '1.125rem', // 18px - Smaller headings
  hero: '3rem',
} as const;

const fontWeights = {
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
} as const;

const lineHeights = {
  sm: '1.2',
  base: '1.5',
  lg: '1.75',
  xl: '2',
} as const;

export const headings = {
  h1: {
    fontSize: fontSizes.h1,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.lg,
  },
  h2: {
    fontSize: fontSizes.h2,
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.base,
  },
  h3: {
    fontSize: fontSizes.h3,
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.base,
  },
} as const;

export const typography = {
  headings,
  fontSizes,
  fontWeights,
  lineHeights,
} as const;

export type TypographyType = typeof typography;
