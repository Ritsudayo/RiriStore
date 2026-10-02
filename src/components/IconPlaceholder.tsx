import { cn } from "@/lib/utils";

type IconPlaceholderProps = {
  className?: string;
};

/**
 * Простая заглушка вместо иконки: белый квадрат 24x24px (h-6 w-6)
 * внутри светлой кнопки-контейнера. Без SVG и библиотек иконок.
 */
export function IconPlaceholder({ className }: IconPlaceholderProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-100",
        className,
      )}
    >
      <span className="block h-6 w-6 bg-white" />
    </span>
  );
}