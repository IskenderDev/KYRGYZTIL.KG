import { useQuery } from "@tanstack/react-query";

import { Container } from "../components/common/Container";
import { ErrorState } from "../components/common/ErrorState";
import { LoadingState } from "../components/common/LoadingState";
import { PageHeader } from "../components/common/PageHeader";
import { Seo } from "../components/common/Seo";
import { ContactForm } from "../components/forms/ContactForm";
import { RichTextRenderer } from "../components/media/RichTextRenderer";
import { getStaticPage, pageKeys } from "../lib/api/pages.api";

export default function ContactPage() {
  const page = useQuery({
    queryKey: pageKeys.detail("contact"),
    queryFn: async () => getStaticPage("contact"),
    retry: false,
  });

  return (
    <>
      <Seo
        title="Байланыш"
        description="KYRGYZTIL.KG байланыш формасы."
        canonicalPath="/contact"
      />
      <PageHeader
        title={page.data?.title || "Байланыш"}
        description={
          page.data?.meta_description || "Суроо, сунуш же кайрылуу жөнөтүү."
        }
        breadcrumbs={[{ label: "Байланыш" }]}
      />

      <Container className="py-10">
        {page.isLoading ? <LoadingState /> : null}
        {page.isError ? (
          <ErrorState onRetry={() => void page.refetch()} />
        ) : null}
        {page.data ? (
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <aside className="rounded-lg border border-border bg-white p-5">
              <RichTextRenderer
                content={page.data.content}
                className="rich-text text-base leading-7"
              />
            </aside>
            <section className="rounded-lg border border-border bg-white p-5 sm:p-6">
              <h2 className="mb-5 text-2xl font-bold text-ink">
                Кайрылуу жөнөтүү
              </h2>
              <ContactForm />
            </section>
          </div>
        ) : null}
      </Container>
    </>
  );
}
