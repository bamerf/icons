import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const AT = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_4430_187437)">
      <path
        d="M23.2541 16.173C23.7365 14.8731 24.0005 13.467 24.0005 11.9991C24.0005 10.5313 23.7365 9.12525 23.2541 7.82522L12.0005 6.78174L0.746879 7.82522C0.264535 9.12525 0.000488281 10.5313 0.000488281 11.9991C0.000488281 13.467 0.264535 14.8731 0.746879 16.173L12.0005 17.2165L23.2541 16.173Z"
        fill="#F0F0F0"
      />
      <path
        d="M12.0007 23.9996C17.1603 23.9996 21.5588 20.7431 23.2543 16.1735H0.74707C2.44263 20.7431 6.8411 23.9996 12.0007 23.9996Z"
        fill="#D80027"
      />
      <path
        d="M12.0002 0C6.84061 0 2.44214 3.2565 0.746582 7.82611H23.2538C21.5583 3.2565 17.1598 0 12.0002 0Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187437">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default AT;
