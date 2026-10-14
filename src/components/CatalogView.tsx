import { CatalogHeader } from "@/components/CatalogHeader";
import { Pagination } from "@/components/Pagination";
import { ProductCard } from "@/components/ProductCard";
import type { Product } from "@/lib/mock-data";

type CatalogViewProps = {
  title: string;
  products: Product[];
};

/**
 * Общий вид каталога: шапка с заголовком/бургером/фильтром,
 * сетка товаров (4 колонки на десктопе, 1 на телефоне) и пагинация.
 */
export function CatalogView({ title, products }: CatalogViewProps) {
  return (
    <section className="w-full px-6 py-12 sm:px-10 sm:py-16">
      <div className="mx-auto w-full max-w-7xl">
        <CatalogHeader title={title} />

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10">
          <Pagination />
        </div>
      </div>
    </section>
  );
}
