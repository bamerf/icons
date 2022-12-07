import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const Kayako = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 27.92C5 28.5586 5.37234 29 6.00495 29H17.9739C16.3676 25.8273 14.5692 22.9332 12.3307 20.2201C10.0146 21.6722 7.56659 22.9279 5 23.9513V27.92Z"
      fill="#F15713"
    />
    <path
      d="M5 8.15729C7.5601 9.17744 10.0024 10.4294 12.3128 11.8763C14.559 9.15832 16.504 6.18085 18.1144 3H6.24736C5.55831 3 5 3.56377 5 4.25932"
      fill="#69AAB5"
    />
    <path
      d="M12.3309 20.2201C14.3196 18.9734 16.211 17.5843 17.9822 16.0541C16.2057 14.5194 14.3075 13.1263 12.3138 11.8767C11.1022 13.3431 9.8004 14.7289 8.42676 16.0378C9.8073 17.3541 11.1148 18.7469 12.3309 20.2201Z"
      fill="#FFB1A2"
    />
    <path
      d="M17.9819 16.0546C16.2109 17.5846 14.3197 18.9736 12.3311 20.2202C14.5696 22.9332 16.3679 25.8273 17.9742 29L26.9623 29.0001C27.7919 29.0001 28.0985 28.4115 27.7919 27.8831C25.1916 23.4039 21.8649 19.4103 17.9819 16.0546Z"
      fill="#F37036"
    />
    <path
      d="M18.1134 3.00134C16.5039 6.18026 14.5572 9.1601 12.3126 11.8767C14.3062 13.1262 16.2053 14.5194 17.9817 16.0541C21.9232 12.6467 25.2925 8.58398 27.9094 4.02259C28.1693 3.56946 27.8364 3 27.3166 3L18.1134 3.00134Z"
      fill="#85B8C1"
    />
    <path
      d="M5 19.0068C6.18889 18.0713 7.3319 17.0816 8.427 16.0383C7.3319 14.9954 6.18889 14.0045 5 13.0702V19.0068Z"
      fill="#F76F6D"
    />
    <path
      d="M5 8.15723C7.5601 9.17738 10.0024 10.4294 12.3128 11.8762C11.1012 13.3425 9.80025 14.7289 8.42664 16.0378C7.33161 14.9949 6.18888 14.0044 5.00007 13.0702L5 8.15723Z"
      fill="#F39D90"
    />
    <path
      d="M12.3308 20.2202C11.1147 18.747 9.80715 17.3542 8.42664 16.038C7.33154 17.0813 6.18889 18.0714 5 19.007V23.9513C7.56658 22.9279 10.0147 21.6724 12.3308 20.2202Z"
      fill="#FA8176"
    />
  </svg>
));

export default Kayako;
