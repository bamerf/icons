import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const TR = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_4430_187646)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#D80027"
      />
      <path
        d="M11.5087 9.80505L12.4933 11.1619L14.0879 10.6448L13.1017 12.0004L14.0862 13.3572L12.4922 12.8382L11.5061 14.1938L11.5071 12.5175L9.91309 11.9985L11.5077 11.4815L11.5087 9.80505Z"
        fill="#F0F0F0"
      />
      <path
        d="M8.82198 15.3906C6.94905 15.3906 5.43067 13.8722 5.43067 11.9993C5.43067 10.1263 6.94905 8.60794 8.82198 8.60794C9.40595 8.60794 9.95542 8.75565 10.4351 9.01557C9.68256 8.27954 8.65333 7.82532 7.51764 7.82532C5.21242 7.82532 3.34375 9.69404 3.34375 11.9992C3.34375 14.3044 5.21247 16.1731 7.51764 16.1731C8.65342 16.1731 9.68261 15.7188 10.4351 14.9828C9.95542 15.2429 9.40595 15.3906 8.82198 15.3906Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187646">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default TR;
