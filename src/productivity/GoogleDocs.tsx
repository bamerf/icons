import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const GoogleDocs = forwardRef<SVGSVGElement, CommonProps>(
  ({ size = 24 }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_4430_189482)">
        <path
          d="M2 11.9556C2 8.47078 2 6.7284 2.67818 5.39739C3.27473 4.22661 4.22661 3.27473 5.39739 2.67818C6.7284 2 8.47078 2 11.9556 2H20.0444C23.5292 2 25.2716 2 26.6026 2.67818C27.7734 3.27473 28.7253 4.22661 29.3218 5.39739C30 6.7284 30 8.47078 30 11.9556V20.0444C30 23.5292 30 25.2716 29.3218 26.6026C28.7253 27.7734 27.7734 28.7253 26.6026 29.3218C25.2716 30 23.5292 30 20.0444 30H11.9556C8.47078 30 6.7284 30 5.39739 29.3218C4.22661 28.7253 3.27473 27.7734 2.67818 26.6026C2 25.2716 2 23.5292 2 20.0444V11.9556Z"
          fill="white"
        />
        <path
          d="M8 21.5287V25.5225C8 26.3367 8.66692 26.9966 9.48832 26.9966H13.4555V21.5287H8Z"
          fill="#188038"
        />
        <path
          d="M18.5479 26.9978H22.5114C23.3328 26.9978 23.9997 26.3379 23.9997 25.5237V21.5287H18.5479V26.9978Z"
          fill="#1967D2"
        />
        <path
          d="M18.5465 21.5287H13.4551V26.9978H18.5465V21.5287Z"
          fill="#34A853"
        />
        <path
          d="M9.48832 5C8.66692 5 8 5.65992 8 6.47411V21.5286H13.4555V10.5095H18.5469V5H9.48832Z"
          fill="#FBBC05"
        />
        <path
          d="M23.9997 10.5095H18.5479V21.5286H23.9997V10.5095Z"
          fill="#4285F4"
        />
        <path d="M18.5479 10.5095H23.9985L18.5479 5V10.5095Z" fill="#EA4335" />
      </g>
      <defs>
        <filter
          id="filter0_d_4430_189482"
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
            result="effect1_dropShadow_4430_189482"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_4430_189482"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
);

export default GoogleDocs;
