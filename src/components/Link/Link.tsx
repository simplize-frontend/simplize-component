import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);

interface Props {
  href: string;
  children?: any;
}
const Link: React.FC<Props> = (props): JSX.Element => {
  const { href, children } = props;
  const navigate = useNavigate();
  return (
    <div
      className={cx('link')}
      onClick={() => {
        navigate(href);
      }}
    >
      {children}
    </div>
  );
};

export default Link;
