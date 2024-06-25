import React from 'react';
import BottomSheet from '../BottomSheet';
import Typography from '../Typography';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import ScrollPicker from '../ScrollPicker';
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
  }) => any;
  yearList?: number[];
  title?: string;
  isFuture?: boolean;
  type?: 'date' | 'datetime';
}

const WarningPeriod: React.FC<Props> = (props): JSX.Element => {
  const {
    defaultValue,
    onChange,
    yearList,
    title,
    isFuture,
    type,
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
    mm: 0,
    hh: 0,
    DD: 0,
    MM: 0,
    YYYY: 0,
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
                : `${rawValue.DD}/${rawValue.MM}/${rawValue.YYYY}`}
            </Typography>
          </div>
        )}
      </div>
      <BottomSheet
        isOpen={isSelectOpen}
        setIsOpen={setIsSelectOpen}
        location="fit"
      >
        <div className={datePicker('wrapperCard')}>
          <Typography variant="caption_two" className={datePicker('label')}>
            {title || 'Chọn thời gian'}
          </Typography>
        </div>
        {!Object.values(rawValue).every((item) => item === 0) && (
          <div className={datePicker('scrollWrapper')}>
            <div className={datePicker('scrollSelect')}></div>
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
            {type === 'datetime' && (
              <>
                <ScrollPicker
                  defaultValue={rawValue.hh}
                  listSelect={HOURS || []}
                  onChange={(e) => {
                    setRawValue((prev) => ({ ...prev, hh: e }));
                  }}
                />
                <ScrollPicker
                  defaultValue={rawValue.mm}
                  listSelect={MINUTES || []}
                  onChange={(e) => {
                    setRawValue((prev) => ({ ...prev, mm: e }));
                  }}
                />
              </>
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

export default WarningPeriod;
