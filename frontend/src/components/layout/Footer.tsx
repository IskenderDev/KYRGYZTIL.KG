import { Link } from "react-router-dom";

import { Container } from "../common/Container";
import { footerInfoLinks, footerPrimaryLinks } from "../../lib/constants/navigation";

function FooterColumn({ title, links }: { title: string; links: Array<{ label: string; href: string }> }) {
  return (
    <div>
      <h2 className="text-sm font-semibold uppercase text-white/70">{title}</h2>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link className="focus-ring rounded-sm text-sm text-white hover:text-brand-light" to={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-deep text-white">
      <div className="ornament-line h-2 opacity-70" aria-hidden />
      <Container className="py-10 sm:py-12">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr_0.7fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src="/images/brand/kyrgyztil-logo.png" alt="Кыргыз тили" className="h-12 w-12 object-contain" width="48" height="48" />
              <div>
                <p className="font-bold">Кыргыз тили</p>
                <p className="text-xs uppercase text-white/65">KYRGYZTIL.KG</p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/72">
              Кыргыз тили боюнча жаңылыктарды, билим берүү материалдарын, медиа жана расмий баракчаларды бириктирген маалыматтык портал.
            </p>
          </div>
          <FooterColumn title="Бөлүмдөр" links={footerPrimaryLinks} />
          <FooterColumn title="Маалымат" links={footerInfoLinks} />
          <div>
            <h2 className="text-sm font-semibold uppercase text-white/70">Байланыш</h2>
            <p className="mt-4 text-sm leading-7 text-white/72">
              Расмий байланыш маалыматтары жарыяланганда бул жерде көрсөтүлөт.
            </p>
            <Link className="focus-ring mt-4 inline-flex rounded-sm text-sm font-semibold text-brand-light hover:text-white" to="/contact">
              Байланыш формасы
            </Link>
          </div>
        </div>
        <div className="mt-10 border-t border-white/15 pt-5 text-sm text-white/60">
          © {new Date().getFullYear()} KYRGYZTIL.KG
        </div>
      </Container>
    </footer>
  );
}
