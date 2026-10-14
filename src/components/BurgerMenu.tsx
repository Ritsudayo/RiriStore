"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { IconPlaceholder } from "@/components/IconPlaceholder";
import { CATEGORIES } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

/**
 * Бургер-меню слева: кнопка-квадрат и выезжающая слева панель
 * со списком категорий.
 */
export function BurgerMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Меню категорий"
        aria-expanded={open}
        title="Меню категорий"
        className="rounded-lg transition hover:bg-neutral-100"
      >
        <IconPlaceholder />
      </button>

      {/* Затемнение фона под панелью */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 z-40 bg-neutral-900/30 transition-opacity duration-300",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      {/* Выезжающая панель */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Категории"
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-72 max-w-[80%] flex-col border-r border-neutral-200 bg-white shadow-xl transition-transform duration-300",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-4">
          <span className="text-lg font-semibold text-neutral-900">
            Категории
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Закрыть меню"
            title="Закрыть меню"
            className="rounded-lg transition hover:bg-neutral-100"
          >
            <IconPlaceholder />
          </button>
        </div>

        <nav className="flex flex-col gap-1 p-4">
          <Link
            href="/catalog"
            onClick={() => setOpen(false)}
            className="rounded-lg px-3 py-2 text-base font-medium text-neutral-900 transition hover:bg-neutral-100"
          >
            Все товары
          </Link>
          {CATEGORIES.map((category) => (
            <Link
              key={category.slug}
              href={`/catalog/${category.slug}`}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-base text-neutral-700 transition hover:bg-neutral-100"
            >
              {category.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
