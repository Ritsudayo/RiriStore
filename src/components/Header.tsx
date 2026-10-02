import { IconPlaceholder } from "@/components/IconPlaceholder";

const LEFT_ACTIONS = [
  { id: "cart", label: "Корзина" },
  { id: "favorites", label: "Избранные" },
] as const;

export function Header() {
  return (
    <header className="w-full border-b border-neutral-200 bg-white">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-3 items-center gap-4 px-6 py-4 sm:px-10">
        <div className="flex items-center gap-3">
          {LEFT_ACTIONS.map((action) => (
            <a
              key={action.id}
              href="#"
              aria-label={action.label}
              title={action.label}
              className="rounded-lg transition hover:bg-neutral-100"
            >
              <IconPlaceholder />
            </a>
          ))}
        </div>

        <div className="justify-self-center">
          <a
            href="#"
            className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl"
          >
            RiriStore
          </a>
        </div>

        <div className="flex items-center justify-end">
          <a
            href="#"
            aria-label="Профиль"
            title="Профиль"
            className="rounded-lg transition hover:bg-neutral-100"
          >
            <IconPlaceholder />
          </a>
        </div>
      </div>
    </header>
  );
}