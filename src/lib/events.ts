import { Event } from '@/services/api'

type EventIcon =
  | '🚫'
  | '⚠️'
  | '✊'
  | '🤝'
  | '👤'
  | '🚪'
  | '💰'
  | '📢'
  | '💹'
  | '📈'
  | '🎉'
  | '🆕'
  | '🚀'
  | '🔌'
  | '🤝'
  | '🔀'
  | '❌'
  | '💼'
  | '✅'

interface EventTypeConfig {
  icon: EventIcon
  label: string
  color: string
  formatTitle: (event: Event) => string
  formatSummary: (event: Event) => string
}

export const eventTypes: Record<string, EventTypeConfig> = {
  'event.layoff': {
    icon: '🚫',
    label: 'Layoff',
    color: 'rose',
    formatTitle: event => {
      const company = event.companies[0]?.name
      return `${company} announces layoffs`
    },
    formatSummary: event => {
      const company = event.companies[0]?.name
      const date = event.metadata.announcement_date
        ? new Date(event.metadata.announcement_date).toLocaleDateString()
        : ''

      let summary = `${company} announced`

      if (date) {
        summary += ` on ${date}`
      }

      if (event.metadata.headcount) {
        summary += ` layoffs affecting ${event.metadata.headcount} employees`
      } else if (event.metadata.reported_percentage) {
        summary += ` layoffs affecting ${event.metadata.reported_percentage}% of their workforce`
      } else {
        summary += ' layoffs'
      }

      if (event.metadata.locations?.length) {
        summary += ` in ${event.metadata.locations.join(', ')}`
      }

      return summary + '.'
    },
  },
  'event.strike.announced': {
    icon: '⚠️',
    label: 'Strike Announced',
    color: 'yellow',
    formatTitle: event => `Strike announced at ${event.companies[0]?.name}`,
    formatSummary: event =>
      `Workers at ${event.companies[0]?.name} announced an upcoming strike${
        event.metadata.locations ? ` in ${event.metadata.locations.join(', ')}` : ''
      }.`,
  },
  'event.strike.started': {
    icon: '✊',
    label: 'Strike Started',
    color: 'orange',
    formatTitle: event => `Strike begins at ${event.companies[0]?.name}`,
    formatSummary: event =>
      `A strike has begun at ${event.companies[0]?.name}${
        event.metadata.locations ? ` in ${event.metadata.locations.join(', ')}` : ''
      }.`,
  },
  'event.strike.ended': {
    icon: '🤝',
    label: 'Strike Ended',
    color: 'green',
    formatTitle: event => `Strike ends at ${event.companies[0]?.name}`,
    formatSummary: event =>
      `The strike at ${event.companies[0]?.name} has ended${
        event.metadata.locations ? ` in ${event.metadata.locations.join(', ')}` : ''
      }.`,
  },
  'event.executive_change.hired': {
    icon: '👤',
    label: 'Executive Hired',
    color: 'blue',
    formatTitle: event => `${event.companies[0]?.name} hires new executive`,
    formatSummary: event =>
      `${event.companies[0]?.name} has hired ${event.metadata.name || 'a new executive'}${
        event.metadata.reason ? ` as ${event.metadata.reason}` : ''
      }.`,
  },
  'event.executive_change.departed': {
    icon: '🚪',
    label: 'Executive Departure',
    color: 'gray',
    formatTitle: event => `Executive departs ${event.companies[0]?.name}`,
    formatSummary: event =>
      `${event.metadata.name || 'An executive'} has departed from ${event.companies[0]?.name}${
        event.metadata.reason ? ` (${event.metadata.reason})` : ''
      }.`,
  },
  'event.funding': {
    icon: '💰',
    label: 'Funding',
    color: 'emerald',
    formatTitle: event => `${event.companies[0]?.name} raises funding`,
    formatSummary: event =>
      `${event.companies[0]?.name} has raised funding${
        event.metadata.reason ? ` (${event.metadata.reason})` : ''
      }.`,
  },
  'event.earnings.announced': {
    icon: '📢',
    label: 'Earnings Announced',
    color: 'blue',
    formatTitle: event => `${event.companies[0]?.name} announces earnings date`,
    formatSummary: event =>
      `${event.companies[0]?.name} has announced their earnings release date${
        event.metadata.announcement_date
          ? ` for ${new Date(event.metadata.announcement_date).toLocaleDateString()}`
          : ''
      }.`,
  },
  'event.earnings.released': {
    icon: '💹',
    label: 'Earnings Released',
    color: 'blue',
    formatTitle: event => `${event.companies[0]?.name} releases earnings`,
    formatSummary: event =>
      `${event.companies[0]?.name} has released their earnings report${
        event.metadata.reason ? ` (${event.metadata.reason})` : ''
      }.`,
  },
  'event.ipo.announced': {
    icon: '📈',
    label: 'IPO Announced',
    color: 'violet',
    formatTitle: event => `${event.companies[0]?.name} announces IPO plans`,
    formatSummary: event =>
      `${event.companies[0]?.name} has announced plans to go public${
        event.metadata.reason ? ` (${event.metadata.reason})` : ''
      }.`,
  },
  'event.ipo.completed': {
    icon: '🎉',
    label: 'IPO Completed',
    color: 'violet',
    formatTitle: event => `${event.companies[0]?.name} completes IPO`,
    formatSummary: event =>
      `${event.companies[0]?.name} has completed their initial public offering${
        event.metadata.reason ? ` (${event.metadata.reason})` : ''
      }.`,
  },
  'event.product_launch.announced': {
    icon: '🆕',
    label: 'Product Launch Announced',
    color: 'emerald',
    formatTitle: event =>
      `${event.companies[0]?.name} announces ${event.metadata.name || 'new product'}`,
    formatSummary: event =>
      `${event.companies[0]?.name} has announced ${event.metadata.name || 'a new product'}${
        event.metadata.reason ? `: ${event.metadata.reason}` : ''
      }.`,
  },
  'event.product_launch.completed': {
    icon: '🚀',
    label: 'Product Launch Completed',
    color: 'emerald',
    formatTitle: event =>
      `${event.companies[0]?.name} launches ${event.metadata.name || 'new product'}`,
    formatSummary: event =>
      `${event.companies[0]?.name} has launched ${event.metadata.name || 'a new product'}${
        event.metadata.reason ? `: ${event.metadata.reason}` : ''
      }.`,
  },
  'event.product_recall': {
    icon: '⚠️',
    label: 'Product Recall',
    color: 'red',
    formatTitle: event => `${event.companies[0]?.name} recalls ${event.metadata.name || 'product'}`,
    formatSummary: event =>
      `${event.companies[0]?.name} has issued a recall for ${event.metadata.name || 'a product'}${
        event.metadata.reason ? `: ${event.metadata.reason}` : ''
      }.`,
  },
  'event.product_shutdown': {
    icon: '🔌',
    label: 'Product Shutdown',
    color: 'gray',
    formatTitle: event =>
      `${event.companies[0]?.name} discontinues ${event.metadata.name || 'product'}`,
    formatSummary: event =>
      `${event.companies[0]?.name} has discontinued ${event.metadata.name || 'a product'}${
        event.metadata.reason ? `: ${event.metadata.reason}` : ''
      }.`,
  },
  'event.partnership': {
    icon: '🤝',
    label: 'Partnership',
    color: 'blue',
    formatTitle: event => `${event.companies.map(c => c.name).join(' and ')} announce partnership`,
    formatSummary: event =>
      `${event.companies.map(c => c.name).join(' and ')} have announced a partnership${
        event.metadata.reason ? `: ${event.metadata.reason}` : ''
      }.`,
  },
  'event.merger.announced': {
    icon: '🔀',
    label: 'Merger Announced',
    color: 'purple',
    formatTitle: event => `${event.companies.map(c => c.name).join(' and ')} announce merger`,
    formatSummary: event =>
      `${event.companies.map(c => c.name).join(' and ')} have announced plans to merge${
        event.metadata.reason ? `: ${event.metadata.reason}` : ''
      }.`,
  },
  'event.merger.completed': {
    icon: '✅',
    label: 'Merger Completed',
    color: 'purple',
    formatTitle: event => `${event.companies.map(c => c.name).join(' and ')} complete merger`,
    formatSummary: event =>
      `${event.companies.map(c => c.name).join(' and ')} have completed their merger${
        event.metadata.reason ? `: ${event.metadata.reason}` : ''
      }.`,
  },
  'event.merger.terminated': {
    icon: '❌',
    label: 'Merger Terminated',
    color: 'red',
    formatTitle: event => `${event.companies.map(c => c.name).join(' and ')} terminate merger`,
    formatSummary: event =>
      `${event.companies.map(c => c.name).join(' and ')} have terminated their merger plans${
        event.metadata.reason ? `: ${event.metadata.reason}` : ''
      }.`,
  },
  'event.acquisition.announced': {
    icon: '💼',
    label: 'Acquisition Announced',
    color: 'indigo',
    formatTitle: event => `${event.companies[0]?.name} to acquire ${event.companies[1]?.name}`,
    formatSummary: event =>
      `${event.companies[0]?.name} has announced plans to acquire ${event.companies[1]?.name}${
        event.metadata.reason ? `: ${event.metadata.reason}` : ''
      }.`,
  },
  'event.acquisition.completed': {
    icon: '✅',
    label: 'Acquisition Completed',
    color: 'indigo',
    formatTitle: event =>
      `${event.companies[0]?.name} completes acquisition of ${event.companies[1]?.name}`,
    formatSummary: event =>
      `${event.companies[0]?.name} has completed the acquisition of ${event.companies[1]?.name}${
        event.metadata.reason ? `: ${event.metadata.reason}` : ''
      }.`,
  },
  'event.acquisition.terminated': {
    icon: '❌',
    label: 'Acquisition Terminated',
    color: 'red',
    formatTitle: event =>
      `${event.companies[0]?.name} terminates acquisition of ${event.companies[1]?.name}`,
    formatSummary: event =>
      `${event.companies[0]?.name} has terminated the planned acquisition of ${event.companies[1]?.name}${
        event.metadata.reason ? `: ${event.metadata.reason}` : ''
      }.`,
  },
}

export function getEventConfig(eventType: string): EventTypeConfig {
  return (
    eventTypes[eventType] || {
      icon: '📢',
      label: 'News',
      color: 'blue',
      formatTitle: event => event?.metadata?.name || 'Company News',
      formatSummary: event => event?.metadata?.reason || 'No details available.',
    }
  )
}

export function formatEventType(type: string): string {
  return type
    .replace('event.', '')
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export function getSentimentFromEventType(type: string): 'positive' | 'negative' | 'neutral' {
  const positiveEvents = ['product_launch', 'partnership', 'funding', 'executive_change.hired']
  const negativeEvents = [
    'layoff',
    'strike',
    'product_recall',
    'product_shutdown',
    'executive_change.departure',
  ]

  const eventBase = type.replace('event.', '').split('.')[0]

  if (positiveEvents.includes(eventBase)) return 'positive'
  if (negativeEvents.includes(eventBase)) return 'negative'
  return 'neutral'
}

export function getAvailableEventTypes() {
  return Object.entries(eventTypes).map(([type, config]) => ({
    type,
    label: config.label,
    icon: config.icon,
  }))
}
