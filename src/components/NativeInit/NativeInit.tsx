import React from 'react';
import NativeMethod from '../NativeMethod';

interface Props {
  children: any;
  downloadPage: any;
  dispathUserInfo: any;
  theme: string;
  navigate: any;
  initApi: any;
}
const NativeInit: React.FC<Props> = (props) => {
  const { children, downloadPage, dispathUserInfo, theme, navigate, initApi } =
    props;
  const [isInit, setIsInit] = React.useState(false);

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
    getUserInfo();
    document.getElementsByTagName('html')[0]!.setAttribute('data-theme', theme);
    setTimeout(() => {
      NativeMethod.loading.loadingDone();
    }, 10);
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

  return isInit ? children : downloadPage;
};

export default NativeInit;
