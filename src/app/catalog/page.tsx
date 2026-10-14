import type { Metadata } from "next";
import { CatalogView } from "@/components/CatalogView";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PRODUCTS } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Каталог — RiriStore",
  description: "Каталог украшений ручной работы RiriStore",
};

export default function CatalogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <CatalogView title="Каталог" products={PRODUCTS} />
      </main>
      <Footer />
    </div>
  );
}
