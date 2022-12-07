import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const Finder = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_4430_189475)">
      <rect x="2" y="4" width="28" height="24" rx="1" fill="#283544" />
    </g>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.2151 4H29.1548C29.5774 4 29.8944 4.28916 30 4.77108V27.2289C30 27.6145 29.5774 28 29.1548 28H19.434C19.0114 26.6506 18.8 25.3012 18.5887 23.9518C21.1246 23.4699 23.4491 22.3133 25.034 20.4819C25.5623 19.7108 24.6114 19.2289 24.1887 19.7108C23.0265 21.4458 20.8076 22.506 18.4831 22.8916C18.1661 19.0361 18.4831 15.9518 18.4831 15.9518H14.3623C14.3623 15.9518 14.3623 9.78313 17.2151 4ZM22.4982 13.0602C23.0265 13.0602 23.3434 12.6747 23.3434 12.2892V10.747C23.3434 10.2651 22.9208 9.9759 22.4982 9.9759C21.9699 9.9759 21.6529 10.3614 21.6529 10.747V12.2892C21.6529 12.7711 22.0755 13.0602 22.4982 13.0602Z"
      fill="url(#paint0_linear_4430_189475)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.9472 24.1446C12.4604 24.1446 8.97359 22.8916 6.86038 20.4819C6.33208 19.7108 7.28302 19.2289 7.70566 19.7108C9.39623 21.9277 12.6717 23.0843 15.9472 23.0843C16.7031 23.0843 17.6377 22.988 17.6377 22.988C17.3208 20.2892 17.4264 17.8795 17.5321 16.7229H13.517V15.9518C13.517 15.9518 13.517 9.78313 16.3698 4H2.84528C2.31698 4 2 4.38554 2 4.77108V27.2289C2 27.6145 2.42264 28 2.84528 28H18.5C18.4499 27.7896 18.3998 27.5851 18.3503 27.3836C18.0923 26.3309 17.8539 25.3585 17.7434 24.0482C17.7434 24.0482 16.5156 24.1446 15.9472 24.1446ZM9.39623 9.9759C8.86793 9.9759 8.55094 10.3614 8.55094 10.747V12.2892C8.55094 12.6747 8.97359 12.9639 9.39623 12.9639C9.81887 12.9639 10.2415 12.6747 10.2415 12.2892V10.747C10.2415 10.3614 9.92453 9.9759 9.39623 9.9759Z"
      fill="url(#paint1_linear_4430_189475)"
    />
    <defs>
      <filter
        id="filter0_d_4430_189475"
        x="1"
        y="3.5"
        width="30"
        height="26"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="0.5" />
        <feGaussianBlur stdDeviation="0.5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_4430_189475"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_4430_189475"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_4430_189475"
        x1="22.1812"
        y1="4"
        x2="22.1812"
        y2="28"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F7F6F7" />
        <stop offset="1" stopColor="#D9E4F0" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_4430_189475"
        x1="10.25"
        y1="4"
        x2="10.25"
        y2="28"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2FD4FB" />
        <stop offset="1" stopColor="#2777EE" />
      </linearGradient>
    </defs>
  </svg>
));

export default Finder;
