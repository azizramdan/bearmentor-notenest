export interface Priority {
  id: number
  label: string
}

export const priorities: Priority[] = [
  { id: 1, label: 'High Priority' },
  { id: 2, label: 'Medium Priority' },
  { id: 3, label: 'Low Priority' },
]

export function getById(id: number) {
  return priorities.find(priority => priority.id === id)?.label
}
