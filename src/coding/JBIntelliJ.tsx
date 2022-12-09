import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const JBIntelliJ = forwardRef<SVGSVGElement, CommonProps>(
  ({ size = 24 }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_4430_189523)">
        <path
          d="M8.09095 24.96L0.365234 18.8342L4.20523 11.7028L15.2224 16L8.09095 24.96Z"
          fill="url(#paint0_linear_4430_189523)"
        />
        <path
          d="M32.0003 8.54852L31.406 27.0628L19.1088 32L11.7031 27.2457L22.5374 16L17.7831 5.62281L22.0346 0.502808L32.0003 8.54852Z"
          fill="url(#paint1_linear_4430_189523)"
        />
        <path
          d="M32.0003 8.54852L22.2632 20.0685L17.7832 5.62281L22.0346 0.502808L32.0003 8.54852Z"
          fill="url(#paint2_linear_4430_189523)"
        />
        <path
          d="M15.4057 26.56L2.56 31.2229L4.61714 24L7.31429 15.1314L0 12.6629L4.61714 0L14.6743 1.23429L24.5486 12.5257L15.4057 26.56Z"
          fill="url(#paint3_linear_4430_189523)"
        />
        <path d="M6.2627 6.17145H26.0113V25.92H6.2627V6.17145Z" fill="black" />
        <path
          d="M8.09082 22.2171H15.4965V23.4514H8.09082V22.2171Z"
          fill="white"
        />
        <path
          d="M13.4395 10.24V8.73138H9.3252V10.24H10.5138V15.4057H9.3252V16.9142H13.4395V15.4057H12.2966V10.24H13.4395Z"
          fill="white"
        />
        <path
          d="M17.3712 17.0514C16.7312 17.0514 16.1826 16.9142 15.7712 16.6857C15.3597 16.4571 14.994 16.1371 14.7197 15.8171L15.8626 14.5371C16.0912 14.8114 16.3197 14.9942 16.5483 15.1314C16.7769 15.2685 17.0512 15.36 17.3254 15.36C17.6454 15.36 17.9197 15.2685 18.1483 15.04C18.3312 14.8114 18.4226 14.4914 18.4226 13.9885V8.73138H20.2512V14.08C20.2512 14.5828 20.2054 14.9942 20.0683 15.36C19.9312 15.7257 19.7483 16 19.474 16.2742C19.2454 16.5028 18.9254 16.7314 18.5597 16.8228C18.194 16.96 17.8283 17.0514 17.3712 17.0514Z"
          fill="white"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_4430_189523"
          x1="0.360663"
          y1="18.3264"
          x2="15.2301"
          y2="18.3264"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.258" stopColor="#F97A12" />
          <stop offset="0.459" stopColor="#B07B58" />
          <stop offset="0.724" stopColor="#577BAE" />
          <stop offset="0.91" stopColor="#1E7CE5" />
          <stop offset="1" stopColor="#087CFA" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4430_189523"
          x1="11.7795"
          y1="11.3737"
          x2="36.3084"
          y2="24.9462"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F97A12" />
          <stop offset="0.072" stopColor="#CB7A3E" />
          <stop offset="0.154" stopColor="#9E7B6A" />
          <stop offset="0.242" stopColor="#757B91" />
          <stop offset="0.334" stopColor="#537BB1" />
          <stop offset="0.432" stopColor="#387CCC" />
          <stop offset="0.538" stopColor="#237CE0" />
          <stop offset="0.655" stopColor="#147CEF" />
          <stop offset="0.792" stopColor="#0B7CF7" />
          <stop offset="1" stopColor="#087CFA" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_4430_189523"
          x1="28.9046"
          y1="19.6182"
          x2="22.0758"
          y2="-0.785878"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FE315D" />
          <stop offset="0.078" stopColor="#CB417E" />
          <stop offset="0.16" stopColor="#9E4E9B" />
          <stop offset="0.247" stopColor="#755BB4" />
          <stop offset="0.339" stopColor="#5365CA" />
          <stop offset="0.436" stopColor="#386DDB" />
          <stop offset="0.541" stopColor="#2374E9" />
          <stop offset="0.658" stopColor="#1478F3" />
          <stop offset="0.794" stopColor="#0B7BF8" />
          <stop offset="1" stopColor="#087CFA" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_4430_189523"
          x1="4.90057"
          y1="7.53051"
          x2="25.3824"
          y2="41.408"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FE315D" />
          <stop offset="0.04" stopColor="#F63462" />
          <stop offset="0.104" stopColor="#DF3A71" />
          <stop offset="0.167" stopColor="#C24383" />
          <stop offset="0.291" stopColor="#AD4A91" />
          <stop offset="0.55" stopColor="#755BB4" />
          <stop offset="0.917" stopColor="#1D76ED" />
          <stop offset="1" stopColor="#087CFA" />
        </linearGradient>
        <clipPath id="clip0_4430_189523">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default JBIntelliJ;
