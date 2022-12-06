import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const Atom = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="16" cy="16" r="14" fill="url(#paint0_linear_4430_189513)" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.4918 15.7491C11.1422 14.8966 10.8596 14.0645 10.6475 13.2747C10.2373 13.3639 9.852 13.4659 9.49551 13.5794C8.64347 13.8506 7.97874 14.1799 7.53004 14.5378C7.08094 14.8959 6.88762 15.2483 6.87156 15.5737C6.85787 15.851 6.96935 16.1576 7.25678 16.4905C7.54623 16.8257 7.99577 17.1641 8.59858 17.4838C8.8104 17.5961 8.89002 17.8569 8.77643 18.0664C8.66283 18.2758 8.39903 18.3545 8.18721 18.2422C7.527 17.8921 6.97791 17.493 6.59481 17.0493C6.20967 16.6033 5.97464 16.0897 6.00218 15.5317C6.03467 14.8737 6.42279 14.3151 6.98359 13.8679C7.5448 13.4203 8.31844 13.0499 9.2288 12.7602C9.60799 12.6395 10.0149 12.5316 10.4457 12.4374C10.3589 12.0293 10.293 11.6358 10.2484 11.2604C10.1371 10.3212 10.1567 9.47155 10.3355 8.78092C10.5141 8.0908 10.867 7.50976 11.4589 7.20735C11.9812 6.9405 12.5768 6.94941 13.1703 7.13064C13.7614 7.31112 14.3828 7.67077 15.0049 8.15881C15.1932 8.30651 15.2248 8.57718 15.0754 8.76335C14.926 8.94952 14.6522 8.9807 14.4639 8.83299C13.892 8.38435 13.3664 8.09123 12.9135 7.95293C12.463 7.81537 12.1177 7.83949 11.8584 7.97193C11.5657 8.12147 11.3218 8.44167 11.1787 8.99433C11.0357 9.54649 11.0087 10.2812 11.1129 11.1601C11.1548 11.5132 11.2174 11.8856 11.3004 12.2741C12.1261 12.1376 13.021 12.0479 13.9628 12.0113C15.055 10.6433 16.2018 9.51896 17.2831 8.73177C18.0533 8.17114 18.8096 7.76734 19.505 7.57902C20.1999 7.39084 20.8852 7.40629 21.444 7.76509C21.9413 8.08442 22.2289 8.60649 22.3621 9.21266C22.4947 9.81651 22.483 10.5369 22.3572 11.3222C22.3195 11.5569 22.0966 11.7171 21.8592 11.6799C21.6218 11.6427 21.4599 11.4223 21.4975 11.1875C21.6133 10.4646 21.6134 9.85941 21.5115 9.39531C21.41 8.93354 21.2167 8.64529 20.9699 8.48686C20.6936 8.30943 20.2914 8.25836 19.7349 8.40906C19.179 8.55962 18.52 8.90009 17.7992 9.42481C16.9349 10.0539 16.0096 10.9276 15.1009 11.9932C15.4614 11.9955 15.8272 12.0055 16.197 12.0233C18.8763 12.1526 21.3014 12.6743 23.0595 13.4277C23.937 13.8037 24.6705 14.2468 25.1849 14.7463C25.699 15.2454 26.0303 15.8387 25.9978 16.4967C25.9706 17.0475 25.6929 17.5309 25.2746 17.9346C24.8587 18.336 24.2854 18.6782 23.6085 18.9622C23.3873 19.055 23.1318 18.9529 23.0379 18.7341C22.944 18.5153 23.0473 18.2627 23.2686 18.1699C23.8852 17.9112 24.3538 17.6206 24.6667 17.3187C24.9771 17.0191 25.1149 16.7287 25.1284 16.4548C25.1445 16.1294 24.9868 15.7601 24.5751 15.3604C24.1638 14.961 23.5347 14.5692 22.7134 14.2173C21.0739 13.5148 18.7569 13.0085 16.1546 12.8829C15.5547 12.8539 14.968 12.8466 14.3993 12.859C14.0361 13.3305 13.679 13.8313 13.333 14.3579C13.0163 14.8402 12.7234 15.3221 12.4553 15.799C12.6878 16.3386 12.9485 16.8873 13.2368 17.4391C14.4328 19.7277 15.8606 21.6017 17.1877 22.7847C17.8525 23.3773 18.4742 23.7805 19.0124 23.9847C19.5511 24.189 19.9564 24.1775 20.2491 24.028C20.5311 23.8839 20.7674 23.5821 20.9126 23.0658C21.058 22.5488 21.0976 21.8604 21.0157 21.0328C20.8521 19.3805 20.2138 17.2661 19.1297 15.0705C19.0243 14.8569 19.1139 14.5993 19.3299 14.495C19.5459 14.3908 19.8065 14.4794 19.9119 14.6929C21.0283 16.9541 21.7057 19.1688 21.8819 20.949C21.9699 21.8377 21.9354 22.6414 21.7512 23.2963C21.5669 23.9518 21.2184 24.5015 20.6487 24.7926C20.0567 25.095 19.3733 25.0434 18.7006 24.7882C18.0275 24.5328 17.3152 24.057 16.6049 23.4238C15.1818 22.1552 13.6949 20.1905 12.4635 17.8342C12.2779 17.479 12.103 17.1242 11.939 16.7714C11.2857 18.0789 10.8302 19.322 10.5916 20.3984C10.4 21.2629 10.3535 21.9967 10.4405 22.5601C10.5276 23.124 10.7383 23.4665 11.0147 23.6439C11.2746 23.8108 11.6446 23.8658 12.1514 23.7466C12.6594 23.6271 13.2626 23.3405 13.928 22.8873C14.126 22.7525 14.397 22.8019 14.5333 22.9976C14.6697 23.1934 14.6197 23.4613 14.4218 23.5961C13.7047 24.0844 13.0017 24.4312 12.3528 24.5839C11.7027 24.7368 11.0654 24.7026 10.5406 24.3657C9.98181 24.0069 9.68882 23.3942 9.58005 22.69C9.47119 21.9853 9.53665 21.1379 9.7414 20.2142C10.0371 18.8803 10.6342 17.3389 11.4918 15.7491ZM12.0447 14.7783C11.8306 14.2052 11.6505 13.6475 11.5048 13.113C12.0628 13.0228 12.6566 12.9543 13.2787 12.9104C13.0494 13.2266 12.8238 13.5532 12.6031 13.8892C12.4085 14.1854 12.2223 14.4821 12.0447 14.7783Z"
      fill="white"
    />
    <path
      d="M16.0401 17.2176C16.7268 17.2176 17.2835 16.6672 17.2835 15.9882C17.2835 15.3092 16.7268 14.7588 16.0401 14.7588C15.3533 14.7588 14.7966 15.3092 14.7966 15.9882C14.7966 16.6672 15.3533 17.2176 16.0401 17.2176Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="paint0_linear_4430_189513"
        x1="16"
        y1="2"
        x2="16"
        y2="30"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#B2E299" />
        <stop offset="1" stop-color="#03A171" />
      </linearGradient>
    </defs>
  </svg>
));

export default Atom;
