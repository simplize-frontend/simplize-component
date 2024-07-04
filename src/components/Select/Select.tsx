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
  location?: '0' | '1/4' | '1/2' | '3/4' | 'full' | 'fit';
  options: { value: any; label: any; isDisable?: boolean }[];
  onChange: (value) => void;
  header?: JSX.Element;
  onDisable?: (value) => void;
}

const Select: React.FC<Props> = (props): JSX.Element => {
  const {
    defaultValue,
    options,
    onChange,
    className,
    location = 'fit',
    onDisable,
    header,
  } = props;
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
        location={location}
        contentWrapperClassname={
          location === 'fit' ? cx('wrapper-fit') : cx('wrapper')
        }
      >
        {header}
        <div className={cx('container')}>
          {options.map((item, index) => (
            <div
              key={index}
              className={cx(
                'item-wrapper',
                selected === item.value ? 'active' : ''
              )}
              onClick={() => {
                if (item.isDisable) {
                  onDisable && onDisable(item.value);
                } else {
                  handleChange(item.value);
                }
              }}
            >
              {typeof item.label === 'string' ||
              typeof item.label === 'number' ? (
                <Typography variant="sub_heading_four">{item.label}</Typography>
              ) : (
                item.label
              )}
            </div>
          ))}
        </div>
      </BottomSheet>
    </>
  );
};

export default Select;
