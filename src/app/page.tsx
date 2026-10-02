import { AboutShop } from "@/components/AboutShop";
import { Announcements } from "@/components/Announcements";
import { CategoryGrid } from "@/components/CategoryGrid";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroBanner } from "@/components/HeroBanner";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <HeroBanner />
        <AboutShop />
        <CategoryGrid />
        <Announcements />
      </main>
      <Footer />
    </div>
  );
}