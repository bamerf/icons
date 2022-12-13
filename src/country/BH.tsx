import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const BH = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_4430_187440)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M12.0001 -0.000976562C9.59189 -0.000976562 7.34977 0.708945 5.47046 1.93018L8.55666 3.99873L4.6958 5.9987L8.55666 7.99866L4.6958 9.99863L8.55666 11.9984L4.6958 13.9983L8.55666 15.9982L4.6958 17.9984L8.55666 19.9983L5.47008 22.0675C7.34949 23.289 9.59175 23.999 12.0001 23.999C18.6275 23.999 24.0001 18.6264 24.0001 11.999C24.0001 5.37165 18.6275 -0.000976562 12.0001 -0.000976562Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187440">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default BH;
