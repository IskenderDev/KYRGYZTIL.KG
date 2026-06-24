import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { IconButton } from "../common/IconButton";
import { ButtonLink } from "../common/Button";
import { Container } from "../common/Container";
import { Logo } from "./Logo";
import { desktopMoreNavigation, desktopNavigation, mainNavigation } from "../../lib/constants/navigation";
import { cn } from "../../lib/utils/cn";

function navLinkClass(isActive: boolean) {
  return cn(
    "focus-ring relative inline-flex min-h-11 items-center whitespace-nowrap rounded-md px-2.5 text-sm font-extrabold transition-colors after:absolute after:inset-x-2 after:bottom-0 after:h-0.5 after:rounded-full after:content-['']",
    isActive
      ? "text-brand after:bg-accent-red"
      : "text-ink-soft after:bg-transparent hover:bg-brand-light hover:text-brand"
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isMoreActive = desktopMoreNavigation.some((item) => location.pathname === item.href);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/94 backdrop-blur">
      <Container>
        <div className="flex min-h-[72px] items-center justify-between gap-4">
          <Logo />
          <nav aria-label="Main navigation" className="hidden min-w-0 flex-1 items-center justify-center gap-1 xl:flex">
            {desktopNavigation.map((item) =>
              item.children ? (
                <div className="group relative" key={item.href}>
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      cn(navLinkClass(isActive), "gap-1 pr-2")
                    }
                  >
                    {item.label}
                    <ChevronDown aria-hidden className="h-4 w-4" />
                  </NavLink>
                  <div className="invisible absolute right-0 top-full w-56 translate-y-2 rounded-lg border border-border bg-white p-2 opacity-0 shadow-menu transition group-hover:visible group-hover:translate-y-1 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-1 group-focus-within:opacity-100">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.href}
                        to={child.href}
                        className={({ isActive }) =>
                          cn(
                            "focus-ring block rounded-md px-3 py-2 text-sm font-semibold transition-colors",
                            isActive ? "bg-brand-light text-brand" : "text-ink-soft hover:bg-surface-muted hover:text-ink"
                          )
                        }
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) => navLinkClass(isActive)}
                  end={item.href === "/"}
                >
                  {item.label}
                </NavLink>
              )
            )}
            <div className="group relative">
              <button className={cn(navLinkClass(isMoreActive), "gap-1 pr-2")} type="button">
                Дагы
                <ChevronDown aria-hidden className="h-4 w-4" />
              </button>
              <div className="invisible absolute right-0 top-full w-56 translate-y-2 rounded-lg border border-border bg-white p-2 opacity-0 shadow-menu transition group-hover:visible group-hover:translate-y-1 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-1 group-focus-within:opacity-100">
                {desktopMoreNavigation.map((item) => (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    className={({ isActive }) =>
                      cn(
                        "focus-ring block rounded-md px-3 py-2 text-sm font-semibold transition-colors",
                        isActive ? "bg-brand-light text-brand" : "text-ink-soft hover:bg-surface-muted hover:text-ink"
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </nav>
          <div className="hidden items-center gap-2 lg:flex xl:hidden">
            <ButtonLink to="/learn" size="sm" className="whitespace-nowrap">
              Окууну баштоо
            </ButtonLink>
          </div>
          <div className="hidden items-center gap-2 xl:flex">
            <ButtonLink to="/learn" size="sm" className="whitespace-nowrap">
              Окууну баштоо
            </ButtonLink>
          </div>
          <IconButton
            className="xl:hidden"
            label={isOpen ? "Менюну жабуу" : "Менюну ачуу"}
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
          </IconButton>
        </div>
      </Container>
      {isOpen ? (
        <div className="fixed inset-x-0 top-[72px] z-50 max-h-[calc(100vh-72px)] overflow-y-auto border-b border-border bg-white shadow-menu xl:hidden">
          <Container className="py-5">
            <nav aria-label="Mobile navigation" className="grid gap-2 sm:grid-cols-2">
              {mainNavigation.map((item) => (
                <div className="rounded-lg border border-border bg-surface-muted/60 p-1" key={item.href}>
                  <Link
                    className="focus-ring flex min-h-12 items-center rounded-md px-3 text-base font-bold text-ink hover:bg-white"
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children ? (
                    <div className="ml-3 border-l border-border pl-2">
                      {item.children.map((child) => (
                        <Link
                          className="focus-ring flex min-h-10 items-center rounded-md px-3 text-sm font-semibold text-ink-soft hover:bg-surface-muted hover:text-ink"
                          key={child.href}
                          to={child.href}
                          onClick={() => setIsOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
