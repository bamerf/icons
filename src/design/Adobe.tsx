import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const Adobe = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 2C8.27812 2 2 8.27812 2 16C2 23.7219 8.27812 30 16 30C23.7219 30 30 23.7219 30 16C30 8.27812 23.7219 2 16 2Z"
      fill="#E6001F"
    />
    <path
      d="M7 23C7 23 13.2207 8.00393 13.2059 8C13.2059 8 13.2059 8 13.2059 8H13.2059H17.9301L25 23L19.6601 23C19.6641 23.0079 15.6563 13.7963 15.606 13.7037C15.5972 13.784 12.9484 19.9491 12.9164 19.9567H15.771C15.758 19.9724 17.0122 22.9714 17.0122 23L7 23Z"
      fill="white"
    />
  </svg>
));

export default Adobe;
