import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const JiraCore = forwardRef<SVGSVGElement, CommonProps>(
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.6006 20.8682C17.6006 25.9116 21.8087 30.0001 26.9997 30.0001V11.8042L17.6006 18.059V20.8682Z"
        fill="url(#paint0_linear_4430_189454)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 11.8041V3.35546C26.9991 2.85282 26.7124 2.3918 26.2549 2.15711C25.7974 1.92242 25.2439 1.95246 24.8162 2.2352L3 16.7053C5.91944 20.8735 11.7633 21.9543 16.0548 19.1198L27 11.8041Z"
        fill="#2684FF"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4430_189454"
          x1="19.2166"
          y1="15.4493"
          x2="26.9446"
          y2="17.3531"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.17" stopColor="#0052CC" />
          <stop offset="1" stopColor="#2684FF" />
        </linearGradient>
      </defs>
    </svg>
  )
);

export default JiraCore;
