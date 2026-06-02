@import "tailwindcss" source(none);
@source "../src";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --font-display: "Inter", system-ui, sans-serif;

  --gradient-brand: linear-gradient(135deg, oklch(0.98 0 0) 0%, oklch(0.78 0.025 140) 100%);
  --gradient-text: linear-gradient(135deg, oklch(0.98 0 0) 0%, oklch(0.78 0.025 140) 100%);
  --gradient-radial: radial-gradient(circle at 50% 50%, oklch(0.78 0.025 140 / 0.15), transparent 60%);
  --shadow-glow: 0 20px 60px -20px oklch(0.78 0.025 140 / 0.35);
  --shadow-card: 0 8px 32px -8px oklch(0 0 0 / 0.6);

  --animate-fade-up: fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
  --animate-fade-in: fade-in 0.6s ease-out both;
  --animate-float: float 6s ease-in-out infinite;
  --animate-shimmer: shimmer 3s linear infinite;
  --animate-marquee: marquee 30s linear infinite;

  @keyframes fade-up {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-12px); }
  }
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  @keyframes marquee {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }
}

:root {
  --radius: 0.75rem;
  --background: oklch(0.08 0 0);
  --foreground: oklch(0.98 0 0);
  --card: oklch(0.12 0.005 140);
  --card-foreground: oklch(0.98 0 0);
  --popover: oklch(0.12 0.005 140);
  --popover-foreground: oklch(0.98 0 0);
  --primary: oklch(0.78 0.025 140);
  --primary-foreground: oklch(0.1 0 0);
  --secondary: oklch(0.18 0.005 140);
  --secondary-foreground: oklch(0.98 0 0);
  --muted: oklch(0.18 0.005 140);
  --muted-foreground: oklch(0.65 0.015 140);
  --accent: oklch(0.78 0.025 140);
  --accent-foreground: oklch(0.1 0 0);
  --destructive: oklch(0.6 0.22 25);
  --destructive-foreground: oklch(0.98 0 0);
  --border: oklch(1 0 0 / 8%);
  --input: oklch(1 0 0 / 10%);
  --ring: oklch(0.78 0.025 140);
}

.dark {
  --background: oklch(0.13 0.01 60);
  --foreground: oklch(0.97 0.01 80);
}

@layer base {
  * { border-color: var(--color-border); }
  html { scroll-behavior: smooth; }
  body {
    background-color: var(--color-background);
    color: var(--color-foreground);
    font-family: var(--font-display);
    background-image:
      linear-gradient(oklch(1 0 0 / 0.025) 1px, transparent 1px),
      linear-gradient(90deg, oklch(1 0 0 / 0.025) 1px, transparent 1px);
    background-size: 60px 60px;
  }
}

@utility text-gradient {
  background-image: var(--gradient-text);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

@utility bg-brand {
  background-image: var(--gradient-brand);
}

@utility glow {
  box-shadow: var(--shadow-glow);
}
