import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const BG = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_4430_187465)">
      <path
        d="M24 12.0007C24 10.5329 23.736 9.12676 23.2536 7.82682L12 7.30505L0.746391 7.82677C0.264047 9.12675 0 10.5329 0 12.0007C0 13.4685 0.264047 14.8747 0.746391 16.1746L12 16.6964L23.2536 16.1746C23.736 14.8747 24 13.4685 24 12.0007Z"
        fill="#496E2D"
      />
      <path
        d="M11.9997 23.9999C17.1593 23.9999 21.5578 20.7434 23.2533 16.1738H0.746094C2.44161 20.7434 6.84012 23.9999 11.9997 23.9999Z"
        fill="#D80027"
      />
      <path
        d="M0.746094 7.82538H23.2534C21.5578 3.25577 17.1593 -0.000732422 11.9997 -0.000732422C6.84012 -0.000732422 2.44161 3.25577 0.746094 7.82538Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187465">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default BG;
