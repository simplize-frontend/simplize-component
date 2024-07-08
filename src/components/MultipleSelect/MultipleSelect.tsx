import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

import { PolygonIcon } from './PolygonIcon';
import { CheckedIcon } from './CheckedIcon';
import Typography from '../Typography';
import BottomSheet from '../BottomSheet';
const cx = classNames.bind(styles);

export interface valueProp {
  value: any;
  label: any;
  isDisable?: boolean;
}

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  defaultValues?: any[];
  location?: '0' | '1/4' | '1/2' | '3/4' | 'full' | 'fit';
  elementDisplay?: (option: {
    value: any;
    label: any;
    isDisable?: boolean;
  }) => JSX.Element;
  options: valueProp[];
  onChange: (value) => void;
  header?: JSX.Element;
  onDisableSelect?: (value) => void;
  multiple?: boolean;
  disable?: boolean;
}

const MultipleSelect: React.FC<Props> = (props): JSX.Element => {
  const {
    defaultValues = [],
    options,
    onChange,
    location = 'fit',
    onDisableSelect,
    header,
    elementDisplay,
    // multiple,
    disable,
    ...rest
  } = props;
  const [isOpenBottomsheet, setIsOpenBottomsheet] = React.useState(false);

  const [selected, setSelected] = React.useState<any[]>(defaultValues);

  const handleChange = React.useCallback((value) => {
    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  }, []);

  React.useEffect(() => {
    onChange(selected);
  }, [selected]);

  return (
    <>
      <div
        onClick={() => {
          if (!disable) setIsOpenBottomsheet(true);
        }}
        style={{
          width: 'fit-content',
        }}
      >
        {elementDisplay !== undefined ? (
          elementDisplay(options.filter((e) => e.value === selected)[0])
        ) : (
          <div
            {...rest}
            className={cx(
              'selected-wrapper',
              disable && 'disable',
              rest.className
            )}
          >
            <Typography variant="body_two" className={cx('line-limit')}>
              {options.filter((e) => selected.includes(e.value)).length +
                ' item selected'}
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
        className={location === 'fit' ? cx('wrapper-fit') : cx('wrapper')}
      >
        {header}
        <div className={cx('container')}>
          {options.map((item, index) => (
            <div
              key={index}
              className={cx(
                'item-wrapper',
                selected.includes(item.value) ? 'active' : ''
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
              <div className={cx('checked-icon')}>
                {selected.includes(item.value) ? <CheckedIcon /> : <></>}
              </div>
            </div>
          ))}
        </div>
      </BottomSheet>
    </>
  );
};

export default MultipleSelect;
