import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const Zeplin = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
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
      d="M6.31589 20.1683L4.85111 20.6943L4.77246 24.9776L9.84303 23.1569C8.10388 22.5826 6.83385 21.5723 6.31589 20.1683Z"
      fill="#FDBD39"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.0823 15.6379L2 17.4629L4.85096 20.6942L6.31574 20.1683C5.79929 18.7684 6.11778 17.186 7.0823 15.6379Z"
      fill="#F69833"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.6349 9.45743C9.16309 11.7813 4.99074 16.5768 6.31575 20.1683L29.7523 11.7526C28.4273 8.16108 22.1067 7.1335 15.6349 9.45743Z"
      fill="#FECF33"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.4328 22.4634C26.9047 20.1395 31.0849 15.3654 29.752 11.7526L6.31543 20.1682C7.64826 23.7811 13.961 24.7874 20.4328 22.4634Z"
      fill="#EE6723"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M29.752 11.7526L6.31543 20.1682C6.77435 21.4122 8.5244 22.025 10.9799 22.025C13.3739 22.025 16.4383 21.443 19.6331 20.2958C26.105 17.9718 30.6583 14.2093 29.752 11.7526Z"
      fill="#F69833"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M25.0882 9.89575C22.6943 9.89575 19.6298 10.4778 16.435 11.625C9.96316 13.949 5.40978 17.7115 6.31613 20.1682L29.7527 11.7526C29.2938 10.5086 27.5437 9.89575 25.0882 9.89575Z"
      fill="#FDBD39"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.7933 25.2044H23.7931C23.1036 25.2044 22.0863 24.5922 20.7695 23.3848C19.2116 21.9562 17.4271 19.8639 15.7446 17.4933C14.0621 15.1228 12.6796 12.7528 11.8517 10.8199C10.9498 8.71353 10.8212 7.4184 11.4695 6.97045C11.6117 6.87234 11.783 6.82263 11.9788 6.82263C12.5062 6.82263 13.5337 7.20857 15.4339 9.0473L15.4754 9.08748L15.4698 9.14463C15.4568 9.27672 15.4448 9.41 15.4342 9.54081L15.413 9.80056L15.2266 9.61595C13.1792 7.58852 12.278 7.36964 11.9855 7.36964C11.9021 7.36964 11.8357 7.38631 11.7881 7.41921C11.5068 7.61344 11.4887 8.56475 12.3632 10.6066C13.1763 12.5051 14.5387 14.8392 16.1994 17.1791C17.8603 19.5191 19.6175 21.5805 21.1475 22.9835C22.7973 24.4963 23.5408 24.6597 23.7839 24.6597C23.8678 24.6597 23.9361 24.6419 23.9866 24.607C24.2833 24.4021 24.2836 23.383 23.3085 21.1852L23.2637 21.0843L23.3617 21.0316C23.4597 20.9788 23.5545 20.9269 23.6434 20.8772L23.7608 20.8116L23.8149 20.9335C24.5064 22.4908 25.1527 24.4701 24.3052 25.0557C24.1623 25.1544 23.9901 25.2044 23.7933 25.2044ZM23.7931 24.9642H23.7933L23.7932 25.0843L23.7931 24.9642Z"
      fill="#EE6723"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.5904 22.398L20.5805 22.5177C20.4169 24.5077 19.9861 26.9002 18.8628 26.997C18.8402 26.999 18.8168 27 18.7934 27C18.0303 27 17.3084 25.9253 16.6477 23.8058C16.0226 21.8006 15.5375 19.1084 15.2818 16.225C15.0261 13.3422 15.0299 10.6077 15.2926 8.52535C15.5789 6.25623 16.1239 5.07122 16.9125 5.0032C16.9358 5.00109 16.96 5 16.9838 5C17.5374 5 18.3717 5.61611 19.2257 8.48587L18.6681 8.59167C18.3829 7.63267 18.0721 6.8527 17.7636 6.31674C17.4782 5.821 17.2008 5.548 16.9822 5.548C16.9751 5.548 16.9678 5.54829 16.9607 5.54889C16.6189 5.5784 16.1211 6.39336 15.8436 8.59302C15.5856 10.638 15.5825 13.3315 15.8349 16.1773C16.0873 19.0235 16.5645 21.6756 17.1784 23.6448C17.4533 24.5268 17.7549 25.2537 18.0504 25.7469C18.323 26.2017 18.5868 26.4522 18.7932 26.4522C18.8003 26.4522 18.8074 26.4519 18.8144 26.4513C19.1414 26.4231 19.7578 25.5751 20.0171 22.5913L20.5904 22.398Z"
      fill="#EE6723"
    />
  </svg>
));

export default Zeplin;
