import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { useNotch } from '../..//hooks/use-notch';
import Header from '../../components/Header';

const cx = classNames.bind(styles);

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
  header?: any;
  isStickyHeader?: boolean;
  isNotch?: boolean;
}

const MainLayout: React.FC<Props> = (props): JSX.Element => {
  const {
    children,
    header,
    isStickyHeader = false,
    isNotch = true,
    ...newProps
  } = props;
  const { height } = useNotch();
  const headerRef = React.useRef<any>();

  React.useEffect(() => {
    if (!headerRef?.current || !isStickyHeader) return;
    let offsetY = headerRef.current.offsetTop;
    const handleSticky = () => {
      if (window.scrollY <= 56 + 10) {
        headerRef.current.classList.remove(cx('sticky'));
        headerRef.current.classList.remove(cx('hide'));
      } else if (window.scrollY < offsetY && offsetY - window.scrollY >= 56) {
        headerRef.current.classList.add(cx('sticky'));
        headerRef.current.classList.remove(cx('hide'));
        offsetY = window.scrollY;
      } else if (window.scrollY >= offsetY) {
        offsetY = window.scrollY;
        headerRef.current.classList.remove(cx('sticky'));
        headerRef.current.classList.add(cx('hide'));
      }
    };
    window.addEventListener('scroll', handleSticky);
    return () => {
      window.removeEventListener('scroll', handleSticky);
    };
  }, [headerRef, window, isStickyHeader]);

  return (
    <div
      {...newProps}
      className={`${cx('wrapper')} ${newProps.className}`}
      style={
        isNotch
          ? {
              paddingTop: `${height}px`,
              ...newProps.style,
            }
          : newProps.style
      }
    >
      <div ref={headerRef} className={cx('header-wrapper')}>
        {header || <Header />}
      </div>
      <div className={cx('content-wrapper')}>{children}</div>
    </div>
  );
};

export default MainLayout;
