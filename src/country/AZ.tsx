import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const AZ = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_4430_187438)">
      <path
        d="M23.9995 12.0001C23.9995 10.5323 23.7355 9.12615 23.2531 7.82621L11.9995 7.30444L0.745902 7.82616C0.263559 9.12614 -0.000488281 10.5323 -0.000488281 12.0001C-0.000488281 13.4679 0.263559 14.874 0.745902 16.174L11.9995 16.6957L23.2531 16.174C23.7355 14.874 23.9995 13.4679 23.9995 12.0001Z"
        fill="#D80027"
      />
      <path
        d="M12.0002 23.9996C17.1598 23.9996 21.5583 20.7431 23.2538 16.1735H0.746582C2.4421 20.7431 6.84061 23.9996 12.0002 23.9996Z"
        fill="#6DA544"
      />
      <path
        d="M0.746582 7.82513H23.2538C21.5583 3.25552 17.1598 -0.000976562 12.0002 -0.000976562C6.84061 -0.000976562 2.4421 3.25552 0.746582 7.82513Z"
        fill="#338AF3"
      />
      <path
        d="M12.2605 15.3911C10.3875 15.3911 8.86915 13.8727 8.86915 11.9997C8.86915 10.1268 10.3875 8.60843 12.2605 8.60843C12.8444 8.60843 13.3939 8.75609 13.8737 9.01606C13.121 8.28007 12.0918 7.82581 10.9561 7.82581C8.6509 7.82581 6.78223 9.69452 6.78223 11.9997C6.78223 14.3049 8.65094 16.1736 10.9561 16.1736C12.0919 16.1736 13.1211 15.7193 13.8737 14.9833C13.3939 15.2434 12.8444 15.3911 12.2605 15.3911Z"
        fill="#F0F0F0"
      />
      <path
        d="M14.8693 9.65076L15.3185 10.9141L16.5295 10.3384L15.9538 11.5493L17.2171 11.9986L15.9538 12.4478L16.5295 13.6588L15.3185 13.0831L14.8693 14.3464L14.4202 13.0831L13.2091 13.6588L13.7849 12.4478L12.5215 11.9986L13.7849 11.5493L13.2091 10.3384L14.4202 10.9141L14.8693 9.65076Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187438">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default AZ;
