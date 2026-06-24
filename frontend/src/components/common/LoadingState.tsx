import { Container } from "./Container";
import { CardSkeleton, Skeleton } from "./Skeleton";

interface LoadingStateProps {
  variant?: "page" | "grid" | "article";
}

export function LoadingState({ variant = "grid" }: LoadingStateProps) {
  if (variant === "article") {
    return (
      <Container className="py-10">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="mt-6 h-12 max-w-3xl" />
        <Skeleton className="mt-8 aspect-[16/8] max-w-5xl" />
        <Skeleton className="mt-8 h-5 max-w-3xl" />
        <Skeleton className="mt-3 h-5 max-w-2xl" />
        <Skeleton className="mt-3 h-5 max-w-3xl" />
      </Container>
    );
  }

  return (
    <Container className="py-10">
      <Skeleton className="mb-8 h-10 max-w-md" />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: variant === "page" ? 6 : 3 }).map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
    </Container>
  );
}
