const SOCIALS = ["TikTok", "VK", "Telegram"] as const;

export function Footer() {
  return (
    <footer className="mt-16 w-full border-t border-neutral-200 bg-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-6 py-10 sm:px-10">
        <span className="text-lg font-semibold text-neutral-900">RiriStore</span>
        <nav
          aria-label="Соцсети"
          className="flex flex-wrap items-center justify-center gap-8"
        >
          {SOCIALS.map((social) => (
            <a
              key={social}
              href="#"
              className="text-base text-neutral-600 transition hover:text-neutral-900"
            >
              {social}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}