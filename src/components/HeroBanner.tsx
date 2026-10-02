/**
 * Hero-баннер на всю ширину страницы.
 * Вместо фото — градиент от фиолетового сверху к белому снизу,
 * чистый белый занимает нижние 1/4 баннера (75% → 100%).
 */
const BANNER_GRADIENT =
  "[background-image:linear-gradient(180deg,#7c3aed_0%,#8b5cf6_25%,#c4b5fd_50%,#ede9fe_62%,#ffffff_75%,#ffffff_100%)]";

export function HeroBanner() {
  return (
    <section className={`w-full ${BANNER_GRADIENT}`}>
      <div className="mx-auto flex min-h-[420px] w-full max-w-7xl flex-col items-center justify-center gap-4 px-6 py-16 text-center sm:min-h-[480px] sm:px-10">
        <h1 className="text-4xl font-bold tracking-tight text-purple-950 sm:text-6xl">
          RiriStore
        </h1>
        <p className="text-xl text-neutral-700 sm:text-2xl">текст</p>
      </div>
    </section>
  );
}