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
      <g clip-path="url(#clip0_4430_187531)">
        <path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="#D80027"
        />
        <path
          d="M16.4437 8.04392L15.5955 11.0707L13.0507 10.6008L11.4126 7.22412L6.98727 8.79448L6.63828 7.81104L5.48047 7.6684L6.35286 10.1269L9.39828 9.34812L10.2637 11.787L8.15848 14.8939L11.7312 17.9411L11.054 18.735L11.5093 19.8091L13.2024 17.8242L11.0052 15.5763L12.6845 13.6074L16.4279 13.8771L17.2805 9.25943L18.3066 9.44895L19.0093 8.51754L16.4437 8.04392Z"
          fill="#F0F0F0"
        />
      </g>
      <defs>
        <clipPath id="clip0_4430_187531">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Microsoft;
