import React, { SVGProps } from 'react';

export const CheckedIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        width={14}
        height={12}
        viewBox="0 0 14 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={ref}
      >
        <path
          d="M5.36086 11.2881C5.22723 11.4241 5.0449 11.5 4.8555 11.5C4.6661 11.5 4.48377 11.4241 4.35013 11.2881L0.314136 7.20347C-0.104712 6.77964 -0.104712 6.09238 0.314136 5.66935L0.819503 5.15785C1.23848 4.73402 1.91688 4.73402 2.33573 5.15785L4.8555 7.70769L11.6643 0.817869C12.0832 0.394044 12.7623 0.394044 13.1805 0.817869L13.6859 1.32937C14.1047 1.7532 14.1047 2.44033 13.6859 2.86349L5.36086 11.2881Z"
          fill="#006CEC"
        />
      </svg>
    );
  }
);
