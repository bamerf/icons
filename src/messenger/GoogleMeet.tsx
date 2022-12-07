import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const GoogleMeet = forwardRef<SVGSVGElement, CommonProps>(
  ({ size = 24 }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_4430_189390)">
        <path
          d="M2 11.9556C2 8.47078 2 6.7284 2.67818 5.39739C3.27473 4.22661 4.22661 3.27473 5.39739 2.67818C6.7284 2 8.47078 2 11.9556 2H20.0444C23.5292 2 25.2716 2 26.6026 2.67818C27.7734 3.27473 28.7253 4.22661 29.3218 5.39739C30 6.7284 30 8.47078 30 11.9556V20.0444C30 23.5292 30 25.2716 29.3218 26.6026C28.7253 27.7734 27.7734 28.7253 26.6026 29.3218C25.2716 30 23.5292 30 20.0444 30H11.9556C8.47078 30 6.7284 30 5.39739 29.3218C4.22661 28.7253 3.27473 27.7734 2.67818 26.6026C2 25.2716 2 23.5292 2 20.0444V11.9556Z"
          fill="white"
        />
        <path
          d="M5 23.56C5 24.3556 5.64998 25 6.45081 25H6.47166C5.65857 25 5 24.3556 5 23.56Z"
          fill="#FBBC05"
        />
        <path
          d="M17.4678 12.4V16.1596L22.5364 12.0712V8.43999C22.5364 7.6444 21.8864 7 21.0856 7H10.1045L10.0947 12.4H17.4678Z"
          fill="#FBBC05"
        />
        <path
          d="M17.4671 19.9207H10.0818L10.0732 25.0003H21.085C21.887 25.0003 22.5358 24.3559 22.5358 23.5603V20.2819L17.4671 16.1611V19.9207Z"
          fill="#34A853"
        />
        <path d="M10.1042 7L5 12.4H10.0956L10.1042 7Z" fill="#EA4335" />
        <path
          d="M5 19.9204V23.56C5 24.3556 5.65857 25 6.47166 25H10.0736L10.0821 19.9204H5Z"
          fill="#1967D2"
        />
        <path
          d="M10.0956 12.4H5V19.9203H10.0821L10.0956 12.4Z"
          fill="#4285F4"
        />
        <path
          d="M26.9926 22.2799V9.91994C26.7068 8.27955 24.9077 10.1599 24.9077 10.1599L22.5371 12.0715V20.2807L25.9305 23.0395C27.1557 23.2003 26.9926 22.2799 26.9926 22.2799Z"
          fill="#34A853"
        />
        <path
          d="M17.4678 16.1596L22.5377 20.2815V12.0724L17.4678 16.1596Z"
          fill="#188038"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_4430_189390"
          x="-2"
          y="-1"
          width="36"
          height="36"
          filterUnits="userSpaceOnUse"
          ColorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_4430_189390"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_4430_189390"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
);

export default GoogleMeet;
