export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export const mainNavigation: NavigationItem[] = [
  { label: "Башкы бет", href: "/" },
  { label: "Кыргыз тили гезити", href: "/newspapers" },
  { label: "Окуу борбору", href: "/learn" },
  {
    label: "Медиа",
    href: "/media",
    children: [
      { label: "Подкаст", href: "/podcasts" },
      { label: "Сурамжылоо / Видео", href: "/videos" }
    ]
  },
  { label: "Жаңылыктар", href: "/news" },
  { label: "Тил саясаты", href: "/language-policy" },
  { label: "Өнөктөштөр", href: "/partners" },
  { label: "Биз жөнүндө", href: "/about" },
  { label: "Байланыш", href: "/contact" }
];

export const desktopNavigation: NavigationItem[] = [
  { label: "Башкы бет", href: "/" },
  { label: "Окуу борбору", href: "/learn" },
  { label: "Жаңылыктар", href: "/news" },
  { label: "Кыргыз тили гезити", href: "/newspapers" },
  {
    label: "Медиа",
    href: "/media",
    children: [
      { label: "Подкаст", href: "/podcasts" },
      { label: "Сурамжылоо / Видео", href: "/videos" }
    ]
  },
  { label: "Байланыш", href: "/contact" }
];

export const desktopMoreNavigation: NavigationItem[] = [
  { label: "Тил саясаты", href: "/language-policy" },
  { label: "Өнөктөштөр", href: "/partners" },
  { label: "Биз жөнүндө", href: "/about" }
];

export const footerPrimaryLinks = [
  { label: "Жаңылыктар", href: "/news" },
  { label: "Окуу борбору", href: "/learn" },
  { label: "Кыргыз тили гезити", href: "/newspapers" },
  { label: "Медиа", href: "/media" }
];

export const footerInfoLinks = [
  { label: "Тил саясаты", href: "/language-policy" },
  { label: "Өнөктөштөр", href: "/partners" },
  { label: "Биз жөнүндө", href: "/about" },
  { label: "Байланыш", href: "/contact" }
];
