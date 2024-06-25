import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import NativeMethod from '../NativeMethod';
import { useLocation, useNavigate } from 'react-router-dom';
import { BackIcon } from './BackIcon';
const cx = classNames.bind(styles);

const BackButton: React.FC = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div
      className={cx('wrapper')}
      onClick={() => {
        console.log();
        if (location.pathname === '/') {
          NativeMethod.closeWebview();
        } else {
          navigate(-1);
        }
      }}
    >
      <BackIcon />
    </div>
  );
};

export default BackButton;
