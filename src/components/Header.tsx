export function Header() {
  return (
    <header className="border-b border-neutral-200">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <span className="text-lg font-semibold">RiriStore</span>
        <nav className="flex gap-6 text-sm text-neutral-600">
          <a href="/catalog">Каталог</a>
          <a href="/about">О нас</a>
          <a href="/cart">Корзина</a>
        </nav>
      </div>
    </header>
  );
}
