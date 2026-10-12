import { BurgerMenu } from "@/components/BurgerMenu";
import { PriceFilter } from "@/components/PriceFilter";

type CatalogHeaderProps = {
  title: string;
};

/**
 * Шапка блока каталога: заголовок по центру, бургер-меню слева,
 * фильтр по цене справа. Отступы слева и справа одинаковые,
 * поэтому расстояние от кнопок до краёв блока равное.
 */
export function CatalogHeader({ title }: CatalogHeaderProps) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white px-6 py-6 sm:px-8">
      <div className="relative flex min-h-10 items-center justify-center">
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <BurgerMenu />
        </div>

        <h1 className="text-center text-2xl font-semibold text-neutral-900 sm:text-3xl">
          {title}
        </h1>

        <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 lg:block">
          <PriceFilter />
        </div>
      </div>

      {/* На узких экранах фильтр переносится под заголовок */}
      <div className="mt-4 flex justify-center lg:hidden">
        <PriceFilter />
      </div>
    </div>
  );
}
