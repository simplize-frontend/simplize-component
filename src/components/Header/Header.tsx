import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import Typography from '../Typography';
const header = classNames.bind(styles);

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  contentCenter?: string | React.ReactNode;
  contentRight?: React.ReactNode;
  contentLeft?: React.ReactNode;
}

const Header: React.FC<Props> = (props): JSX.Element => {
  const { contentCenter, contentLeft, contentRight, ...rest } = props;

  return (
    <div {...rest} className={header('wrapper', rest.className)}>
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
