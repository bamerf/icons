import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const CO = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_4430_187478)">
      <path
        d="M0 12C0 5.37263 5.37262 0 12 0C18.6274 0 24 5.37263 24 12L12 13.0435L0 12Z"
        fill="#FFDA44"
      />
      <path
        d="M1.60596 18.0004C3.68088 21.5871 7.55857 24.0004 12.0002 24.0004C16.4418 24.0004 20.3195 21.5871 22.3945 18.0004L12.0002 17.2178L1.60596 18.0004Z"
        fill="#D80027"
      />
      <path
        d="M22.3938 17.9998C23.4148 16.2347 23.9995 14.1856 23.9995 11.9998H-0.000488281C-0.000488281 14.1856 0.584231 16.2347 1.60526 17.9998H22.3938Z"
        fill="#0052B4"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187478">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default CO;
