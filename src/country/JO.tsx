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
      <g clip-path="url(#clip0_4430_187537)">
        <path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="#F0F0F0"
        />
        <path
          d="M7.30437 7.82623H23.2536C21.5581 3.25662 17.1596 0.00012207 12 0.00012207C8.68625 0.00012207 5.68657 1.34351 3.51514 3.51523L7.30437 7.82623Z"
          fill="black"
        />
        <path
          d="M7.30437 16.1744H23.2536C21.5581 20.7441 17.1596 24.0006 12 24.0006C8.68625 24.0006 5.68657 22.6572 3.51514 20.4854L7.30437 16.1744Z"
          fill="#6DA544"
        />
        <path
          d="M3.51471 3.51379C-1.17157 8.20008 -1.17157 15.7981 3.51471 20.4844C5.45126 18.5479 7.31375 16.6854 12 11.9991L3.51471 3.51379Z"
          fill="#D80027"
        />
        <path
          d="M4.76268 9.39172L5.42123 10.7689L6.90852 10.4251L6.24243 11.7986L7.43845 12.7471L5.94937 13.0827L5.95349 14.6091L4.76268 13.6541L3.57182 14.6091L3.57599 13.0827L2.08691 12.7471L3.28288 11.7986L2.61688 10.4251L4.10409 10.7689L4.76268 9.39172Z"
          fill="#F0F0F0"
        />
      </g>
      <defs>
        <clipPath id="clip0_4430_187537">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Microsoft;
