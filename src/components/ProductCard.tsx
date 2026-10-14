import type { Product } from "@/lib/mock-data";

type ProductCardProps = {
  product: Product;
};

/**
 * Карточка товара: серый квадрат-заглушка вместо фото,
 * под ним название, под названием — цена.
 */
export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex flex-col">
      <div
        aria-hidden="true"
        className="aspect-square w-full rounded-xl bg-neutral-200"
      />
      <h3 className="mt-3 text-base font-medium text-neutral-900">
        {product.name}
      </h3>
      <p className="mt-1 text-base text-neutral-600">{product.price} ₽</p>
    </article>
  );
}
