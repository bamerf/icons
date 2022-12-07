import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const AWS = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.59946 15.0379C9.59946 15.3988 9.63848 15.6915 9.70677 15.9062C9.78482 16.1208 9.88238 16.3549 10.019 16.6086C10.0677 16.6866 10.0873 16.7647 10.0873 16.833C10.0873 16.9305 10.0287 17.0281 9.90189 17.1257L9.28726 17.5354C9.19946 17.5939 9.11166 17.6232 9.03361 17.6232C8.93605 17.6232 8.83849 17.5744 8.74093 17.4866C8.60435 17.3403 8.48728 17.1842 8.38972 17.0281C8.29216 16.8622 8.1946 16.6769 8.08728 16.4525C7.32632 17.35 6.37023 17.7988 5.21903 17.7988C4.39953 17.7988 3.74588 17.5647 3.26784 17.0964C2.7898 16.6281 2.5459 16.0037 2.5459 15.2232C2.5459 14.394 2.83858 13.7208 3.43369 13.2135C4.0288 12.7062 4.81904 12.4525 5.8239 12.4525C6.1556 12.4525 6.49706 12.4818 6.85803 12.5306C7.219 12.5794 7.58973 12.6574 7.97997 12.7452V12.033C7.97997 11.2916 7.82387 10.7745 7.52144 10.4721C7.20925 10.1697 6.68242 10.0233 5.93122 10.0233C5.58976 10.0233 5.23854 10.0623 4.87757 10.1501C4.5166 10.2379 4.16539 10.3453 3.82393 10.4818C3.66783 10.5501 3.55076 10.5892 3.48247 10.6087C3.41418 10.6282 3.3654 10.6379 3.32637 10.6379C3.18979 10.6379 3.1215 10.5404 3.1215 10.3355V9.85746C3.1215 9.70137 3.14101 9.5843 3.18979 9.516C3.23857 9.44771 3.32637 9.37942 3.46296 9.31113C3.80442 9.13552 4.21417 8.98918 4.69221 8.87211C5.17025 8.74528 5.67756 8.68675 6.21414 8.68675C7.3751 8.68675 8.22387 8.95016 8.7702 9.47698C9.30678 10.0038 9.57994 10.8038 9.57994 11.8769V15.0379H9.59946ZM5.63854 16.5208C5.96048 16.5208 6.29219 16.4622 6.6434 16.3452C6.99461 16.2281 7.30681 16.0135 7.57022 15.7208C7.72631 15.5354 7.84338 15.3306 7.90192 15.0964C7.96045 14.8623 7.99948 14.5793 7.99948 14.2476V13.8379C7.71656 13.7696 7.41412 13.7111 7.10193 13.672C6.78974 13.633 6.48731 13.6135 6.18487 13.6135C5.53122 13.6135 5.05318 13.7403 4.73123 14.0037C4.40929 14.2672 4.25319 14.6379 4.25319 15.1257C4.25319 15.5842 4.37026 15.9257 4.61416 16.1598C4.8483 16.4037 5.18976 16.5208 5.63854 16.5208ZM13.4726 17.5744C13.297 17.5744 13.1799 17.5452 13.1018 17.4769C13.0238 17.4183 12.9555 17.2817 12.897 17.0964L10.6043 9.55503C10.5458 9.35991 10.5165 9.23308 10.5165 9.16479C10.5165 9.00869 10.5946 8.92089 10.7507 8.92089H11.7067C11.8921 8.92089 12.0189 8.95016 12.0872 9.01845C12.1653 9.07699 12.2238 9.21357 12.2823 9.39893L13.9213 15.8574L15.4433 9.39893C15.4921 9.20381 15.5506 9.07699 15.6286 9.01845C15.7067 8.95992 15.8433 8.92089 16.0189 8.92089H16.7993C16.9847 8.92089 17.1115 8.95016 17.1896 9.01845C17.2676 9.07699 17.3359 9.21357 17.375 9.39893L18.9164 15.9354L20.6042 9.39893C20.6627 9.20381 20.731 9.07699 20.7993 9.01845C20.8773 8.95992 21.0042 8.92089 21.1798 8.92089H22.0871C22.2432 8.92089 22.331 8.99894 22.331 9.16479C22.331 9.21357 22.3212 9.26235 22.3115 9.32089C22.3017 9.37942 22.2822 9.45747 22.2432 9.56478L19.892 17.1061C19.8335 17.3013 19.7652 17.4281 19.6871 17.4866C19.6091 17.5452 19.4822 17.5842 19.3164 17.5842H18.4774C18.292 17.5842 18.1652 17.5549 18.0871 17.4866C18.0091 17.4183 17.9408 17.2915 17.9018 17.0964L16.3896 10.8038L14.8872 17.0866C14.8384 17.2817 14.7799 17.4086 14.7018 17.4769C14.6238 17.5452 14.4872 17.5744 14.3116 17.5744H13.4726ZM26.009 17.8378C25.5017 17.8378 24.9944 17.7793 24.5066 17.6622C24.0188 17.5452 23.6383 17.4183 23.3846 17.272C23.2285 17.1842 23.1212 17.0866 23.0822 16.9988C23.0432 16.911 23.0237 16.8135 23.0237 16.7257V16.2281C23.0237 16.0232 23.1017 15.9257 23.248 15.9257C23.3066 15.9257 23.3651 15.9354 23.4236 15.9549C23.4822 15.9744 23.57 16.0135 23.6675 16.0525C23.9992 16.1988 24.3602 16.3159 24.7407 16.394C25.1309 16.472 25.5114 16.511 25.9017 16.511C26.5163 16.511 26.9943 16.4037 27.326 16.1891C27.6577 15.9744 27.8333 15.6623 27.8333 15.2623C27.8333 14.9891 27.7455 14.7647 27.5699 14.5793C27.3943 14.394 27.0626 14.2281 26.5846 14.072L25.17 13.633C24.4578 13.4086 23.931 13.0769 23.609 12.6379C23.2871 12.2086 23.1212 11.7306 23.1212 11.2233C23.1212 10.8135 23.209 10.4526 23.3846 10.1404C23.5602 9.8282 23.7944 9.55503 24.087 9.3404C24.3797 9.11601 24.7114 8.95016 25.1017 8.83309C25.4919 8.71602 25.9017 8.66724 26.3309 8.66724C26.5455 8.66724 26.7699 8.67699 26.9846 8.70626C27.209 8.73553 27.4138 8.77455 27.6187 8.81358C27.8138 8.86236 27.9992 8.91114 28.1748 8.96967C28.3504 9.02821 28.487 9.08674 28.5845 9.14528C28.7211 9.22333 28.8187 9.30137 28.8772 9.38918C28.9358 9.46722 28.965 9.57454 28.965 9.71112V10.1697C28.965 10.3745 28.887 10.4818 28.7406 10.4818C28.6626 10.4818 28.5358 10.4428 28.3699 10.3648C27.8138 10.1111 27.1894 9.98429 26.4968 9.98429C25.9407 9.98429 25.5017 10.0721 25.1992 10.2575C24.8968 10.4428 24.7407 10.7257 24.7407 11.1257C24.7407 11.3989 24.8383 11.633 25.0334 11.8184C25.2285 12.0038 25.5895 12.1891 26.1065 12.355L27.4919 12.794C28.1943 13.0184 28.7016 13.3306 29.0041 13.7306C29.3065 14.1306 29.4528 14.5891 29.4528 15.0964C29.4528 15.5159 29.365 15.8964 29.1992 16.2281C29.0236 16.5598 28.7894 16.8525 28.487 17.0866C28.1846 17.3305 27.8236 17.5061 27.4041 17.633C26.9651 17.7695 26.5065 17.8378 26.009 17.8378Z"
      fill="#222F3E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27.8577 22.579C24.648 24.9497 19.9847 26.2082 15.975 26.2082C10.3555 26.2082 5.29218 24.1302 1.46784 20.6766C1.16541 20.4034 1.43857 20.0327 1.79954 20.2473C5.93607 22.6473 11.0384 24.1009 16.3164 24.1009C19.8773 24.1009 23.7895 23.3595 27.3894 21.8375C27.926 21.5937 28.3845 22.1888 27.8577 22.579Z"
      fill="#FF9900"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M29.1838 21.0573C28.7741 20.5305 26.4717 20.8036 25.4278 20.9305C25.1156 20.9695 25.0668 20.6963 25.3498 20.4915C27.1839 19.2037 30.1985 19.5744 30.5497 20.0037C30.9009 20.4427 30.4521 23.4573 28.7351 24.9011C28.4717 25.1255 28.218 25.0085 28.3351 24.7158C28.7253 23.7499 29.5936 21.5744 29.1838 21.0573Z"
      fill="#FF9900"
    />
  </svg>
));

export default AWS;