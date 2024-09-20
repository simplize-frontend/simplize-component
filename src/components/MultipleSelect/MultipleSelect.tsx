import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

import { PolygonIcon } from './PolygonIcon';
import { CheckedIcon } from './CheckedIcon';
import BottomSheet from '../BottomSheet';
import Typography from '../Typography';
const cx = classNames.bind(styles);

export interface valueProp {
  value: any;
  label: any;
  isDisable?: boolean;
}

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  defaultValues?: any[];
  location?: '0' | '1/4' | '1/2' | '3/4' | 'full' | 'fit';
  displayElement?: (
    option: { value: any; label: any; isDisable?: boolean }[],
    selected: any[]
  ) => JSX.Element;
  options: valueProp[];
  onSelectedChange: (value: any[]) => void;
  header?: JSX.Element;
  onDisableSelect?: (value) => void;
  disable?: boolean;
}

const MultipleSelect: React.FC<Props> = (props): JSX.Element => {
  const {
    defaultValues = [],
    options,
    onSelectedChange,
    location = 'fit',
    onDisableSelect,
    header,
    displayElement,
    disable,
    ...rest
  } = props;
  const [isOpenBottomsheet, setIsOpenBottomsheet] = React.useState(false);

  const [selected, setSelected] = React.useState<any[]>(defaultValues);
  const [scrollLocation, setScrollLocation] = React.useState<any>(0);

  const scrollRef = React.useRef<any>();

  const handleChange = React.useCallback(
    (value) => {
      setSelected(
        selected.includes(value)
          ? selected.filter((item) => item !== value)
          : [...selected, value]
      );
      onSelectedChange(selected);
    },
    [onSelectedChange, selected]
  );

  React.useEffect(() => {
    if (!scrollRef || !scrollRef.current) return;
    const handleScroll = (e) => {
      setScrollLocation(e.target.scrollTop);
    };
    scrollRef.current.addEventListener('scroll', handleScroll);
    return () => {
      scrollRef.current.removeEventListener('scroll', handleScroll);
    };
  }, [scrollRef, setScrollLocation]);

  React.useEffect(() => {
    document
      .getElementsByClassName(cx('container'))[0]
      .scrollTo({ top: scrollLocation });
  }, [scrollLocation, selected]);

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
        {displayElement !== undefined ? (
          displayElement(options, selected)
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
        className={cx('wrapper')}
      >
        {header}
        <div className={cx('container')} ref={scrollRef}>
          {options.map((item) => (
            <div
              key={item.value}
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
                <CheckedIcon />
              </div>
            </div>
          ))}
        </div>
      </BottomSheet>
    </>
  );
};

export default MultipleSelect;
