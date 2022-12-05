import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const Foursquare = forwardRef<SVGSVGElement, CommonProps>(
  ({ size = 24 }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="14" fill="#FA4778" />
      <path
        d="M20.8314 9.74365L20.3967 11.9411C20.347 12.1752 20.1358 12.3833 19.875 12.3833H16.0989C15.6765 12.3833 15.3287 12.7473 15.3287 13.1894V13.6706C15.3287 14.1127 15.6765 14.4767 16.0989 14.4767H19.2912C19.5893 14.4767 19.8377 14.7758 19.7756 15.1009C19.7135 15.439 19.3781 17.1554 19.3408 17.3374C19.316 17.5325 19.1173 17.7795 18.8192 17.7795H16.2107C15.6641 17.7925 15.5523 17.8055 15.2294 18.2216C14.9064 18.6377 11.9998 22.3329 11.9998 22.3329V9.63961C11.9998 9.34057 12.2358 9.09349 12.5215 9.09349H20.3594C20.6327 9.09349 20.906 9.37957 20.8314 9.74365ZM21.4028 7H11.7266C10.3975 7 10 8.05325 10 8.71641V24.8141C10 25.7578 10.99 26.4824 11.7638 25.6723C11.7638 25.6723 16.3597 20.068 16.4343 19.977C16.5088 19.886 16.546 19.886 16.5957 19.886H19.5023C20.7445 19.886 20.9805 18.9888 21.1171 18.4426C21.2289 17.9875 22.5083 11.486 22.9058 9.43155C23.2039 7.8452 22.8188 7 21.4028 7Z"
        fill="white"
      />
    </svg>
  )
);

export default Foursquare;