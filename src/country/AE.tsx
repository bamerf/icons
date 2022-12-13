import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const AE = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_4430_187652)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M6.78271 16.1729L7.8262 23.2527C9.12614 23.7351 10.5322 23.999 12.0001 23.999C17.1596 23.999 21.5582 20.7425 23.2537 16.1729H6.78271Z"
        fill="black"
      />
      <path
        d="M6.78271 7.8266L7.8262 0.746785C9.12614 0.264394 10.5322 0.000488281 12.0001 0.000488281C17.1596 0.000488281 21.5582 3.25699 23.2537 7.8266H6.78271Z"
        fill="#6DA544"
      />
      <path
        d="M0.000488281 11.9999C0.000488281 17.1595 3.25704 21.558 7.8266 23.2536V0.746338C3.25704 2.44185 0.000488281 6.84037 0.000488281 11.9999Z"
        fill="#A2001D"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187652">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default AE;
