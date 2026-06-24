import { cn } from "../../lib/utils/cn";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return <div className={cn("animate-pulse rounded-md bg-border/70", className)} />;
}

export function CardSkeleton() {
  return (
    <div className="rounded-lg border border-border bg-white p-4">
      <Skeleton className="aspect-[16/10] w-full" />
      <Skeleton className="mt-4 h-4 w-24" />
      <Skeleton className="mt-3 h-6 w-4/5" />
      <Skeleton className="mt-3 h-4 w-full" />
      <Skeleton className="mt-2 h-4 w-2/3" />
    </div>
  );
}
