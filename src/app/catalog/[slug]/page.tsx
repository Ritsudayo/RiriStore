import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CatalogView } from "@/components/CatalogView";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getCategoryBySlug, getProductsByCategory } from "@/lib/mock-data";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  return {
    title: category ? `${category.name} — RiriStore` : "Категория — RiriStore",
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(category.slug);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <CatalogView title={category.name} products={products} />
      </main>
      <Footer />
    </div>
  );
}
