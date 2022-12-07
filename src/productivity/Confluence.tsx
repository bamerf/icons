import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const Confluence = forwardRef<SVGSVGElement, CommonProps>(
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
        d="M4.87031 22.3216C4.6221 22.7429 4.34333 23.2317 4.10657 23.6212C3.89465 23.9939 4.00842 24.4746 4.36242 24.7022L9.32677 27.8815C9.50103 27.9935 9.7112 28.028 9.91009 27.9771C10.109 27.9263 10.2799 27.7945 10.3846 27.6113C10.5831 27.2655 10.839 26.8165 11.1178 26.3356C13.0844 22.9575 15.0625 23.3708 18.6292 25.1433L23.5515 27.5795C23.738 27.6718 23.9524 27.6817 24.1459 27.6068C24.3394 27.532 24.4956 27.3787 24.5788 27.1821L26.9426 21.6182C27.1096 21.2208 26.9396 20.7575 26.5607 20.5769C25.522 20.0683 23.4561 19.0548 21.5963 18.1209C14.9059 14.7388 9.21985 14.9574 4.87031 22.3216Z"
        fill="url(#paint0_linear_4430_189449)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.1293 9.69551C27.3775 9.27424 27.6562 8.78541 27.893 8.39594C28.1049 8.02324 27.9912 7.54258 27.6371 7.31496L22.6728 4.13559C22.4971 4.01245 22.2802 3.97076 22.0738 4.0205C21.8675 4.07023 21.6902 4.20691 21.5845 4.39789C21.3859 4.74365 21.13 5.19273 20.8513 5.67361C18.8846 9.05169 16.9065 8.63837 13.3398 6.86587L8.43275 4.44161C8.24633 4.34926 8.03192 4.3394 7.83839 4.41427C7.64486 4.48914 7.48871 4.64237 7.40552 4.83903L5.04172 10.4029C4.87472 10.8003 5.04465 11.2636 5.42359 11.4442C6.46229 11.9529 8.52822 12.9663 10.3879 13.9002C17.0936 17.2783 22.7797 17.0518 27.1293 9.69551Z"
        fill="url(#paint1_linear_4430_189449)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4430_189449"
          x1="26.8089"
          y1="29.5229"
          x2="20.8666"
          y2="16.4236"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.18" stopColor="#0052CC" />
          <stop offset="1" stopColor="#2684FF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4430_189449"
          x1="5.19065"
          y1="2.49027"
          x2="11.1423"
          y2="15.5956"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.18" stopColor="#0052CC" />
          <stop offset="1" stopColor="#2684FF" />
        </linearGradient>
      </defs>
    </svg>
  )
);

export default Confluence;
