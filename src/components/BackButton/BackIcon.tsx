import React, { SVGProps } from 'react';

export const BackIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={11}
        height={18}
        viewBox="0 0 11 18"
        fill="none"
      >
        <path
          d="M10 1L2 9L10 17"
          stroke={props.stroke || '#999999'}
          strokeWidth={2}
          strokeLinecap="round"
        />
      </svg>
    );
  }
);
