export const roundNumber = (input: number, digits = 2, defaultValue = 0) => {
  if (!input && defaultValue != null && !isNaN(defaultValue)) {
    input = defaultValue;
  } else {
    if (!input) return '';
  }

  input = Number(input);

  return input.toFixed(digits);
};
