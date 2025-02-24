export const shadows = {
  button: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Used for button hover effects
  card: '0px 4px 8px rgba(0, 0, 0, 0.12)', // Used for posts, comment boxes
  dropdown: '0px 6px 12px rgba(0, 0, 0, 0.15)', // Dropdown menus
  modal: '0px 8px 16px rgba(0, 0, 0, 0.2)', // Full-screen popups
  elevation1: '0px 1px 2px rgba(0, 0, 0, 0.08)', // Minimal elevation
  elevation2: '0px 3px 6px rgba(0, 0, 0, 0.12)', // Used for feed sections
  inset: 'inset 0px 2px 4px rgba(0, 0, 0, 0.06)', // Input fields
} as const;

export type ShadowsType = typeof shadows;
