/**
 * Временные тестовые данные каталога (Этап 2).
 * Хардкод без БД — позже будет заменено на Prisma.
 */

export type Category = {
  slug: string;
  name: string;
};

export type Product = {
  id: number;
  name: string;
  /** Цена в рублях */
  price: number;
  categorySlug: string;
};

export const CATEGORIES: Category[] = [
  { slug: "braslety", name: "Браслеты" },
  { slug: "brelki", name: "Брелки" },
  { slug: "chokery", name: "Чокеры" },
  { slug: "vyazanye-izdeliya", name: "Вязаные изделия" },
];

export const PRODUCTS: Product[] = [
  // Браслеты — 6 шт.
  { id: 1, name: "Браслет из бисера №1", price: 350, categorySlug: "braslety" },
  { id: 2, name: "Браслет из бусин «Аметист»", price: 420, categorySlug: "braslety" },
  { id: 3, name: "Браслет с подвеской «Луна»", price: 480, categorySlug: "braslety" },
  { id: 4, name: "Браслет из стекляруса №2", price: 390, categorySlug: "braslety" },
  { id: 5, name: "Браслет «Вишнёвый сад»", price: 450, categorySlug: "braslety" },
  { id: 6, name: "Браслет-жгут из бисера", price: 560, categorySlug: "braslety" },

  // Брелки — 6 шт.
  { id: 7, name: "Брелок с котиком", price: 220, categorySlug: "brelki" },
  { id: 8, name: "Брелок «Сердце»", price: 200, categorySlug: "brelki" },
  { id: 9, name: "Брелок с бисерным цветком", price: 260, categorySlug: "brelki" },
  { id: 10, name: "Брелок «Луна и звёзды»", price: 240, categorySlug: "brelki" },
  { id: 11, name: "Брелок-звезда", price: 180, categorySlug: "brelki" },
  { id: 12, name: "Брелок с жемчужной бусиной", price: 300, categorySlug: "brelki" },

  // Чокеры — 6 шт.
  { id: 13, name: "Чокер из бисера", price: 520, categorySlug: "chokery" },
  { id: 14, name: "Чокер «Кружево»", price: 640, categorySlug: "chokery" },
  { id: 15, name: "Чокер с подвеской", price: 580, categorySlug: "chokery" },
  { id: 16, name: "Чокер «Сирень»", price: 610, categorySlug: "chokery" },
  { id: 17, name: "Чокер из бусин", price: 540, categorySlug: "chokery" },
  { id: 18, name: "Чокер «Паутинка»", price: 690, categorySlug: "chokery" },

  // Вязаные изделия — 6 шт.
  { id: 19, name: "Вязаная брошь «Роза»", price: 470, categorySlug: "vyazanye-izdeliya" },
  { id: 20, name: "Вязаная игрушка «Зайка»", price: 750, categorySlug: "vyazanye-izdeliya" },
  { id: 21, name: "Вязаный браслет", price: 330, categorySlug: "vyazanye-izdeliya" },
  { id: 22, name: "Вязаная брошь «Кот»", price: 490, categorySlug: "vyazanye-izdeliya" },
  { id: 23, name: "Вязаный брелок «Мишка»", price: 280, categorySlug: "vyazanye-izdeliya" },
  { id: 24, name: "Вязаная заколка", price: 310, categorySlug: "vyazanye-izdeliya" },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((category) => category.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return PRODUCTS.filter((product) => product.categorySlug === categorySlug);
}
