import { SvgIconProps } from "@/lib/types";

export const ArrowLong = ({ ...props }: SvgIconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.7832 8.31104L26.5728 16.1007L18.7832 23.8903"
        stroke="currentColor"
        strokeWidth="1.92495"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.75684 16.1006H26.3548"
        stroke="currentColor"
        strokeWidth="1.92495"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const Arrow = ({ ...props }: SvgIconProps) => {
  return (
    <svg
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.7133 24.1756C17.1958 24.693 17.1958 25.532 17.7133 26.0494C18.2307 26.5669 19.0697 26.5669 19.5871 26.0494L27.2627 18.3738C28.2976 17.3389 28.2976 15.6611 27.2627 14.6262L19.5871 6.95058C19.0697 6.43314 18.2307 6.43314 17.7133 6.95058C17.1958 7.46803 17.1958 8.30697 17.7133 8.82442L24.0639 15.175H5.4002C4.66842 15.175 4.0752 15.7682 4.0752 16.5C4.0752 17.2318 4.66842 17.825 5.4002 17.825H24.0639L17.7133 24.1756Z"
        fill="currentColor"
      />
    </svg>
  );
};
