export function SkipLink({ label = 'Skip to main content' }: { label?: string }) {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:inline-flex focus:min-h-[44px] focus:items-center focus:rounded-full focus:bg-electric focus:px-5 focus:text-sm focus:font-semibold focus:text-white"
    >
      {label}
    </a>
  );
}
