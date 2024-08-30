import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface Props {
  children: React.ReactNode;
  visible: boolean;
  onClose: () => void;
  title: React.ReactNode;
  className?: string;
}

const Dialog = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, visible, onClose, title, className, ...rest } = props;

  return (
    visible && (
      <>
        <div className={cx('dialogMask')} onClick={onClose} />
        <div className={cx('dialogOverlay', className)} ref={ref} {...rest}>
          <div className={cx('dialog')} onClick={(e) => e.stopPropagation()}>
            <div className={cx('dialogHeader')}>
              {title}
            </div>
            <div className={cx('dialogBody')}>{children}</div>
          </div>
        </div>
      </>
    )
  );
});

export default Dialog;
