import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link className="focus-ring flex min-h-12 shrink-0 items-center gap-2.5 rounded-md" to="/">
      <img
        src="/images/brand/kyrgyztil-logo.png"
        alt="Кыргыз тили"
        className="h-11 w-11 shrink-0 object-contain"
        width="44"
        height="44"
      />
      <span className="leading-tight">
        <span className="block text-[15px] font-extrabold text-ink">Кыргыз тили</span>
        <span className="block text-[11px] font-bold uppercase text-brand">KYRGYZTIL.KG</span>
      </span>
    </Link>
  );
}
