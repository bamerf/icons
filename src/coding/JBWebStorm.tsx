import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const JBWebStorm = forwardRef<SVGSVGElement, CommonProps>(
  ({ size = 24 }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_4430_189508)">
        <path
          d="M4.29714 28.9371L0 3.33714L8 0.0457153L13.0743 3.06286L17.7371 0.548573L27.4743 4.29714L21.9886 32L4.29714 28.9371Z"
          fill="url(#paint0_linear_4430_189508)"
        />
        <path
          d="M32.0004 10.8343L27.8861 0.64L20.389 0L8.82324 11.1086L11.9318 25.4171L17.7375 29.5314L32.0004 21.0286L28.4804 14.4914L32.0004 10.8343Z"
          fill="url(#paint1_linear_4430_189508)"
        />
        <path
          d="M25.5996 9.32569L28.4796 14.4914L31.9996 10.8343L29.4396 4.47998L25.5996 9.32569Z"
          fill="url(#paint2_linear_4430_189508)"
        />
        <path
          d="M6.12598 6.12567H25.8745V25.8742H6.12598V6.12567Z"
          fill="black"
        />
        <path d="M8 22.1714H15.4057V23.4057H8V22.1714Z" fill="white" />
        <path
          d="M17.6914 15.68L18.7428 14.4C19.4743 14.9943 20.2514 15.4057 21.1657 15.4057C21.8971 15.4057 22.3085 15.1314 22.3085 14.6286V14.5829C22.3085 14.1257 22.0343 13.8972 20.6628 13.5314C19.0171 13.12 18.0114 12.6629 18.0114 11.0172V10.9714C18.0114 9.46287 19.2 8.50287 20.8457 8.50287C22.0343 8.50287 23.04 8.86858 23.8628 9.5543L22.9485 10.9257C22.2171 10.4229 21.5314 10.1029 20.8457 10.1029C20.16 10.1029 19.7943 10.4229 19.7943 10.8343V10.88C19.7943 11.4286 20.16 11.6114 21.5314 11.9772C23.1771 12.4343 24.0914 13.0286 24.0914 14.4457V14.4914C24.0914 16.1372 22.8571 17.0514 21.12 17.0514C19.8857 17.0057 18.6514 16.5486 17.6914 15.68Z"
          fill="white"
        />
        <path
          d="M16.0917 8.68567L14.8574 13.44L13.486 8.68567H12.1146L10.6974 13.44L9.46315 8.68567H7.58887L9.9203 16.8685H11.4289L12.8003 12.1142L14.126 16.8685H15.6803L18.0117 8.68567H16.0917Z"
          fill="white"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_4430_189508"
          x1="11.4597"
          y1="0.66743"
          x2="19.7408"
          y2="30.48"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.285" stopColor="#00CDD7" />
          <stop offset="0.941" stopColor="#2086D7" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4430_189508"
          x1="14.0438"
          y1="4.44983"
          x2="28.053"
          y2="24.9925"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.14" stopColor="#FFF045" />
          <stop offset="0.366" stopColor="#00CDD7" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_4430_189508"
          x1="27.9228"
          y1="6.98969"
          x2="29.7624"
          y2="13.5058"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.285" stopColor="#00CDD7" />
          <stop offset="0.941" stopColor="#2086D7" />
        </linearGradient>
        <clipPath id="clip0_4430_189508">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default JBWebStorm;
