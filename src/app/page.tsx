'use client'

import { useState } from 'react'

import { EventsContainer } from './events/EventsContainer'
import { EventsHeader } from './events/EventsHeader'

export default function Home() {
  const [selectedEventType, setSelectedEventType] = useState<string | null>(null)

  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="container mx-auto px-4 py-4 md:p-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-center">
          <div className="lg:w-[1200px]">
            <EventsContainer selectedEventType={selectedEventType}>
              {itemsLeft => (
                <EventsHeader
                  itemsLeft={itemsLeft}
                  selectedEventType={selectedEventType}
                  onTypeChange={setSelectedEventType}
                />
              )}
            </EventsContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
