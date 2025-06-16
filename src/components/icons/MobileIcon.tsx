interface IconProps {
  className?: string;
  size?: number;
}

export default function MobileIcon({ className = "", size = 24 }: IconProps) {
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
        d="M17 2H7C5.9 2 5 2.9 5 4V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V4C19 2.9 18.1 2 17 2Z"
        fill="currentColor"
      />
      <path
        d="M7 4H17V18H7V4Z"
        fill="white"
      />
      <circle
        cx="12"
        cy="19.5"
        r="1.5"
        fill="white"
      />
      <rect
        x="9"
        y="6"
        width="6"
        height="1"
        fill="currentColor"
        opacity="0.3"
      />
      <rect
        x="9"
        y="8"
        width="4"
        height="1"
        fill="currentColor"
        opacity="0.3"
      />
      <rect
        x="9"
        y="10"
        width="5"
        height="1"
        fill="currentColor"
        opacity="0.3"
      />
    </svg>
  );
}