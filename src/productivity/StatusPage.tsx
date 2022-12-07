import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const StatusPage = forwardRef<SVGSVGElement, CommonProps>(
  ({ size = 24 }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.0005 26.0001C19.6208 26.0001 22.5556 23.1537 22.5556 19.6424C22.5556 16.1312 19.6208 13.2848 16.0005 13.2848C12.3802 13.2848 9.44531 16.1312 9.44531 19.6424C9.44531 23.1537 12.3802 26.0001 16.0005 26.0001Z"
        fill="url(#paint0_linear_4430_189455)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.17675 12.2876L5.69635 16.3307C5.82645 16.4791 6.01242 16.5707 6.21269 16.5851C6.41296 16.5994 6.61081 16.5353 6.76199 16.4071C12.4616 11.4506 19.5196 11.4506 25.2343 16.4071C25.3854 16.5353 25.5833 16.5994 25.7836 16.5851C25.9838 16.5707 26.1698 16.4791 26.2999 16.3307L29.8232 12.2876C30.0892 11.9817 30.0507 11.5249 29.7369 11.265C21.4633 4.24501 10.533 4.24501 2.26305 11.265C1.94933 11.5249 1.91078 11.9817 2.17675 12.2876Z"
        fill="#2684FF"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4430_189455"
          x1="16.0005"
          y1="23.8129"
          x2="16.0005"
          y2="12.5497"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2684FF" />
          <stop offset="0.82" stopColor="#0052CC" />
        </linearGradient>
      </defs>
    </svg>
  )
);

export default StatusPage;