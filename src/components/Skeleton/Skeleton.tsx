import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  width?: number | string;
  height?: number | string;
}

const Skeleton: React.FC<Props> = (props) => {
  const { width = 50, height = 50, className, style, ...rest } = props;

  const styleWidth = typeof width === 'number' ? `${width}px` : width;
  const styleHeight = typeof height === 'number' ? `${height}px` : height;

  return (
    <div
      {...rest}
      className={cx('getWrapperCss', className)}
      style={{ width: styleWidth, height: styleHeight, ...style }}
    />
  );
};

export default Skeleton;
