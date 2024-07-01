import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import Typography from '../Typography';
const header = classNames.bind(styles);

interface Props {
  ref?: any;
  title?: React.ReactNode;
  contentRight?: React.ReactNode;
  contentLeft?: React.ReactNode;
  backButton: React.ReactNode;
}

const Header: React.FC<Props> = (props): JSX.Element => {
  const { ref, title, contentLeft, contentRight, backButton } = props;

  return (
    <div className={header('wrapper')} ref={ref}>
      <div className={header('content-left')}>
        {contentLeft ? contentLeft : backButton}
      </div>
      <div className={header('title')}>
        <Typography variant="sub_heading_two">{title}</Typography>
      </div>
      <div className={header('content-right')}>
        {contentRight ? contentRight : <></>}
      </div>
    </div>
  );
};

export default Header;
