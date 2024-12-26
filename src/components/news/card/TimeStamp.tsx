import { format } from 'date-fns'

interface TimeStampProps {
  date: string
}

export function TimeStamp({ date }: TimeStampProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="rounded-full bg-muted px-2 py-1 text-xs text-muted-foreground">
        <time>{format(new Date(date), 'MMM d, yyyy hh:mm a')}</time>
      </span>
    </div>
  )
}
