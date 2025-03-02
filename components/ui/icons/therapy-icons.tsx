import React from "react";

export interface TherapyIconProps extends React.SVGProps<SVGSVGElement> {
  /** The icon name to display */
  name: 
    | "massage" 
    | "physiotherapy" 
    | "yoga" 
    | "rehabilitation" 
    | "manual-therapy" 
    | "acupuncture" 
    | "wellness"
    | "exercise";
  /** Optional size in pixels (defaults to 24) */
  size?: number;
}

/**
 * Custom therapy-related icons component that renders SVG icons
 */
export function TherapyIcon({ 
  name, 
  size = 24,
  className,
  ...props 
}: TherapyIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {renderPath(name)}
    </svg>
  );
}

function renderPath(name: TherapyIconProps["name"]) {
  switch (name) {
    case "massage":
      return (
        <>
          <path d="M4 15v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
          <path d="M12 4.5a3 3 0 0 0-3 3v3a3 3 0 0 0 6 0v-3a3 3 0 0 0-3-3z" />
          <path d="m9 13 3 3 3-3" />
        </>
      );
    case "physiotherapy":
      return (
        <>
          <path d="M9 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          <path d="M11 11.5c-1.4 0-3 .8-4 2l-2 2.5 3 1.5 3-3.5" />
          <path d="M18 15a4 4 0 1 1-3-7 4 4 0 0 1 3 7z" />
          <path d="M15 8v8" />
        </>
      );
    case "yoga":
      return (
        <>
          <path d="M12 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
          <path d="M20 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
          <path d="M4 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
          <path d="M12 4v16" />
          <path d="M4 15 20 9" />
          <path d="M20 15 4 9" />
        </>
      );
    case "rehabilitation":
      return (
        <>
          <path d="M14 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
          <path d="M20 11s-1.25-3-4-3c-2 0-4 1.5-4 3" />
          <path d="M12 20v-5h-1" />
          <path d="M4 13a2 2 0 0 1 2-2h3" />
          <path d="M4 19a2 2 0 0 0 2-2v-4" />
          <path d="M20 16.5A4 4 0 0 1 16 20h-4" />
        </>
      );
    case "manual-therapy":
      return (
        <>
          <path d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2" />
          <path d="M16 2v4" />
          <path d="M8 2v4" />
          <path d="M3 10h18" />
          <path d="M15 14c2 0 3 1 3 3" />
          <path d="M18 19h2v2" />
        </>
      );
    case "acupuncture":
      return (
        <>
          <path d="M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0" />
          <path d="M12 4v16" />
          <path d="M4 12h16" />
          <path d="M12 8a4 4 0 1 0 4 4" />
        </>
      );
    case "wellness":
      return (
        <>
          <path d="M12 3a4 4 0 0 1 4 4c0 1.85-.7 3.2-2 4.5 1.4 1.3 2 2.65 2 4.5a4 4 0 0 1-4 4" />
          <path d="M16 16c-.7 1-1.68 1.48-3 1.5-2.1.05-4-.95-4-4.55C9 9.3 11.75 7 14.5 6" />
          <path d="M8 3a4 4 0 0 0-4 4c0 1.85.7 3.2 2 4.5-1.4 1.3-2 2.65-2 4.5a4 4 0 0 0 4 4" />
          <path d="M8 16c.7 1 1.68 1.48 3 1.5 2.1.05 4-.95 4-4.55C15 9.3 12.25 7 9.5 6" />
        </>
      );
    case "exercise":
      return (
        <>
          <path d="M7 10h3V5L6.5 9.5" />
          <path d="M16.5 9.5L13 5v5h3" />
          <path d="M8 14l-2 2m10-2l2 2" />
          <path d="M18 8.5a4 2 0 0 0-4 0m-8 0a4 2 0 0 1 4 0" />
          <path d="M16 18a4 1 0 0 1-8 0" />
        </>
      );
    default:
      return null;
  }
} 