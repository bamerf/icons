import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const NZ = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_4430_187577)">
      <path
        d="M24 12C24 18.6274 18.6274 24 12 24C5.37262 24 0 18.6274 0 12C0 12.0029 12 0.0013125 12 0C18.6274 0 24 5.37262 24 12Z"
        fill="#0052B4"
      />
      <path
        d="M11.9683 12.0004H12.0004C12.0004 11.9896 12.0004 11.9791 12.0004 11.9683C11.9897 11.979 11.979 11.9897 11.9683 12.0004Z"
        fill="#F0F0F0"
      />
      <path
        d="M12.0005 6.26086C12.0005 4.14937 12.0005 2.76586 12.0005 0H11.9985C5.37198 0.001125 0.000488281 5.37323 0.000488281 12H6.26134V8.47448L9.7869 12H11.9684C11.9791 11.9893 11.9898 11.9786 12.0005 11.9679C12.0005 11.1594 12.0005 10.4381 12.0005 9.78647L8.47492 6.26086H12.0005Z"
        fill="#F0F0F0"
      />
      <path
        d="M6.07124 1.56494C4.19441 2.63364 2.63413 4.19393 1.56543 6.07075V11.9997H4.69588V4.69549V4.69539H12.0002C12.0002 3.70807 12.0002 2.76747 12.0002 1.56494H6.07124Z"
        fill="#D80027"
      />
      <path
        d="M12.0003 10.5247L7.7369 6.26123C7.7369 6.26123 6.26123 6.26132 6.26123 6.26123V6.26132L12.0003 12.0003H12.0003C12.0003 12.0003 12.0003 10.9828 12.0003 10.5247Z"
        fill="#D80027"
      />
      <path
        d="M20.7813 8.90454L21.0403 9.7017H21.8785L21.2004 10.1944L21.4594 10.9915L20.7813 10.4989L20.1032 10.9915L20.3622 10.1944L19.6841 9.7017H20.5223L20.7813 8.90454Z"
        fill="#D80027"
      />
      <path
        d="M17.7849 14.6436L18.1735 15.8393H19.4307L18.4135 16.5783L18.8021 17.774L17.7849 17.035L16.7678 17.774L17.1563 16.5783L16.1392 15.8393H17.3964L17.7849 14.6436Z"
        fill="#D80027"
      />
      <path
        d="M17.8988 5.25195L18.2226 6.24847H19.2703L18.4226 6.86417L18.7464 7.86064L17.8988 7.24475L17.0512 7.86064L17.3749 6.86417L16.5273 6.24847H17.575L17.8988 5.25195Z"
        fill="#D80027"
      />
      <path
        d="M15.0154 8.86987L15.4039 10.0657H16.6612L15.644 10.8046L16.0326 12.0003L15.0154 11.2613L13.9982 12.0003L14.3868 10.8046L13.3696 10.0657H14.6269L15.0154 8.86987Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187577">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default NZ;
