import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const eventTypes = [
  { value: 'event.layoff', label: 'Layoffs' },
  { value: 'event.strike.announced', label: 'Strike Announcements' },
  { value: 'event.strike.started', label: 'Strike Started' },
  { value: 'event.strike.ended', label: 'Strike Ended' },
  { value: 'event.executive_change.hired', label: 'Executive Hired' },
  { value: 'event.executive_change.departed', label: 'Executive Departure' },
  { value: 'event.funding', label: 'Funding' },
  { value: 'event.earnings.announced', label: 'Earnings Announced' },
  { value: 'event.earnings.released', label: 'Earnings Released' },
  { value: 'event.ipo.announced', label: 'IPO Announced' },
  { value: 'event.ipo.completed', label: 'IPO Completed' },
  { value: 'event.product_launch.announced', label: 'Product Launch Announced' },
  { value: 'event.product_launch.completed', label: 'Product Launch Completed' },
  { value: 'event.product_recall', label: 'Product Recall' },
  { value: 'event.product_shutdown', label: 'Product Shutdown' },
  { value: 'event.partnership', label: 'Partnership' },
  { value: 'event.merger.announced', label: 'Merger Announced' },
  { value: 'event.merger.completed', label: 'Merger Completed' },
  { value: 'event.merger.terminated', label: 'Merger Terminated' },
  { value: 'event.acquisition.announced', label: 'Acquisition Announced' },
  { value: 'event.acquisition.completed', label: 'Acquisition Completed' },
  { value: 'event.acquisition.terminated', label: 'Acquisition Terminated' },
]

interface EventFiltersProps {
  selectedType: string | null
  onTypeChange: (type: string | null) => void
  className?: string
}

export function EventFilters({ selectedType, onTypeChange, className }: EventFiltersProps) {
  return (
    <div className={className}>
      <Select
        value={selectedType || 'all'}
        onValueChange={value => onTypeChange(value === 'all' ? null : value)}
      >
        <SelectTrigger className="w-full border-border bg-background text-foreground hover:bg-accent sm:w-[250px]">
          <SelectValue placeholder="All Event Types" />
        </SelectTrigger>
        <SelectContent className="border-border bg-background">
          <SelectGroup>
            <SelectLabel className="text-muted-foreground">Event Types</SelectLabel>
            <SelectItem
              className="text-foreground hover:bg-accent hover:text-accent-foreground"
              value="all"
            >
              All Event Types
            </SelectItem>
            {eventTypes.map(type => (
              <SelectItem
                key={type.value}
                className="text-foreground hover:bg-accent hover:text-accent-foreground"
                value={type.value}
              >
                {type.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
