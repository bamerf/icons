import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const Messages = forwardRef<SVGSVGElement, CommonProps>(
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
        fill="url(#paint0_linear_4430_189385)"
      />
      <path
        d="M16 23C20.9706 23 25 19.6421 25 15.5C25 11.3579 20.9706 8 16 8C11.0294 8 7 11.3579 7 15.5C7 18.1255 8.61889 20.4359 11.0702 21.7758C10.9881 22.4427 10.7415 23.3327 10 24C11.4021 23.7476 12.5211 23.2405 13.3571 22.6714C14.1928 22.885 15.0803 23 16 23Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4430_189385"
          x1="16"
          y1="2"
          x2="16"
          y2="30"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#5AF575" />
          <stop offset="1" stop-color="#13BD2C" />
        </linearGradient>
      </defs>
    </svg>
  )
);

export default Messages;
