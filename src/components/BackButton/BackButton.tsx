import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { BackIcon } from './BackIcon';
import NativeMethod from '../NativeMethod';
const cx = classNames.bind(styles);

interface Props {
  location?: any;
  navigate?: any;
}
const BackButton: React.FC<Props> = (props): JSX.Element => {
  // const location = useLocation();
  // const navigate = useNavigate();
  const { location, navigate } = props;
  return (
    <div
      className={cx('wrapper')}
      onClick={() => {
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
