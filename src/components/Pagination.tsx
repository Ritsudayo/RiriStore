import { cn } from "@/lib/utils";

const PAGES = Array.from({ length: 10 }, (_, index) => index + 1);

/**
 * Пагинация внизу страницы. Пока только UI — переключение не работает.
 */
export function Pagination() {
  return (
    <nav
      aria-label="Пагинация"
      className="flex flex-wrap items-center justify-center gap-2"
    >
      {PAGES.map((page) => {
        const isActive = page === 1;

        return (
          <button
            key={page}
            type="button"
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "h-9 w-9 rounded-lg border text-sm font-medium transition",
              isActive
                ? "border-neutral-900 bg-neutral-900 text-white"
                : "border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-100",
            )}
          >
            {page}
          </button>
        );
      })}
    </nav>
  );
}
