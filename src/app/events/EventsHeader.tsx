import { EventFilters } from '@/components/EventFilters'
import { ThemeToggle } from '@/components/theme-toggle'

import type { EventsHeaderProps } from './types'

export function EventsHeader({ itemsLeft, selectedEventType, onTypeChange }: EventsHeaderProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold">Latest Events</h2>
        <p className="text-sm text-muted-foreground">
          {itemsLeft !== undefined && itemsLeft > 0
            ? `${itemsLeft} more ${itemsLeft === 1 ? 'item' : 'items'} available`
            : 'All caught up!'}
        </p>
      </div>
      <div className="flex w-full flex-row items-center justify-between gap-2 sm:w-auto">
        <EventFilters
          className="flex-1 sm:flex-initial"
          selectedType={selectedEventType}
          onTypeChange={onTypeChange}
        />
        <ThemeToggle />
      </div>
    </div>
  )
}
