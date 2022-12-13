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
      <g clip-path="url(#clip0_4430_187562)">
        <path
          d="M1.4585 6.26037L11.9994 7.30386L22.5403 6.26037C20.5051 2.53025 16.5479 -0.000488281 11.9994 -0.000488281C7.4509 -0.000488281 3.49376 2.53025 1.4585 6.26037Z"
          fill="#D80027"
        />
        <path
          d="M1.45859 17.7384L11.9995 18.7819L22.5404 17.7384C23.4706 16.0335 23.9995 14.0782 23.9995 11.9993L11.9995 10.9558L-0.000488281 11.9993C-0.000488281 14.0782 0.528402 16.0335 1.45859 17.7384Z"
          fill="#FFDA44"
        />
        <path
          d="M1.45859 6.26099C0.528402 7.96588 -0.000488281 9.92122 -0.000488281 12.0001H23.9995C23.9995 9.92122 23.4706 7.96588 22.5404 6.26099H11.9995H1.45859Z"
          fill="#0052B4"
        />
        <path
          d="M11.9994 23.9996C16.5479 23.9996 20.5051 21.4689 22.5403 17.7388H1.4585C3.49376 21.4689 7.4509 23.9996 11.9994 23.9996Z"
          fill="#6DA544"
        />
      </g>
      <defs>
        <clipPath id="clip0_4430_187562">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Microsoft;
