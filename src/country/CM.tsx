import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const CM = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_4430_187469)">
      <path
        d="M17.2175 1.19108C15.6399 0.428241 13.87 0.000366211 12.0001 0.000366211C10.1303 0.000366211 8.36037 0.428241 6.78274 1.19108L5.73926 12.0004L6.78274 22.8096C8.36037 23.5725 10.1303 24.0004 12.0001 24.0004C13.87 24.0004 15.6399 23.5725 17.2175 22.8096L18.261 12.0004L17.2175 1.19108Z"
        fill="#D80027"
      />
      <path
        d="M12 7.82544L13.0359 11.0138H16.3888L13.6764 12.9846L14.7124 16.1732L12 14.2025L9.28753 16.1732L10.3237 12.9846L7.61133 11.0138H10.964L12 7.82544Z"
        fill="#FFDA44"
      />
      <path
        d="M6.78311 1.19165C2.76921 3.13256 0.000488281 7.24298 0.000488281 12.0005C0.000488281 16.758 2.76921 20.8685 6.78311 22.8094V1.19165Z"
        fill="#496E2D"
      />
      <path
        d="M17.2178 1.19165V22.8094C21.2317 20.8685 24.0004 16.758 24.0004 12.0005C24.0004 7.24303 21.2317 3.13256 17.2178 1.19165Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187469">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default CM;
