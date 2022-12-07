import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const Bamboo = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
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
      d="M27.2434 17.9155H21.4704C21.0938 17.9112 20.7717 18.1873 20.7152 18.5627C20.3873 20.9285 18.3796 22.6882 16.0107 22.6861L17.5739 29.8858C23.2371 29.1397 27.596 24.4752 27.9985 18.7302C28.0132 18.5192 27.9401 18.3115 27.7969 18.157C27.6537 18.0024 27.4531 17.9149 27.2434 17.9155Z"
      fill="#2684FF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.2529 17.7327L25.5594 10.5329C25.722 10.3884 25.8151 10.1804 25.8151 9.96184C25.8151 9.74329 25.722 9.53528 25.5594 9.39073L17.2529 2.17958C17.0288 1.98882 16.7154 1.94618 16.4492 2.07022C16.1829 2.19426 16.012 2.46255 16.0107 2.7583V17.1539C16.012 17.4497 16.1829 17.718 16.4492 17.842C16.7154 17.9661 17.0288 17.9234 17.2529 17.7327Z"
      fill="#2684FF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.11426 19.4878C4.90873 25.5024 9.99424 29.9959 16.0114 30V22.686C13.3967 22.686 11.2754 20.552 11.2691 17.9154L4.11426 19.4878Z"
      fill="url(#paint0_linear_4430_189457)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 17.8012V17.9154H11.2682C11.2744 15.2788 13.3958 13.1448 16.0104 13.1448L14.4511 5.94507C8.52674 6.72352 4.07207 11.7771 4 17.8012Z"
      fill="url(#paint1_linear_4430_189457)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_4430_189457"
        x1="10.0647"
        y1="6.03643"
        x2="10.0647"
        y2="22.5337"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0052CC" />
        <stop offset="1" stopColor="#2684FF" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_4430_189457"
        x1="10.0071"
        y1="6.03645"
        x2="10.0071"
        y2="22.5338"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0052CC" />
        <stop offset="1" stopColor="#2684FF" />
      </linearGradient>
    </defs>
  </svg>
));

export default Bamboo;
