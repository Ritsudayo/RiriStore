/**
 * Фильтр по цене: поля «от» и «до» + кнопка «Применить».
 * Пока только UI — реальной фильтрации нет.
 */
export function PriceFilter() {
  return (
    <div className="flex items-end gap-2">
      <label className="flex flex-col gap-1 text-sm text-neutral-600">
        <span>от</span>
        <input
          type="number"
          inputMode="numeric"
          min={0}
          aria-label="Цена от"
          className="w-20 rounded-lg border border-neutral-200 bg-white px-2 py-1.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm text-neutral-600">
        <span>до</span>
        <input
          type="number"
          inputMode="numeric"
          min={0}
          aria-label="Цена до"
          className="w-20 rounded-lg border border-neutral-200 bg-white px-2 py-1.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none"
        />
      </label>
      <button
        type="button"
        className="rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
      >
        Применить
      </button>
    </div>
  );
}
