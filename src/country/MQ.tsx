import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const Microsoft = forwardRef<SVGSVGElement, CommonProps>(
  ({ size = 24 }, ref) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_4430_187560)">
        <path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="#F0F0F0"
        />
        <path
          d="M23.8969 10.4353C23.5659 7.90475 22.4291 5.45947 20.485 3.51533C18.5409 1.57119 16.0955 0.434425 13.5649 0.103394L13.565 10.4353H23.8969Z"
          fill="#0052B4"
        />
        <path
          d="M10.4345 0.104004C7.9039 0.435035 5.45857 1.57175 3.51443 3.51589C1.57034 5.46008 0.43357 7.90541 0.102539 10.4361L10.4345 10.436L10.4345 0.104004Z"
          fill="#0052B4"
        />
        <path
          d="M0.103027 13.5664C0.434059 16.097 1.57082 18.5424 3.51492 20.4865C5.45906 22.4306 7.90434 23.5673 10.435 23.8984L10.435 13.5665L0.103027 13.5664Z"
          fill="#0052B4"
        />
        <path
          d="M13.5649 23.8983C16.0955 23.5673 18.5408 22.4306 20.485 20.4864C22.4291 18.5423 23.5658 16.097 23.8968 13.5664H13.5649V23.8983Z"
          fill="#0052B4"
        />
        <path
          d="M16.0966 7.61471C16.0966 7.45515 16.2263 7.32545 16.3859 7.32545H17.0057C17.9856 7.32545 18.7828 6.52829 18.7828 5.54846C18.7828 4.56863 17.9857 3.77143 17.0057 3.77143H16.4171C16.2249 3.6271 15.9672 3.53809 15.6828 3.53809C15.0897 3.53809 14.6089 3.9227 14.6089 4.39716C14.6089 4.86704 15.0805 5.24823 15.6657 5.25563L15.6654 5.25906H17.0057C17.1654 5.25906 17.2951 5.38881 17.2951 5.54837C17.2951 5.70793 17.1654 5.83763 17.0057 5.83763H16.3859C15.406 5.83763 14.6089 6.63479 14.6089 7.61462C14.6089 8.59445 15.4059 9.39165 16.3859 9.39165H18.7828V7.90393H16.3859C16.2263 7.90398 16.0966 7.77428 16.0966 7.61471Z"
          fill="#F0F0F0"
        />
        <path
          d="M6.70491 7.61484C6.70491 7.45527 6.83461 7.32557 6.99422 7.32557H7.6141C8.59397 7.32557 9.39118 6.52841 9.39118 5.54858C9.39118 4.56876 8.59402 3.77155 7.6141 3.77155H7.02544C6.8333 3.62722 6.57554 3.53821 6.29119 3.53821C5.69808 3.53821 5.21729 3.92282 5.21729 4.39729C5.21729 4.86716 5.68889 5.24835 6.27408 5.25576L6.2738 5.25918H7.61414C7.77375 5.25918 7.90346 5.38893 7.90346 5.54849C7.90346 5.70805 7.77375 5.83776 7.61414 5.83776H6.99427C6.01439 5.83776 5.21729 6.63491 5.21729 7.61474C5.21729 8.59457 6.01435 9.39177 6.99427 9.39177H9.39113V7.90406H6.99422C6.83461 7.9041 6.70491 7.7744 6.70491 7.61484Z"
          fill="#F0F0F0"
        />
        <path
          d="M16.0966 18.6859C16.0966 18.5263 16.2263 18.3966 16.3859 18.3966H17.0058C17.9857 18.3966 18.7829 17.5995 18.7829 16.6196C18.7829 15.6398 17.9857 14.8426 17.0058 14.8426H16.4171C16.225 14.6983 15.9672 14.6093 15.6829 14.6093C15.0897 14.6093 14.6089 14.9939 14.6089 15.4683C14.6089 15.9382 15.0805 16.3194 15.6657 16.3268L15.6655 16.3302H17.0058C17.1654 16.3302 17.2951 16.46 17.2951 16.6195C17.2951 16.7791 17.1654 16.9088 17.0058 16.9088H16.3859C15.406 16.9088 14.6089 17.706 14.6089 18.6858C14.6089 19.6656 15.406 20.4628 16.3859 20.4628H18.7828V18.9751H16.3859C16.2263 18.9752 16.0966 18.8454 16.0966 18.6859Z"
          fill="#F0F0F0"
        />
        <path
          d="M6.70496 18.6859C6.70496 18.5263 6.83466 18.3966 6.99427 18.3966H7.61414C8.59402 18.3966 9.39122 17.5995 9.39122 16.6196C9.39122 15.6398 8.59406 14.8426 7.61414 14.8426H7.02549C6.83335 14.6983 6.57558 14.6093 6.29124 14.6093C5.69808 14.6093 5.21729 14.9939 5.21729 15.4683C5.21729 15.9382 5.68889 16.3194 6.27408 16.3268L6.2738 16.3302H7.61414C7.77375 16.3302 7.90346 16.46 7.90346 16.6195C7.90346 16.7791 7.77375 16.9088 7.61414 16.9088H6.99427C6.01439 16.9088 5.21729 17.706 5.21729 18.6858C5.21729 19.6656 6.01435 20.4628 6.99427 20.4628H9.39117V18.9751H6.99427C6.83466 18.9752 6.70496 18.8454 6.70496 18.6859Z"
          fill="#F0F0F0"
        />
      </g>
      <defs>
        <clipPath id="clip0_4430_187560">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Microsoft;
