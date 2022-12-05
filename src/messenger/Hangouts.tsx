import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const Hangouts = forwardRef<SVGSVGElement, CommonProps>(
  ({ size = 24 }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="14" fill="#0F9D58" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.9964 7C20.9646 7 25 11.0283 25 15.9964C25 20.6 21.463 25.2277 15.9964 28V24.5C11.2899 24.5 7 20.703 7 15.9964C7 11.0283 11.0283 7 15.9964 7ZM11 17V13H15V17C15 18.2 14.0329 19 13 19V17H11ZM17 17V13H21V17C21 18.2 20.0329 19 19 19V17H17Z"
        fill="white"
      />
    </svg>
  )
);

export default Hangouts;
