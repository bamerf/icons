import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const PS = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_4430_187589)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M7.30437 7.82696H23.2536C21.5581 3.25735 17.1596 0.000854492 12 0.000854492C8.68625 0.000854492 5.68657 1.34424 3.51514 3.51596L7.30437 7.82696Z"
        fill="black"
      />
      <path
        d="M7.30437 16.1736H23.2536C21.5581 20.7432 17.1596 23.9997 12 23.9997C8.68625 23.9997 5.68657 22.6563 3.51514 20.4846L7.30437 16.1736Z"
        fill="#6DA544"
      />
      <path
        d="M3.51471 3.51489C-1.17157 8.20117 -1.17157 15.7992 3.51471 20.4855C5.45126 18.549 7.31375 16.6865 12 12.0002L3.51471 3.51489Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187589">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default PS;
