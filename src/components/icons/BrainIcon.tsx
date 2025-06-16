interface IconProps {
  className?: string;
  size?: number;
}

export default function BrainIcon({ className = "", size = 24 }: IconProps) {
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
        d="M12 2C8.5 2 6 4.5 6 8C6 8.5 6.1 9 6.2 9.5C4.9 10.1 4 11.4 4 13C4 15.2 5.8 17 8 17H16C18.2 17 20 15.2 20 13C20 11.4 19.1 10.1 17.8 9.5C17.9 9 18 8.5 18 8C18 4.5 15.5 2 12 2Z"
        fill="currentColor"
      />
      <path
        d="M9 10C9.55 10 10 9.55 10 9C10 8.45 9.55 8 9 8C8.45 8 8 8.45 8 9C8 9.55 8.45 10 9 10Z"
        fill="white"
      />
      <path
        d="M15 10C15.55 10 16 9.55 16 9C16 8.45 15.55 8 15 8C14.45 8 14 8.45 14 9C14 9.55 14.45 10 15 10Z"
        fill="white"
      />
      <path
        d="M12 14C13.1 14 14 13.1 14 12C14 11.4 13.6 11 13 11H11C10.4 11 10 11.4 10 12C10 13.1 10.9 14 12 14Z"
        fill="white"
      />
    </svg>
  );
}