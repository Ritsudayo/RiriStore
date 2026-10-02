const ANNOUNCEMENTS = [
  "добавлены категории",
  "обновлена главная страница",
  "добавлен баннер",
] as const;

export function Announcements() {
  return (
    <section className="w-full px-6 pt-16 sm:px-10 sm:pt-20">
      <div className="mx-auto w-full max-w-7xl rounded-xl border border-neutral-200 bg-white px-8 py-10 sm:px-12 sm:py-12">
        <h2 className="text-center text-2xl font-semibold text-neutral-900 sm:text-3xl">
          Объявления
        </h2>
        <ul className="mt-8 flex flex-col items-start gap-4 text-left text-xl text-neutral-700">
          {ANNOUNCEMENTS.map((announcement) => (
            <li key={announcement}>{announcement}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}