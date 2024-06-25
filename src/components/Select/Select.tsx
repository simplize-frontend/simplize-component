import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

import { PolygonIcon } from './PolygonIcon';
import BottomSheet from '../BottomSheet';
import Typography from '../Typography';
const cx = classNames.bind(styles);

interface Props {
  defaultValue?: any;
  className?: any;
  options: { value: any; label: any }[];
  onChange: (value) => void;
}

const Select: React.FC<Props> = (props): JSX.Element => {
  const { defaultValue, options, onChange, className } = props;
  const [isOpenBottomsheet, setIsOpenBottomsheet] = React.useState(false);

  const [selected, setSelected] = React.useState(defaultValue);

  const handleChange = React.useCallback((value) => {
    setSelected(value);
    onChange(value);
    setIsOpenBottomsheet(false);
  }, []);

  return (
    <>
      <div
        className={cx('selected-wrapper', className)}
        onClick={() => {
          setIsOpenBottomsheet(true);
        }}
      >
        <Typography variant="body_two" className={cx('line-limit')}>
          {options.filter((e) => e.value === selected)[0].label}
        </Typography>
        <div
          style={{
            minWidth: '10px',
            minHeight: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <PolygonIcon />
        </div>
      </div>
      <BottomSheet
        isOpen={isOpenBottomsheet}
        setIsOpen={setIsOpenBottomsheet}
        location="fit"
      >
        <div className={cx('container')}>
          <Typography variant="caption_two" className={cx('title')}>
            Giá cổ phiếu
          </Typography>
          {options.map((item) => (
            <div
              className={cx(
                'item-wrapper',
                selected === item.value ? 'active' : ''
              )}
              onClick={() => {
                handleChange(item.value);
              }}
            >
              <Typography variant="sub_heading_four">{item.label}</Typography>
            </div>
          ))}
        </div>
      </BottomSheet>
    </>
  );
};

export default Select;
