import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const Spectrum = forwardRef<SVGSVGElement, CommonProps>(
  ({ size = 24 }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 11.6C2 8.23969 2 6.55953 2.65396 5.27606C3.2292 4.14708 4.14708 3.2292 5.27606 2.65396C6.55953 2 8.23969 2 11.6 2H20.4C23.7603 2 25.4405 2 26.7239 2.65396C27.8529 3.2292 28.7708 4.14708 29.346 5.27606C30 6.55953 30 8.23969 30 11.6V20.4C30 23.7603 30 25.4405 29.346 26.7239C28.7708 27.8529 27.8529 28.7708 26.7239 29.346C25.4405 30 23.7603 30 20.4 30H11.6C8.23969 30 6.55953 30 5.27606 29.346C4.14708 28.7708 3.2292 27.8529 2.65396 26.7239C2 25.4405 2 23.7603 2 20.4V11.6Z"
        fill="url(#paint0_linear_4430_189386)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.24512 10.68C9.24512 9.88747 9.88759 9.245 10.6801 9.245C17.3103 9.245 22.6851 14.6198 22.6851 21.25C22.6851 22.0619 22.027 22.72 21.2151 22.72H17.5051C16.6933 22.72 16.0351 22.0619 16.0351 21.25C16.0351 18.2925 13.6376 15.895 10.6801 15.895C9.88759 15.895 9.24512 15.2525 9.24512 14.46V10.68Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4430_189386"
          x1="30"
          y1="30"
          x2="2"
          y2="2"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3D35DE" />
          <stop offset="0.265" stopColor="#5137E8" />
          <stop offset="1" stopColor="#793CF8" />
        </linearGradient>
      </defs>
    </svg>
  )
);

export default Spectrum;
