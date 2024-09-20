export const useEnv = () => {
  const env = localStorage.getItem('sim-env') || 'dev';

  return { isDev: env === 'dev' };
};
