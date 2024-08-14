export const useNotch = () => {
  const mheight = sessionStorage.getItem('sim-margin-height') || '0';
  const height = Number.parseFloat(mheight);

  return { height };
};
