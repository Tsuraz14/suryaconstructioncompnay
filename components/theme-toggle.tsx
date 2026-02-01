"use client";

import * as React from "react";
import { useTheme } from "next-themes";

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2" />
      <path d="M12 19v2" />
      <path d="M5 5l1.5 1.5" />
      <path d="M17.5 17.5L19 19" />
      <path d="M3 12h2" />
      <path d="M19 12h2" />
      <path d="M5 19l1.5-1.5" />
      <path d="M17.5 6.5L19 5" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15.5A9 9 0 1 1 8.5 3a7 7 0 0 0 12.5 12.5Z" />
    </svg>
  );
}

function SystemIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M7 20h10" />
      <path d="M12 16v4" />
    </svg>
  );
}

const iconClass = "h-4 w-4";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  const nextTheme =
    theme === "light" ? "dark" : theme === "dark" ? "system" : "light";

  return (
    <button
      type="button"
      onClick={() => mounted && setTheme(nextTheme)}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/70 text-foreground transition hover:text-brand"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {!mounted ? (
        <span className="h-4 w-4 animate-pulse rounded-full bg-muted" />
      ) : theme === "system" ? (
        <SystemIcon className={iconClass} />
      ) : currentTheme === "dark" ? (
        <MoonIcon className={iconClass} />
      ) : (
        <SunIcon className={iconClass} />
      )}
    </button>
  );
}
