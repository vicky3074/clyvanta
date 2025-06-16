interface IconProps {
  className?: string;
  size?: number;
}

export default function WebIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4Z"
        fill="currentColor"
      />
      <path
        d="M4 6H20V8H4V6Z"
        fill="white"
      />
      <path
        d="M4 10H20V18H4V10Z"
        fill="white"
      />
      <circle
        cx="5.5"
        cy="7"
        r="0.5"
        fill="currentColor"
      />
      <circle
        cx="7"
        cy="7"
        r="0.5"
        fill="currentColor"
      />
      <circle
        cx="8.5"
        cy="7"
        r="0.5"
        fill="currentColor"
      />
      <rect
        x="6"
        y="12"
        width="8"
        height="1"
        fill="currentColor"
        opacity="0.3"
      />
      <rect
        x="6"
        y="14"
        width="6"
        height="1"
        fill="currentColor"
        opacity="0.3"
      />
      <rect
        x="6"
        y="16"
        width="4"
        height="1"
        fill="currentColor"
        opacity="0.3"
      />
    </svg>
  );
}