export function AboutShop() {
  return (
    <section className="w-full px-6 py-16 sm:px-10 sm:py-20">
      {/* Ширина блока — примерно 2/4 от ширины страницы */}
      <div className="mx-auto w-1/2 min-w-[280px] max-w-3xl text-center">
        <h2 className="text-2xl font-semibold text-neutral-900 sm:text-3xl">
          О магазине
        </h2>
        <p className="mt-6 text-lg text-neutral-600 sm:text-xl">
          Добро пожаловать в RiriStore!
        </p>
      </div>
    </section>
  );
}