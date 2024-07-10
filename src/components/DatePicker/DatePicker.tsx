import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import ScrollPicker from '../ScrollPicker';
import BottomSheet from '../BottomSheet';
import Typography from '../Typography';
const datePicker = classNames.bind(styles);

interface Props {
  defaultValue?: Date;
  onChange: (date: Date) => void;
  elementDisplay?: (date: {
    mm: number;
    hh: number;
    DD: number;
    MM: number;
    YYYY: number;
  }) => JSX.Element;
  yearList?: number[];
  header?: JSX.Element;
  isDisable?: boolean;
  isFuture?: boolean;
  type?: 'date' | 'datetime';
}

const DatePicker: React.FC<Props> = (props): JSX.Element => {
  const {
    defaultValue,
    onChange,
    yearList,
    header,
    isFuture,
    type = 'date',
    isDisable = false,
    elementDisplay,
  } = props;
  const [isSelectOpen, setIsSelectOpen] = React.useState(false);
  const [rawValue, setRawValue] = React.useState<{
    mm: number;
    hh: number;
    DD: number;
    MM: number;
    YYYY: number;
  }>({
    mm: defaultValue?.getMinutes() || new Date().getMinutes(),
    hh: defaultValue?.getHours() || new Date().getHours(),
    DD: defaultValue?.getDate() || new Date()?.getDate(),
    MM: (defaultValue?.getMonth() || new Date()?.getMonth()) + 1,
    YYYY: defaultValue?.getFullYear() || new Date()?.getFullYear(),
  });

  const HOURS = Array.from({ length: 24 }, (_, i) => i);
  const MINUTES = Array.from({ length: 60 }, (_, i) => i);
  const MONTHS = Array.from({ length: 12 }, (_, i) => i + 1);
  const YEARS = React.useMemo(() => {
    if (yearList) return yearList;
    const year: number[] = [];
    for (
      let i = 1970;
      i <= new Date().getFullYear() + (isFuture ? 100 : 0);
      i++
    ) {
      year.push(i);
    }
    return year;
  }, [yearList, isFuture]);
  const DATES = React.useMemo(() => {
    return getDaysInMonth(rawValue?.MM, rawValue?.YYYY);
  }, [rawValue?.MM, rawValue?.YYYY]);

  React.useEffect(() => {
    if (!defaultValue) return;
    const newValue = {
      YYYY: defaultValue.getFullYear(),
      MM: defaultValue.getUTCMonth() + 1,
      DD: defaultValue.getDate(),
      hh: defaultValue.getHours(),
      mm: defaultValue.getMinutes(),
    };
    const isValueZero = Object.values(newValue).every((item) => item === 0);
    const isRawZero = Object.values(rawValue).every((item) => item === 0);
    if (isValueZero || !isRawZero) return;
    setRawValue(newValue);
  }, [defaultValue, rawValue]);

  React.useEffect(() => {
    const newDate = new Date(
      rawValue.YYYY,
      rawValue.MM,
      rawValue.DD,
      rawValue.hh,
      rawValue.mm
    );
    onChange(newDate);
  }, [rawValue]);

  return (
    <>
      <div
        onClick={() => {
          setIsSelectOpen(true);
        }}
      >
        {elementDisplay ? (
          elementDisplay(rawValue)
        ) : (
          <div className={datePicker('datePicker')}>
            <Typography
              variant="body_two"
              className={datePicker('input', { rawValue })}
            >
              {isSelectOpen &&
              Object.values(rawValue).every((item) => item === 0)
                ? 'dd/mm/yyyy'
                : `${String(rawValue.DD).padStart(2, '0')}/${String(
                    rawValue.MM
                  ).padStart(2, '0')}/${String(rawValue.YYYY).padStart(
                    2,
                    '0'
                  )}`}
            </Typography>
          </div>
        )}
      </div>
      <BottomSheet
        isOpen={isSelectOpen}
        setIsOpen={setIsSelectOpen}
        location="fit"
        isLockLocation
      >
        {header || (
          <div className={datePicker('wrapperCard')}>
            <Typography variant="caption_two" className={datePicker('label')}>
              {'Chọn thời gian'}
            </Typography>
          </div>
        )}
        {!Object.values(rawValue).every((item) => item === 0) && (
          <div className={datePicker('scrollWrapper', isDisable && 'disable')}>
            <div className={datePicker('shadowTop')}></div>
            <div className={datePicker('shadowBottom')}></div>
            <div className={datePicker('scrollSelect')}></div>
            <div
              className={datePicker(
                'sideWrapper',
                type === 'datetime' ? 'sideWrapperLeft' : 'sideWrapperFull'
              )}
            >
              <ScrollPicker
                defaultValue={rawValue.DD}
                listSelect={DATES || []}
                onChange={(e) => {
                  setRawValue((prev) => ({ ...prev, DD: e }));
                }}
              />
              <ScrollPicker
                defaultValue={rawValue.MM}
                prefix={'tháng '}
                listSelect={MONTHS || []}
                onChange={(e) => {
                  setRawValue((prev) => ({ ...prev, MM: e }));
                }}
              />
              <ScrollPicker
                defaultValue={rawValue.YYYY}
                listSelect={YEARS || []}
                onChange={(e) => {
                  setRawValue((prev) => ({ ...prev, YYYY: e }));
                }}
              />
            </div>
            {type === 'datetime' && (
              <div className={datePicker('sideWrapper', 'sideWrapperRight')}>
                <ScrollPicker
                  className={datePicker('sideSpace', 'timeWrapper')}
                  defaultValue={rawValue.hh}
                  listSelect={HOURS || []}
                  onChange={(e) => {
                    setRawValue((prev) => ({ ...prev, hh: e }));
                  }}
                />
                <ScrollPicker
                  className={datePicker('timeWrapper')}
                  defaultValue={rawValue.mm}
                  width={20}
                  listSelect={MINUTES || []}
                  onChange={(e) => {
                    setRawValue((prev) => ({ ...prev, mm: e }));
                  }}
                />
              </div>
            )}
          </div>
        )}
      </BottomSheet>
    </>
  );
};

function getDaysInMonth(
  month = new Date().getMonth(),
  year = new Date().getFullYear()
) {
  const date = new Date(year, month - 1, 1);

  const days: any[] = [];

  while (date.getMonth() === month - 1) {
    days.push(new Date(date).getDate());
    date.setDate(date.getDate() + 1);
  }
  return days;
}

export default DatePicker;
