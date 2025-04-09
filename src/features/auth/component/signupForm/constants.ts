export const DAYS = Array.from({ length: 31 }, (_, i) => i + 1);

const currentYear = new Date().getFullYear();

export const YEARS = Array.from(
  { length: currentYear - 1960 },
  (_, i) => 1950 + i,
);

export const MONTHS = Array.from({ length: 12 }, (_, i) =>
  new Date(0, i).toLocaleString('en', { month: 'long' }),
);

export const GENDER_OPTIONS = [
  { label: 'female', value: 'female' },
  { label: 'male', value: 'male' },
  { label: 'custom', value: 'custom' },
];
