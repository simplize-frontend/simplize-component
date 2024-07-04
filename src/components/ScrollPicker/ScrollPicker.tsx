import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import Typography from '../Typography';

// type Props = React.ComponentPropsWithoutRef<typeof ReactDatePicker>

interface PropsScrollPicker {
  listSelect: any[];
  defaultValue: any;
  className?: any;
  onChange: any;
  prefix?: any;
  width?: any;
}

const ScrollPicker: React.FC<PropsScrollPicker> = (props): JSX.Element => {
  const { listSelect, defaultValue, onChange, prefix, className, width } =
    props;

  const datePicker = classNames.bind(styles);

  const timeOutInit = React.useRef<any>(null);
  const timeOut = React.useRef<any>(null);
  const scrollRef = React.useRef<any>();

  const [value, setValue] = React.useState<any>();

  React.useEffect(() => {
    if (!scrollRef.current) return;
    setValue(defaultValue);
    scrollRef.current.setAttribute('style', 'scroll-behavior: smooth');
  }, [defaultValue, scrollRef.current]);

  React.useEffect(() => {
    if (!scrollRef.current) return;
    if (timeOut.current !== null) {
      clearTimeout(timeOut.current);
    }
    timeOut.current = setTimeout(() => {
      if (!scrollRef.current) return;
      const position = scrollRef.current?.scrollTop;
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
        e.scrollTop = pos;
      }
    };

    const handleCorrectPossition = () => {
      if (
        touch['touch'] === true ||
        touch['scroll'] === true ||
        !scrollRef.current
      )
        return;
      const ele = scrollRef.current;
      const pos = ele?.scrollTop;

      if (pos === roundTop(pos)) {
        scroll = -1;
      }
      if (pos % 35 !== 0) {
        const corr = roundTop(pos);
        scrollToPos(ele, corr);
      } else {
        setValue(listSelect[pos / 35]);
      }
    };
    let timer: any = null;
    const handleScroll = () => {
      touch['scroll'] = true;
      if (timer !== null) {
        clearTimeout(timer);
      }
      timer = setTimeout(function () {
        touch['scroll'] = false;
        handleCorrectPossition();
      }, 150);
    };
    const handleTouchStart = () => {
      touch['touch'] = true;
    };
    const handleTouchEnd = () => {
      touch['touch'] = false;
      handleCorrectPossition();
    };
    // const handleScrollEnd = (e) => {
    //   setTimeout(function () {
    //     touch['scroll'] = false;
    //     handleCorrectPossition(e);
    //   }, 50);
    // };

    scrollRef.current.addEventListener('scroll', handleScroll);
    // scrollRef.current.addEventListener('scrollend', handleScrollEnd);
    scrollRef.current.addEventListener('touchstart', handleTouchStart);
    scrollRef.current.addEventListener('touchend', handleTouchEnd);

    return () => {
      if (!scrollRef.current) return;
      scrollRef.current.removeEventListener('scroll', handleScroll);
      // scrollRef.current.removeEventListener('scrollend', handleScrollEnd);
      scrollRef.current.removeEventListener('touchstart', handleTouchStart);
      scrollRef.current.removeEventListener('touchend', handleTouchEnd);
    };
  }, [scrollRef, listSelect]);

  return (
    <div
      className={datePicker('scrollItemWrapper', className)}
      ref={scrollRef}
      style={{
        width: width + 'px',
      }}
    >
      {Array(2)
        .fill(0)
        .map(() => (
          <div className={datePicker('scrollItem')} key={Math.random()}>
            <Typography variant="body_one"></Typography>
          </div>
        ))}
      {listSelect.map((item, index) => (
        <div
          key={index}
          className={datePicker('scrollItem')}
          onClick={() => {
            setValue(item);
          }}
        >
          <Typography variant="body_one">
            {prefix}
            {prefix ? item : String(item).padStart(2, '0')}
          </Typography>
        </div>
      ))}
      {Array(2)
        .fill(0)
        .map(() => (
          <div className={datePicker('scrollItem')} key={Math.random()}>
            <Typography variant="body_one"></Typography>
          </div>
        ))}
    </div>
  );
};

export default ScrollPicker;
