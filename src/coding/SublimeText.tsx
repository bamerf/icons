import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const SublimeText = forwardRef<SVGSVGElement, CommonProps>(
  ({ size = 24 }, ref) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="14" fill="#4B4B4B" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23.9978 16.0578C23.9978 15.8234 23.8178 15.6882 23.5969 15.7554L8.40089 20.3933C8.17956 20.4609 8 20.706 8 20.94V25.6802C8 25.9146 8.17956 26.0502 8.40089 25.9826L23.5969 21.3451C23.8178 21.2775 23.9978 21.0324 23.9978 20.798V16.0578Z"
        fill="url(#paint0_linear_4430_189515)"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 15.9091C8 16.1436 8.17956 16.3887 8.40089 16.4563L23.5991 21.0946C23.8204 21.1622 24 21.0266 24 20.7926V16.052C24 15.818 23.8204 15.5729 23.5991 15.5053L8.40089 10.867C8.17956 10.7994 8 10.9345 8 11.169V15.9091V15.9091Z"
        fill="#FF9800"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23.9978 6.31981C23.9978 6.08539 23.8178 5.94979 23.5969 6.01738L8.40089 10.6549C8.17956 10.7225 8 10.9676 8 11.202V15.9422C8 16.1766 8.17956 16.3118 8.40089 16.2446L23.5969 11.6067C23.8178 11.5391 23.9978 11.294 23.9978 11.06V6.31981Z"
        fill="#FF9800"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4430_189515"
          x1="16.8175"
          y1="22.8744"
          x2="18.5031"
          y2="18.5898"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF9700" />
          <stop offset="0.53" stop-color="#F48E00" />
          <stop offset="1" stop-color="#D06F00" />
        </linearGradient>
      </defs>
    </svg>
  )
);

export default SublimeText;
