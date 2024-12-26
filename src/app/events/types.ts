export interface EventsHeaderProps {
  itemsLeft?: number
  selectedEventType: string | null
  onTypeChange: (type: string | null) => void
}
