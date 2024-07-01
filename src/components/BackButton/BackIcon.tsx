import React, { SVGProps } from 'react';

export const BackIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {

    return (
      <svg
        {...props}
        ref={ref}
        width={13}
        height={20}
        viewBox="0 0 13 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="next"
          d="M11 2L3 10L11 18"
          stroke="#999999"
          strokeWidth={4}
          strokeLinecap="round"
        />
      </svg>

    );
  }
);
