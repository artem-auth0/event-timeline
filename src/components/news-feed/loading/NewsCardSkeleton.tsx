import { Skeleton } from '@/components/ui/skeleton'

export function NewsCardSkeleton() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-center gap-4">
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-[120px]" />
          <Skeleton className="h-6 w-[90%]" />
        </div>
        <Skeleton className="h-24 w-24 rounded-lg" />
      </div>
      <div className="mt-4 space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[90%]" />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
        </div>
        <Skeleton className="h-6 w-24" />
      </div>
    </div>
  )
}
