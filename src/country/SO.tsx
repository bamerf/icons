import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const SO = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_4430_187622)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#338AF3"
      />
      <path
        d="M12.0001 6.26062L13.2951 10.2464H17.486L14.0955 12.7096L15.3905 16.6954L12.0001 14.2321L8.60961 16.6954L9.90467 12.7096L6.51416 10.2464H10.705L12.0001 6.26062Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187622">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default SO;
