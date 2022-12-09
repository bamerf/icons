import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const Microsoft = forwardRef<SVGSVGElement, CommonProps>(
  ({ size = 24 }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="17" y="17" width="10" height="10" fill="#FEBA08" />
      <rect x="5" y="17" width="10" height="10" fill="#05A6F0" />
      <rect x="17" y="5" width="10" height="10" fill="#80BC06" />
      <rect x="5" y="5" width="10" height="10" fill="#F25325" />
    </svg>
  )
);

export default Microsoft;
