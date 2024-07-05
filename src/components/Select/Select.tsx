import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

import { PolygonIcon } from './PolygonIcon';
import Typography from '../Typography';
import BottomSheet from '../BottomSheet';
const cx = classNames.bind(styles);

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  defaultValue?: any;
  location?: '0' | '1/4' | '1/2' | '3/4' | 'full' | 'fit';
  elementDisplay?: (option: {
    value: any;
    label: any;
    isDisable?: boolean;
  }) => JSX.Element;
  options: { value: any; label: any; isDisable?: boolean }[];
  onChange: (value) => void;
  header?: JSX.Element;
  onDisableSelect?: (value) => void;
}

const Select: React.FC<Props> = (props): JSX.Element => {
  const {
    defaultValue,
    options,
    onChange,
    location = 'fit',
    onDisableSelect,
    header,
    elementDisplay,
    ...rest
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
        onClick={() => {
          setIsOpenBottomsheet(true);
        }}
        style={{
          width: 'fit-content',
        }}
      >
        {elementDisplay !== undefined ? (
          elementDisplay(options.filter((e) => e.value === selected)[0])
        ) : (
          <div {...rest} className={cx('selected-wrapper', rest.className)}>
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
        )}
      </div>
      <BottomSheet
        isOpen={isOpenBottomsheet}
        setIsOpen={setIsOpenBottomsheet}
        location={location}
        className={
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
                  onDisableSelect && onDisableSelect(item.value);
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
