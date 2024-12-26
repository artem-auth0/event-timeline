import { EventFilters } from '@/components/EventFilters'
import { ThemeToggle } from '@/components/theme-toggle'

import type { EventsHeaderProps } from './types'

export function EventsHeader({ itemsLeft, selectedEventType, onTypeChange }: EventsHeaderProps) {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold">Latest Events</h2>
        <p className="text-sm text-muted-foreground">
          {itemsLeft !== undefined && itemsLeft > 0
            ? `${itemsLeft} more ${itemsLeft === 1 ? 'item' : 'items'} available`
            : 'All caught up!'}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <EventFilters selectedType={selectedEventType} onTypeChange={onTypeChange} />
        <ThemeToggle />
      </div>
    </div>
  )
}
