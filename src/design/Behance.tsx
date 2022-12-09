import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const Behance = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="16" cy="16" r="14" fill="#105DFB" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.87598 21.9594V9.74341H12.5232C14.3372 9.74341 15.8076 11.2139 15.8076 13.0278C15.8076 14.1804 15.4532 14.8945 14.1536 15.6269C15.7088 16.3355 16.1407 17.3176 16.1407 18.6874C16.1407 20.5405 14.4944 21.9594 12.6414 21.9594H6.87598ZM9.26566 11.7656V14.7031H12.0625C12.0625 14.7031 13.4219 14.7031 13.4219 13.2343C13.4219 11.7656 12.0625 11.7656 12.0625 11.7656H9.26566ZM9.26566 19.8906V16.7187H12.2657C12.75 16.7187 13.7657 16.9687 13.7657 18.4687C13.7657 19.5812 12.7657 19.8801 12.2657 19.8906H9.26566Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.25 13.1093C19.5313 13.1093 16.9844 14.3437 16.9844 17.6249C16.9844 19.6229 18.0782 22.1874 21.3594 22.1874C23.9844 22.1874 25.1927 20.2604 25.4688 19.2968H23C22.875 19.7343 22.3907 20.2187 21.3594 20.2187C19.8594 20.2187 19.3282 18.9374 19.25 18.2968H25.4688V17.6249C25.4688 14.3437 22.9688 13.1093 21.25 13.1093ZM21.25 14.9843C19.85 14.9843 19.3334 16.1406 19.25 16.7187H23C23 16.1406 22.65 14.9843 21.25 14.9843Z"
      fill="white"
    />
    <path d="M18.2657 10.4374V11.9531H24.1563V10.4374H18.2657Z" fill="white" />
  </svg>
));

export default Behance;
