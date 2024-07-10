import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
const cx = classNames.bind(styles);

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  isOpen: boolean;
  setIsOpen: any;
  isLockLocation?: boolean;
  location: '0' | '1/4' | '1/2' | '3/4' | 'full' | 'fit';
  children?: any;
}
const BottomSheet: React.FC<Props> = (props): JSX.Element => {
  const {
    isOpen,
    setIsOpen,
    children,
    location,
    isLockLocation = false,
    ...rest
  } = props;

  const contentRef = React.useRef<any>();
  const childRef = React.useRef<any>();
  const extentRef = React.useRef<any>();

  const [fitHeight, setFitHeight] = React.useState(0);

  const locationList = React.useMemo(
    () => ({
      '0': 0,
      '1/4': 0.25,
      '1/2': 0.5,
      '3/4': 0.75,
      full: 1,
      fit: fitHeight,
    }),
    [fitHeight]
  );

  React.useEffect(() => {
    if (!childRef || !childRef.current) return;
    if (!extentRef || !extentRef.current) return;
    childRef.current.style.height = 'fit-content';
    const height =
      (childRef.current.offsetHeight + extentRef.current.offsetHeight + 16) /
      window.innerHeight;
    childRef.current.style.height = '';

    setFitHeight(height > 1 ? 1 : height < 0 ? 0 : height);
  }, [childRef, children, extentRef]);

  const defaultLocation = React.useMemo(() => {
    return locationList[location];
  }, [location, locationList, fitHeight]);

  const handleClose = React.useCallback(() => {
    if (!contentRef.current) return;
    const content: HTMLElement = contentRef.current;
    setIsOpen(false);
    content.style.transition = 'all 0.1s';
    content.style.top = (1 - defaultLocation) * 100 + 'vh';
    content.style.height = defaultLocation * 100 + 'vh';
  }, [contentRef, defaultLocation]);

  const handleTouchmove = React.useCallback(
    (e) => {
      if (!contentRef.current) return;
      const content: HTMLElement = contentRef.current;
      let locationChanged: number = e.changedTouches[0].pageY;

      if (locationChanged < 0) {
        locationChanged = 0;
      }

      if (
        isLockLocation &&
        locationChanged < (1 - defaultLocation) * window.innerHeight
      ) {
        locationChanged = (1 - defaultLocation) * window.innerHeight;
      }
      content.style.transition = 'none';
      content.style.top = locationChanged + 'px';
      content.style.height = 'Calc(100vh - ' + locationChanged + 'px)';
    },
    [contentRef.current, defaultLocation, isLockLocation]
  );
  const handleTouchend = React.useCallback(
    (e) => {
      if (!contentRef.current) return;
      // const content: HTMLElement = contentRef.current;
      // content.style.top = e.changedTouches[0].pageY + 'px';
      // content.style.height =
      //   'Calc(100vh - ' + e.changedTouches[0].pageY + 'px)';
      const locateOfState = Object.values(locationList);
      const currentLocation =
        1 - e.changedTouches[0].pageY / window.innerHeight;
      let fixedLocation = locateOfState.reduce((prev, curr) => {
        return Math.abs(curr - currentLocation) <
          Math.abs(prev - currentLocation)
          ? curr
          : prev;
      });

      const content: HTMLElement = contentRef.current;
      if (fixedLocation > 0) {
        if (isLockLocation && fixedLocation > defaultLocation) {
          fixedLocation = defaultLocation;
        }

        content.style.top = (1 - fixedLocation) * 100 + 'vh';
        content.style.height = fixedLocation * 100 + 'vh';
        content.style.transition = 'all 0.1s';
      } else {
        handleClose();
      }
    },
    [contentRef, handleClose, locationList]
  );

  React.useEffect(() => {
    if (!extentRef || !extentRef?.current) return;
    // extentRef.current.addEventListener('dragenter', (e) => {
    //   console.log(e);
    // });
    extentRef.current?.addEventListener('touchmove', handleTouchmove);
    extentRef.current?.addEventListener('touchend', handleTouchend);
    // document.addEventListener('dragenter')
    return () => {
      extentRef.current?.removeEventListener('touchmove', handleTouchmove);
      extentRef.current?.removeEventListener('touchend', handleTouchend);
    };
  }, [extentRef, handleTouchmove, handleTouchend]);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = '';
    }
  }, [isOpen]);

  return (
    <div className={`${cx('wrapper')} ${isOpen ? cx('show') : cx('hide')}`}>
      <div
        className={cx('overlay')}
        onClick={() => {
          handleClose();
        }}
      ></div>
      <div
        className={cx('content')}
        ref={contentRef}
        style={{
          transition: 'all 0.1s',
          top: (1 - defaultLocation) * 100 + 'vh',
          height: defaultLocation * 100 + 'vh',
        }}
      >
        <div className={cx('extend-wrapper')} ref={extentRef}></div>
        <div ref={childRef} {...rest}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default BottomSheet;
