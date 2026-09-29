import { Header } from "@/components/Header";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main
        className={cn(
          "flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center",
        )}
      >
        <h1 className="text-4xl font-bold tracking-tight">RiriStore</h1>
        <p className="text-neutral-500">
          Интернет-магазин украшений ручной работы
        </p>
      </main>
    </div>
  );
}
