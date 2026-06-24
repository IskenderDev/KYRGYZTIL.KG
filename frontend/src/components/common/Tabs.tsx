import { cn } from "../../lib/utils/cn";

interface TabItem<T extends string> {
  label: string;
  value: T;
}

interface TabsProps<T extends string> {
  items: readonly TabItem<T>[];
  value: T;
  onChange: (value: T) => void;
  label: string;
}

export function Tabs<T extends string>({ items, value, onChange, label }: TabsProps<T>) {
  return (
    <div aria-label={label} className="flex gap-2 overflow-x-auto pb-1" role="tablist">
      {items.map((item) => (
        <button
          key={item.value}
          type="button"
          role="tab"
          aria-selected={value === item.value}
          onClick={() => onChange(item.value)}
          className={cn(
            "focus-ring min-h-11 shrink-0 rounded-md border px-4 text-sm font-semibold transition-colors",
            value === item.value
              ? "border-brand bg-brand text-white"
              : "border-border bg-white text-ink-soft hover:border-brand hover:text-brand"
          )}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
