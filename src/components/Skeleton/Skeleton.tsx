import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface Props {
  width?: number | string;
  height?: number | string;
  cssCustom?: string;
}

const Skeleton: React.FC<Props> = ({ width = 50, height = 50, cssCustom }) => {
  const dynamicClass = cssCustom ? cx('getWrapperCss', cssCustom) : cx('getWrapperCss');

  const styleWidth = typeof width === 'number' ? `${width}px` : width;
  const styleHeight = typeof height === 'number' ? `${height}px` : height;

  return (
    <div
      className={dynamicClass}
      style={{ width: styleWidth, height: styleHeight }}
    />
  );
};

export default Skeleton;
