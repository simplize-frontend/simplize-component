import React from 'react';
import NativeMethod from '../NativeMethod';
import DownloadPage from '../DownloadPage';

interface Props {
  children: any;
  dispathUserInfo: any;
  theme: string;
  navigate: any;
  initApi: any;
}
const NativeInit: React.FC<Props> = (props) => {
  const { children, dispathUserInfo, theme, navigate, initApi } = props;
  const [isInit, setIsInit] = React.useState(false);
  const [isShowBlockPage, setShowBlockPage] = React.useState(false);

  const getUserInfo = React.useCallback(() => {
    (async () => {
      try {
        const res = await initApi.getMembershipInfo();
        dispathUserInfo(res.data);
      } catch (error: any) {
        NativeMethod.toast(error?.message, 'error_dev_log');
      }
    })();
  }, [NativeMethod]);

  const action = React.useCallback(() => {
    const theme = localStorage.getItem('sim-theme') || 'dark';
    getUserInfo();
    document.getElementsByTagName('html')[0]!.setAttribute('data-theme', theme);
    NativeMethod.loading.loadingDone();
    NativeMethod.addEventListener({
      name: 'JsToNative_navigate',
      handle: (params) => {
        navigate(params);
      },
    });
  }, [navigate, NativeMethod, getUserInfo, theme]);

  React.useEffect(() => {
    if (isInit) return;
    const intervalId = setInterval(() => {
      const token = sessionStorage.getItem('sim-token');
      if (token && action) {
        action();
        setIsInit(true);
        clearInterval(intervalId);
        return;
      }
    }, 20);
    return () => {
      clearInterval(intervalId);
    };
  }, [action]);

  React.useEffect(() => {
    if (isInit) return;
    const id = setTimeout(() => {
      setShowBlockPage(true);
    }, 3000);
    return () => {
      clearTimeout(id);
    };
  }, [isInit]);

  return isInit ? children : isShowBlockPage ? <DownloadPage /> : <></>;
};

export default NativeInit;
