import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const Medium = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="16" cy="16" r="14" fill="#12100E" />
    <path
      d="M8.71875 20L6.4375 22.9062V23.2344H12.0625V22.9062L9.79688 20V12.5L14.6562 23.2344H15.3438L19.5 12.5V21.3125L17.7969 22.9062V23.2344H25.25V22.9062L23.5938 21.3125V10.2188L25.25 8.67188V8.29688H20.1094L16.3594 17.5L12.1719 8.29688H6.70312V8.67188L8.71875 11.0625V20Z"
      fill="white"
    />
  </svg>
));

export default Medium;
