import { Container } from "./Container";
import { Breadcrumbs } from "./Breadcrumbs";

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
  eyebrow?: string;
}

export function PageHeader({ title, description, breadcrumbs, eyebrow }: PageHeaderProps) {
  return (
    <header className="border-b border-border bg-white py-8 sm:py-10">
      <Container className="grid gap-6 lg:grid-cols-[1fr_300px] lg:items-center">
        <div>
          {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
          {eyebrow ? <p className="mb-3 text-sm font-extrabold uppercase text-brand">{eyebrow}</p> : null}
          <h1 className="max-w-4xl text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description ? <p className="mt-4 max-w-3xl text-lg leading-8 text-ink-soft">{description}</p> : null}
        </div>
        <div className="brand-radial learning-pattern hidden min-h-44 overflow-hidden rounded-lg border border-border p-4 lg:block">
          <div className="flex h-full items-center justify-between gap-4">
            <div>
              <p className="text-sm font-extrabold text-brand">KYRGYZTIL.KG</p>
              <p className="mt-2 text-2xl font-extrabold leading-tight text-ink">Окуу жана маалымат</p>
            </div>
            <img
              src="/images/brand/kyrgyztil-logo.png"
              alt=""
              className="h-28 w-28 shrink-0 object-contain"
              width="112"
              height="112"
            />
          </div>
        </div>
      </Container>
    </header>
  );
}
