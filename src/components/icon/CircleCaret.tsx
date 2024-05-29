import { SVGProps } from "react";
const CircleCaretSVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_1_56)">
      <path
        d="M7.99999 14.6667C11.682 14.6667 14.6667 11.682 14.6667 7.99999C14.6667 4.31799 11.682 1.33333 7.99999 1.33333C4.31799 1.33333 1.33333 4.31799 1.33333 7.99999C1.33333 11.682 4.31799 14.6667 7.99999 14.6667Z"
        stroke="black"
        strokeLinejoin="round"
      />
      <path
        d="M11 7L8 10L5 7"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_56">
        <rect width={16} height={16} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default CircleCaretSVGComponent;
