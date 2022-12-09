import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const Shazam = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 15.998C2 23.7288 8.26889 29.9982 16.0005 29.9982C23.7321 29.9982 30 23.7288 30 15.998C30 8.26515 23.7321 1.99817 16.0005 1.99817C8.26889 1.99817 2 8.26515 2 15.998Z"
      fill="url(#paint0_linear_4430_189439)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.6461 25.1252C20.0131 24.7717 22.1673 22.6973 23.4063 21.3309C24.5872 20.0251 25.1811 18.345 25.0744 16.6027C24.9649 14.8085 24.1275 13.1468 22.7148 11.9265C20.3818 9.90934 16.611 9.95033 14.3093 12.0161C13.4697 12.7684 12.5213 13.8005 12.4808 13.8447C11.8756 14.5029 11.9203 15.5277 12.5773 16.1326C13.2353 16.7365 14.2571 16.6936 14.8639 16.0362C14.8721 16.0265 15.7468 15.0745 16.4686 14.4282C17.6804 13.3404 19.6184 13.5289 20.5996 14.3773C21.3471 15.0225 21.7888 15.8825 21.8448 16.7989C21.8975 17.6636 21.6 18.5015 21.0089 19.1543C19.8412 20.4448 17.6915 22.5134 17.3945 22.7992C17.3735 22.8194 17.3619 22.8306 17.3603 22.8322C16.7148 23.4506 16.6912 24.4738 17.3093 25.1213C17.627 25.4533 18.0513 25.6215 18.4791 25.6215C18.8802 25.6215 19.2828 25.4721 19.5954 25.174C19.6023 25.1674 19.6195 25.1508 19.6461 25.1252ZM9.48309 19.9577C10.6313 20.9506 12.1269 21.4462 13.6245 21.4462C15.1713 21.4462 16.7199 20.9183 17.8884 19.8685C18.6584 19.177 19.5217 18.2513 19.6894 18.0714C19.7044 18.0554 19.7138 18.0452 19.7171 18.0418C20.322 17.3836 20.2782 16.3581 19.6206 15.7539C18.9639 15.1481 17.9397 15.1903 17.3352 15.8491C17.3349 15.8495 17.3334 15.8512 17.3307 15.854C17.2617 15.9285 16.4241 16.8338 15.7298 17.4581C14.5174 18.5439 12.5801 18.3581 11.5976 17.5079C10.851 16.8622 10.4094 16.0019 10.3528 15.0849C10.3001 14.221 10.5981 13.385 11.1892 12.7296C12.4401 11.3493 14.8135 9.07641 14.8379 9.05329C15.4837 8.43554 15.5057 7.41095 14.889 6.76418C14.2708 6.11828 13.2477 6.09357 12.6022 6.71216L12.5915 6.72234C12.392 6.91381 10.0894 9.12264 8.79279 10.5552C7.61004 11.8603 7.01859 13.5403 7.12316 15.2819C7.2336 17.0771 8.071 18.7377 9.48309 19.9577Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="paint0_linear_4430_189439"
        x1="2"
        y1="29.9982"
        x2="2"
        y2="1.99817"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2255FF" />
        <stop offset="1" stopColor="#00AAFF" />
      </linearGradient>
    </defs>
  </svg>
));

export default Shazam;