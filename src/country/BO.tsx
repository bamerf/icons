import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const BO = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_4430_187457)">
      <path
        d="M24 12.0006C24 10.5328 23.736 9.12669 23.2536 7.82676L12 7.30499L0.746391 7.82671C0.264 9.12669 0 10.5328 0 12.0006C0 13.4685 0.264 14.8746 0.746391 16.1745L12 16.6963L23.2536 16.1746C23.736 14.8746 24 13.4685 24 12.0006Z"
        fill="#FFDA44"
      />
      <path
        d="M12.0002 23.9999C17.1598 23.9999 21.5583 20.7434 23.2538 16.1738H0.746582C2.4421 20.7434 6.84061 23.9999 12.0002 23.9999Z"
        fill="#6DA544"
      />
      <path
        d="M0.746094 7.82641H23.2534C21.5578 3.25681 17.1593 0.000305176 11.9997 0.000305176C6.84012 0.000305176 2.44161 3.25681 0.746094 7.82641Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187457">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default BO;
