import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const Opera = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.3953 23.8859C9.84219 22.0594 8.84688 19.3578 8.78125 16.3281V15.6719C8.84688 12.6422 9.85313 9.94063 11.3953 8.11406C13.4078 5.51094 16.3609 4.34063 19.6969 4.34063C21.7531 4.34063 23.6891 4.48281 25.3297 5.57656C22.8687 3.35625 19.6203 2.01094 16.0547 2H16C8.26719 2 2 8.26719 2 16C2 23.5031 7.90625 29.6391 15.3328 29.9891C15.5516 30 15.7812 30 16 30C19.5875 30 22.8578 28.6547 25.3297 26.4344C23.6891 27.5281 21.8625 27.5719 19.8062 27.5719C16.4813 27.5828 13.3969 26.5 11.3953 23.8859Z"
      fill="url(#paint0_linear_4430_189348)"
    />
    <path
      d="M11.3955 8.11407C12.6752 6.59376 14.3377 5.68595 16.1533 5.68595C20.233 5.68595 23.5361 10.3016 23.5361 16.011C23.5361 21.7203 20.233 26.336 16.1533 26.336C14.3377 26.336 12.6861 25.4172 11.3955 23.9078C13.408 26.511 16.3939 28.1735 19.7189 28.1735C21.7643 28.1735 23.6893 27.55 25.3299 26.4563C28.1955 23.875 30.0002 20.1453 30.0002 16C30.0002 11.8547 28.1955 8.12501 25.3299 5.56564C23.6893 4.47189 21.7752 3.84845 19.7189 3.84845C16.383 3.84845 13.3971 5.50001 11.3955 8.11407Z"
      fill="url(#paint1_linear_4430_189348)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_4430_189348"
        x1="13.6655"
        y1="2.4564"
        x2="13.6655"
        y2="29.5926"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.3" stopColor="#FF1B2D" />
        <stop offset="0.4381" stopColor="#FA1A2C" />
        <stop offset="0.5939" stopColor="#ED1528" />
        <stop offset="0.7581" stopColor="#D60E21" />
        <stop offset="0.9272" stopColor="#B70519" />
        <stop offset="1" stopColor="#A70014" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_4430_189348"
        x1="20.696"
        y1="4.05594"
        x2="20.696"
        y2="28.0564"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#9C0000" />
        <stop offset="0.7" stopColor="#FF4B4B" />
      </linearGradient>
    </defs>
  </svg>
));

export default Opera;
