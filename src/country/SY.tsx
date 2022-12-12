import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const SY = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_4430_187636)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M11.9997 -0.000732422C6.84013 -0.000732422 2.44161 3.25577 0.746094 7.82538H23.2534C21.5578 3.25577 17.1593 -0.000732422 11.9997 -0.000732422Z"
        fill="#D80027"
      />
      <path
        d="M11.9997 24.0005C17.1593 24.0005 21.5578 20.744 23.2533 16.1744H0.746094C2.44161 20.744 6.84012 24.0005 11.9997 24.0005Z"
        fill="black"
      />
      <path
        d="M7.17018 9.13013L7.81767 11.1229H9.91312L8.21788 12.3547L8.86542 14.3475L7.17018 13.1159L5.47495 14.3475L6.12248 12.3547L4.42725 11.1229H6.5227L7.17018 9.13013Z"
        fill="#6DA544"
      />
      <path
        d="M16.8298 9.13013L17.4773 11.1229H19.5728L17.8775 12.3547L18.5251 14.3475L16.8298 13.1159L15.1346 14.3475L15.7821 12.3547L14.0869 11.1229H16.1824L16.8298 9.13013Z"
        fill="#6DA544"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187636">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default SY;
