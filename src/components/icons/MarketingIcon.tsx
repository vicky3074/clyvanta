interface IconProps {
  className?: string;
  size?: number;
}

export default function MarketingIcon({ className = "", size = 24 }: IconProps) {
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
        d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
        fill="currentColor"
      />
      <path
        d="M19 14L19.74 16.74L22 17L19.74 17.26L19 20L18.26 17.26L16 17L18.26 16.74L19 14Z"
        fill="currentColor"
        opacity="0.7"
      />
      <path
        d="M5 14L5.74 16.74L8 17L5.74 17.26L5 20L4.26 17.26L2 17L4.26 16.74L5 14Z"
        fill="currentColor"
        opacity="0.5"
      />
      <circle
        cx="12"
        cy="9"
        r="2"
        fill="white"
      />
      <path
        d="M10 9H14M12 7V11"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}