import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import Dialog from '../Dialog';
import Typography from '../Typography';
import { PeopleIcon } from './icons/PeopleIcon';
const cx = classNames.bind(styles);

interface Props {
  visible: boolean;
  onClose: () => void;
  onOk: () => void;
}
const UpgradeDialog: React.FC<Props> = (props): JSX.Element => {
  const { visible, onClose, onOk } = props;

  return (
    <Dialog
      title={<PeopleIcon />}
      visible={visible}
      onClose={onClose}
      className={cx('wrapper')}
    >
      <div>
        <Typography
          variant="sub_heading_three"
          className={cx('textTitle')}
        >{`Nâng cấp tài khoản Hội viên`}</Typography>

        <Typography
          variant="caption"
          className={cx('text')}
        >{`Vui lòng nâng cấp tài khoản của bạn để có thể sử dụng tính năng này và tận hưởng những trải nghiệm tốt hơn.`}</Typography>
      </div>
      <div className={cx('wrapperButton')}>
        <Typography
          variant="sub_heading_four"
          onClick={onClose}
          className={cx('textCancel')}
        >{`Hủy`}</Typography>
        <Typography
          variant="sub_heading_four"
          className={cx('textOk')}
          onClick={onOk}
        >{`Nâng cấp`}</Typography>
      </div>
    </Dialog>
  );
};

export default UpgradeDialog;
