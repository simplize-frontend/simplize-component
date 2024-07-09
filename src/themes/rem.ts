export const rem = (value: number | string): string => {
  const parsedValue = typeof value === 'string' ? parseInt(value, 10) : value;
  return `${parsedValue / 16}rem`;
};
