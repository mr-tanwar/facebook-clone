export const textColors = {
  // Semantic
  textError: '#ff4d4f',
  textSuccess: '#52c41a',
  textInfo: '#1877F2',
  textWarningContrast: '#faad14',

  // Mono
  textPrimary: '#1d2129',
  textSecondary: '#606770',
  textDisabled: '#bec3c9',
  textInverse: '#ffffff',
  textOnDark: '#ffffff',
  textOnLight: '#1d2129',
} as const;

export const backgroundColors = {
  bgPrimary: '#ffffff',
  bgSecondary: '#f0f2f5',
  bgDark: '#18191a',
  bgInfo: '#1877F2',
} as const;

export const borderColors = {
  borderLight: '#ccd0d5',
  borderDark: '#3e4042',
} as const;

export const iconColors = {
  iconPrimary: '#1877F2',
  iconSecondary: '#606770',
  iconDisabled: '#bec3c9',
} as const;

export const colors = {
  textColors,
  backgroundColors,
  borderColors,
  iconColors,
} as const;

export type ColorsType = typeof colors;
