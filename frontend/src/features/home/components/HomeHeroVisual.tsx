import { BookOpen, Headphones, Newspaper, PlayCircle } from "lucide-react";

const highlights = [
  { label: "Сабак", icon: BookOpen },
  { label: "Видео", icon: PlayCircle },
  { label: "Подкаст", icon: Headphones },
  { label: "Газета", icon: Newspaper }
];

export function HomeHeroVisual() {
  return (
    <figure className="relative overflow-hidden rounded-lg border border-border bg-white shadow-menu">
      <img
        src="/images/illustrations/hero-learning.webp"
        alt="Кыргыз тили боюнча окуу материалдары, газета, видео жана подкаст"
        className="aspect-[16/10] h-full w-full object-cover"
        width="1400"
        height="876"
      />
      <figcaption className="absolute inset-x-4 bottom-4 rounded-lg border border-white/40 bg-white/90 p-3 shadow-menu backdrop-blur">
        <div className="grid grid-cols-4 gap-2">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div className="flex min-h-12 items-center justify-center gap-1.5 rounded-md bg-brand-light px-2 text-xs font-extrabold text-brand" key={item.label}>
                <Icon aria-hidden className="h-4 w-4 shrink-0" />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </figcaption>
    </figure>
  );
}
