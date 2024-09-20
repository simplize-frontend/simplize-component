export const useTheme = () => {
  const theme = localStorage.getItem('sim-theme') || 'dark';

  return { isDark: theme === 'dark' };
};
