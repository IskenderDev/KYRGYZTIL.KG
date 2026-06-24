import { ButtonLink } from "../components/common/Button";
import { Container } from "../components/common/Container";
import { Seo } from "../components/common/Seo";

export default function NotFoundPage() {
  return (
    <>
      <Seo title="404" description="Баракча табылган жок." canonicalPath="/404" />
      <Container className="py-16">
        <div className="mx-auto max-w-2xl border-l-4 border-brand pl-6">
          <p className="text-sm font-semibold uppercase text-brand">404</p>
          <h1 className="mt-3 text-4xl font-bold text-ink">Баракча табылган жок</h1>
          <p className="mt-4 text-lg leading-8 text-ink-soft">
            Шилтеме өзгөргөн же материал азырынча жарыялана элек болушу мүмкүн.
          </p>
          <ButtonLink className="mt-6" to="/">
            Башкы бетке кайтуу
          </ButtonLink>
        </div>
      </Container>
    </>
  );
}
