import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const Microsoft = forwardRef<SVGSVGElement, CommonProps>(
  ({ size = 24 }, ref) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_4430_187535)">
        <path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="#F0F0F0"
        />
        <path
          d="M12.0001 17.2178C14.8816 17.2178 17.2175 14.8819 17.2175 12.0005C17.2175 9.11898 14.8816 6.78308 12.0001 6.78308C9.11862 6.78308 6.78271 9.11898 6.78271 12.0005C6.78271 14.8819 9.11862 17.2178 12.0001 17.2178Z"
          fill="#D80027"
        />
      </g>
      <defs>
        <clipPath id="clip0_4430_187535">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Microsoft;
