import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const DirectDebit = forwardRef<SVGSVGElement, CommonProps>(
  ({ size = 24 }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="14" fill="#231F20" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5421 13.9086V22.4873C16.5421 22.4873 11.6528 21.5894 11.6528 18.1802C11.6528 15.4595 15.2723 14.2608 16.5421 13.9086ZM16.5421 13.748C13.6033 13.5321 6.94078 14.9336 6.94078 17.9998C6.94078 20.0003 10.4687 22.9231 16.2145 23.0001C16.4413 23.0001 22.9688 22.744 22.8684 15.6149C22.7838 9.62853 18.3793 8.57989 16.9701 8.3969V8.03225C22.5852 8.39427 27 11.8312 27 15.9993C27 20.4104 22.0607 24 15.9873 24C9.91433 24 5 20.4104 5 15.9993C5 11.5896 9.91433 8 15.9873 8C16.1739 8 16.3588 8.00392 16.5421 8.00988V13.748Z"
        fill="white"
      />
    </svg>
  )
);

export default DirectDebit;
