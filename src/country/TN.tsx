import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const TN = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_4430_187645)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#D80027"
      />
      <path
        d="M11.9999 17.7386C15.1695 17.7386 17.739 15.1692 17.739 11.9995C17.739 8.82988 15.1695 6.26038 11.9999 6.26038C8.83025 6.26038 6.26074 8.82988 6.26074 11.9995C6.26074 15.1692 8.83025 17.7386 11.9999 17.7386Z"
        fill="#F0F0F0"
      />
      <path
        d="M12.7065 9.80505L13.691 11.1619L15.2856 10.6448L14.2995 12.0004L15.2839 13.3572L13.6899 12.8382L12.7038 14.1938L12.7048 12.5175L11.1108 11.9985L12.7054 11.4815L12.7065 9.80505Z"
        fill="#D80027"
      />
      <path
        d="M13.3039 15.3906C11.431 15.3906 9.91261 13.8722 9.91261 11.9993C9.91261 10.1263 11.431 8.60794 13.3039 8.60794C13.8879 8.60794 14.4374 8.7556 14.9171 9.01557C14.1645 8.27958 13.1354 7.82532 11.9996 7.82532C9.69445 7.82532 7.82568 9.69404 7.82568 11.9992C7.82568 14.3044 9.69445 16.1731 11.9996 16.1731C13.1354 16.1731 14.1646 15.7188 14.9171 14.9828C14.4374 15.2429 13.8879 15.3906 13.3039 15.3906Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187645">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default TN;
