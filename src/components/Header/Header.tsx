import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { useNotch } from '@/hooks';
import Typography from '../Typography';
const header = classNames.bind(styles);

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  contentCenter?: string | React.ReactNode;
  contentRight?: React.ReactNode;
  contentLeft?: React.ReactNode;
  overlay?: React.ReactNode;
}

const Header: React.FC<Props> = (props): JSX.Element => {
  const { contentCenter, contentLeft, contentRight, overlay, ...rest } = props;
  const { height } = useNotch();

  return (
    <div
      {...rest}
      className={header('wrapper', rest.className)}
      style={{
        position: 'fixed',
        top: height + 'px',
        ...rest.style,
      }}
    >
      {overlay ? (
        overlay
      ) : (
        <div
          className={header('overlay')}
          style={{
            height: height + 'px',
          }}
        ></div>
      )}

      <div className={header('content-left')}>
        {contentLeft ? contentLeft : <></>}
      </div>
      <div className={header('title')}>
        {typeof contentCenter === 'string' ? (
          <Typography variant="sub_heading_two">{contentCenter}</Typography>
        ) : (
          contentCenter
        )}
      </div>
      <div className={header('content-right')}>
        {contentRight ? contentRight : <></>}
      </div>
    </div>
  );
};

export default Header;
