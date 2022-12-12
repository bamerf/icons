import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const NF = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_4430_187582)">
      <path
        d="M17.217 1.19047C15.6394 0.427631 13.8695 -0.000244141 11.9996 -0.000244141C10.1297 -0.000244141 8.35988 0.427631 6.78225 1.19047L5.73877 11.9998L6.78225 22.809C8.35988 23.5719 10.1297 23.9998 11.9996 23.9998C13.8695 23.9998 15.6394 23.5719 17.217 22.809L18.2605 11.9998L17.217 1.19047Z"
        fill="#F0F0F0"
      />
      <path
        d="M6.78262 1.19122C2.76867 3.13213 0 7.24255 0 12.0001C0 16.7576 2.76867 20.868 6.78262 22.8089V1.19122Z"
        fill="#6DA544"
      />
      <path
        d="M17.2173 1.19122V22.8089C21.2312 20.868 23.9999 16.7576 23.9999 12.0001C23.9999 7.2426 21.2312 3.13213 17.2173 1.19122Z"
        fill="#6DA544"
      />
      <path
        d="M15.1305 15.6516L12.0001 5.73859L8.86963 15.6516H11.2175V18.2603H12.7827V15.6516H15.1305Z"
        fill="#6DA544"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187582">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default NF;
