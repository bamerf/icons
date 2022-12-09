import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const WesternUnion = forwardRef<SVGSVGElement, CommonProps>(
  ({ size = 24 }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="14" fill="#0B0006" />
      <path d="M4 12H4.63536L7.11326 20.75H6.4779L4 12Z" fill="#FFFDFE" />
      <path
        d="M5.71545 12H6.35081L8.82872 20.75H8.19336L5.71545 12Z"
        fill="#FFFDFE"
      />
      <path
        d="M9.33674 12H7.43066L9.90857 20.75H11.8146L13.5079 15.0625L15.3091 20.75H17.1199L19.5025 12H17.6282L16.1459 17.5938L14.4196 12H12.6088L10.8934 17.4968L9.33674 12Z"
        fill="#FEDB32"
      />
      <path
        d="M19.5025 16.0625L20.5826 12H21.4086V17.5625C21.4086 18.3909 22.0913 19.0625 22.9334 19.0625H23.5688C24.411 19.0625 25.0937 18.3909 25.0937 17.5625V12H26.9998V17.5625C26.9998 19.461 25.4352 21 23.5053 21H22.997C21.067 21 19.5025 19.461 19.5025 17.5625V16.0625Z"
        fill="#FEDB32"
      />
    </svg>
  )
);

export default WesternUnion;
