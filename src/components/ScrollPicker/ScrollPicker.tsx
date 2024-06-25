import React from 'react';
import Typography from '../Typography';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

// type Props = React.ComponentPropsWithoutRef<typeof ReactDatePicker>

interface PropsScrollPicker {
  listSelect: any[];
  defaultValue: any;
  onChange: any;
  prefix?: any;
}

const ScrollPicker: React.FC<PropsScrollPicker> = (props): JSX.Element => {
  const { listSelect, defaultValue, onChange, prefix } = props;

  const datePicker = classNames.bind(styles);

  const timeOutInit = React.useRef<any>(null);
  const timeOut = React.useRef<any>(null);
  const scrollRef = React.useRef<any>();

  const [value, setValue] = React.useState<any>();

  React.useEffect(() => {
    setValue(defaultValue);
    scrollRef.current.setAttribute('style', 'scroll-behavior: smooth');
  }, [defaultValue]);

  React.useEffect(() => {
    if (!scrollRef.current) return;
    if (timeOut.current !== null) {
      clearTimeout(timeOut.current);
    }
    timeOut.current = setTimeout(() => {
      const position = scrollRef.current.scrollTop;
      const currPos = listSelect.indexOf(value);
      if (position !== currPos * 35) {
        scrollRef.current.scrollTop = currPos * 35;
      }
    }, 50);
  }, [value, scrollRef, timeOut]);

  React.useEffect(() => {
    if (defaultValue === value || value === undefined) return;
    if (timeOutInit.current !== null) {
      clearTimeout(timeOutInit.current);
    }
    timeOutInit.current = setTimeout(() => {
      onChange(value);
    }, 50);
  }, [value, defaultValue]);

  React.useEffect(() => {
    if (!scrollRef.current) return;
    let touch: any = {};
    let scroll: any = -1;

    touch = {
      touch: false,
      scroll: false,
    };
    scroll = -1;

    const roundTop = (e) => {
      const ch = e % 35 > 17 ? (e % 35) - 35 : e % 35;
      return e - ch;
    };
    const scrollToPos = (e, pos) => {
      // console.log(scroll[i], pos)
      if (scroll !== pos && pos % 35 === 0) {
        scroll = pos;
        e.target.scrollTop = pos;
      }
    };

    const handleCorrectPossition = (e) => {
      if (touch['touch'] === true || touch['scroll'] === true) return;
      const pos = scrollRef.current.scrollTop;

      if (pos === roundTop(pos)) {
        scroll = -1;
      }
      if (pos % 35 !== 0) {
        const corr = roundTop(pos);
        scrollToPos(e, corr);
      } else {
        setValue(listSelect[pos / 35]);
      }
    };
    const handleScroll = () => {
      touch['scroll'] = true;
    };
    const handleTouchStart = () => {
      touch['touch'] = true;
    };
    const handleTouchEnd = (e) => {
      touch['touch'] = false;
      handleCorrectPossition(e);
    };
    const handleScrollEnd = (e) => {
      setTimeout(function () {
        touch['scroll'] = false;
        handleCorrectPossition(e);
      }, 50);
    };

    scrollRef.current.addEventListener('scroll', handleScroll);
    scrollRef.current.addEventListener('scrollend', handleScrollEnd);
    scrollRef.current.addEventListener('touchstart', handleTouchStart);
    scrollRef.current.addEventListener('touchend', handleTouchEnd);

    return () => {
      scrollRef.current.removeEventListener('scroll', handleScroll);
      scrollRef.current.removeEventListener('scrollend', handleScrollEnd);
      scrollRef.current.removeEventListener('touchstart', handleTouchStart);
      scrollRef.current.removeEventListener('touchend', handleTouchEnd);
    };
  }, [scrollRef, listSelect]);

  return (
    <div className={datePicker('scrollItemWrapper')} ref={scrollRef}>
      {Array(2)
        .fill(0)
        .map(() => (
          <div className={datePicker('scrollItem')}>
            <Typography variant="body_one"></Typography>
          </div>
        ))}
      {listSelect.map((item) => (
        <div
          className={datePicker('scrollItem')}
          onClick={() => {
            setValue(item);
          }}
        >
          <Typography variant="body_one">
            {prefix}
            {item}
          </Typography>
        </div>
      ))}
      {Array(2)
        .fill(0)
        .map(() => (
          <div className={datePicker('scrollItem')}>
            <Typography variant="body_one"></Typography>
          </div>
        ))}
    </div>
  );
};

export default ScrollPicker;
