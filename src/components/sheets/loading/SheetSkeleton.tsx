import { Skeleton } from '@/components/ui/skeleton'

export function SheetSkeleton() {
  return (
    <div className="h-full">
      <Skeleton className="h-48 w-full" />

      <div className="space-y-6 p-6">
        <div className="space-y-4">
          <Skeleton className="h-8 w-[80%]" />
          <div className="mt-4 flex flex-wrap gap-3">
            {[24, 32, 28].map((width, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <Skeleton className="h-4 w-4 rounded-full" />
                <Skeleton className={`h-4 w-${width}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {[100, 90, 95].map((width, i) => (
            <Skeleton key={i} className={`h-4 w-[${width}%]`} />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Skeleton className="h-5 w-5 rounded-full" />
          <Skeleton className="h-2 w-full rounded-full" />
        </div>

        <Skeleton className="h-6 w-40" />
      </div>
    </div>
  )
}
