import { useQuery } from "@tanstack/react-query";
import { ExternalLink } from "lucide-react";

import { Container } from "../components/common/Container";
import { EmptyState } from "../components/common/EmptyState";
import { ErrorState } from "../components/common/ErrorState";
import { ImageWithFallback } from "../components/common/ImageWithFallback";
import { LoadingState } from "../components/common/LoadingState";
import { PageHeader } from "../components/common/PageHeader";
import { Seo } from "../components/common/Seo";
import { getPartners, partnerKeys } from "../lib/api/partners.api";

export default function PartnersPage() {
  const queryParams = { page_size: 100, ordering: "ordering" };
  const query = useQuery({
    queryKey: partnerKeys.list(queryParams),
    queryFn: () => getPartners(queryParams)
  });

  return (
    <>
      <Seo title="Өнөктөштөр" description="KYRGYZTIL.KG өнөктөштөрү." canonicalPath="/partners" />
      <PageHeader
        title="Өнөктөштөр"
        description="Порталдын өнөктөштүк байланыштары жана уюмдары."
        breadcrumbs={[{ label: "Өнөктөштөр" }]}
      />
      <Container className="py-10">
        {query.isLoading ? <LoadingState /> : null}
        {query.isError ? <ErrorState onRetry={() => void query.refetch()} /> : null}
        {query.data && query.data.results.length === 0 ? <EmptyState title="Өнөктөштөр азырынча жок." /> : null}
        {query.data && query.data.results.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {query.data.results.map((partner) => (
              <article className="rounded-lg border border-border bg-white p-5" key={partner.id}>
                <div className="flex min-h-28 items-center justify-center rounded-md border border-border bg-surface-muted p-4">
                  <ImageWithFallback
                    src={partner.logo}
                    alt={partner.name}
                    fallbackLabel={partner.name}
                    className="h-20 w-full bg-white"
                    imageClassName="object-contain"
                  />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-ink">{partner.name}</h2>
                {partner.description ? <p className="mt-3 text-sm leading-6 text-ink-soft">{partner.description}</p> : null}
                {partner.website_url ? (
                  <a
                    className="focus-ring mt-5 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-brand hover:text-brand-hover"
                    href={partner.website_url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Сайтка өтүү
                    <ExternalLink aria-hidden className="h-4 w-4" />
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        ) : null}
      </Container>
    </>
  );
}
