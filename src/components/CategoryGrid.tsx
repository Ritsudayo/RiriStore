const CATEGORIES = [
  "Браслеты",
  "Брелки",
  "Чокеры",
  "Вязаные изделия",
] as const;

export function CategoryGrid() {
  return (
    <section className="w-full px-6 sm:px-10">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CATEGORIES.map((category) => (
          <a
            key={category}
            href="#"
            className="flex h-48 items-center justify-center rounded-xl border border-neutral-200 bg-white p-6 text-center text-xl font-semibold text-neutral-900 transition hover:border-neutral-300 lg:h-56"
          >
            {category}
          </a>
        ))}
      </div>
    </section>
  );
}