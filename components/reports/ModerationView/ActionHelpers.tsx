import { MOD_EVENTS } from '@/mod-event/constants'

export const actionOptions = {
  [MOD_EVENTS.ACKNOWLEDGE]: 'Acknowledge',
  [MOD_EVENTS.ESCALATE]: 'Escalate',
  [MOD_EVENTS.TAKEDOWN]: 'Takedown',
}

const actionTextClassNames = {
  [MOD_EVENTS.TAKEDOWN]: 'text-rose-600 hover:text-rose-700',
  [MOD_EVENTS.ESCALATE]: 'text-orange-600 hover:text-orange-700',
  default: 'text-indigo-600 hover:text-indigo-900',
}

const actionBorderClassNames = {
  [MOD_EVENTS.TAKEDOWN]: 'border-rose-600 hover:border-rose-700',
  [MOD_EVENTS.ESCALATE]: 'border-orange-600 hover:border-orange-700',
  default: 'border-indigo-600 hover:border-indigo-900',
}

const actionClassNames = {
  text: actionTextClassNames,
  border: actionBorderClassNames,
}

export const getActionClassNames = ({
  action,
  prop = 'text',
}: {
  action?: string
  prop?: 'text' | 'border'
}): string => {
  const classContainer = actionClassNames[prop]
  if (!classContainer) return ''

  const defaultClassNames = classContainer.default
  if (!action) return defaultClassNames
  return classContainer[action] || defaultClassNames
}
