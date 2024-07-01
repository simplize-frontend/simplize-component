import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import NativeMethod from '../NativeMethod';

export type STYLE_TYPE = 'primary' | 'secondary' | 'default' | 'link';
export type SIZE = 'large' | 'regular' | 'small';
export type TYPE = 'button' | 'submit' | 'reset' | undefined;
const cx = classNames.bind(styles);

interface Props {
  children: React.ReactNode;
  location?: any;
  routes?: any;
  RoutesElement?: any;
}

const NavigateAnimation: React.FC<Props> = (props): JSX.Element => {
  const { children, RoutesElement, location, routes } = props;

  const [currentLocation, setCurrentLocation] = React.useState<any>(location);
  const [nextLocation, setNextLocation] = React.useState<any>('');

  const [stackUrl, setStackUrl] = React.useState<any[]>([]);
  const [stackLocation, setStackLocation] = React.useState<any[]>([]);

  const [showAnimate, setShowAnimate] = React.useState(false);

  const [styleCurr, setStyleCurr] = React.useState('');
  const [styleNext, setStyleNext] = React.useState('');

  const routerElement = React.useMemo(() => {
    const res = {};
    Object.values(routes).map((e: any) => {
      res[e.url] = e.element;
    });
    return res;
  }, [routes]);

  React.useEffect(() => {
    // if (location.pathname === '/' && stackUrl.length === 0) {
    //   setStackUrl(['/'])
    //   setNextLocation('/')
    //   return
    // }
    NativeMethod.navigate(location.pathname);
    const index = stackUrl.indexOf(location.pathname);
    if (index !== -1) {
      if (stackUrl.length !== 0) playAnimation('slide-pre');
      const newStack = [...stackLocation].splice(0, index + 1);
      setStackLocation(newStack);
      const newStackUrl = [...stackUrl].splice(0, index + 1);
      setStackUrl(newStackUrl);
    } else {
      if (stackUrl.length !== 0) playAnimation('slide-next');
      setStackLocation((prev) => [...prev, location]);
      setStackUrl((prev) => [...prev, location.pathname]);
    }
    setCurrentLocation(location);
    setShowAnimate(true);
    setTimeout(() => {
      setShowAnimate(false);
      stopAnimation();
    }, 200);
    return () => {
      setNextLocation(location.pathname);
    };
  }, [location]);

  const playAnimation = (navType) => {
    if (navType === 'slide-pre') {
      setStyleCurr(cx('basePrev'));
      setStyleNext(cx('slidePre'));
    } else {
      setStyleCurr(cx('slideNext'));
      setStyleNext(cx('baseNext'));
    }
  };
  const stopAnimation = () => {
    setStyleCurr('');
    setStyleNext('');
  };

  return (
    <>
      {showAnimate ? (
        <div className={styleNext}>{routerElement[nextLocation]}</div>
      ) : (
        <></>
      )}
      <div className={styleCurr}>
        <RoutesElement location={currentLocation}>{children}</RoutesElement>
      </div>
    </>
  );
};

export default NavigateAnimation;
