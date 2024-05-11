import type { Priority } from './priorities'

const STORAGE_KEY = 'notes'

export interface Note {
  id: number
  title: string
  content: string
  pinned: boolean
  reminderDate: Date | null
  priority: Priority['id'] | null
}

interface Filters {
  search?: string
}

function set(notes: Array<Note>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes))
}

function get(): Array<Note> {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
}

export function getAll(filters: Filters = {}) {
  const notes = get()

  return notes.filter((note) => {
    if (filters.search) {
      const search = filters.search.toLocaleLowerCase()

      return note.title.toLocaleLowerCase().includes(search) || note.content.toLocaleLowerCase().includes(search)
    }

    return true
  })
}

export function create(data: Omit<Note, 'id'>) {
  const notes = get()
  const newNote: Note = {
    ...data,
    id: Date.now(),
  }

  notes.push(newNote)

  set(notes)
}

export function update(id: number, data: Partial<Note>) {
  const notes = get()
  const updatedNotes = notes.map((note) => {
    if (note.id === id) {
      return {
        ...note,
        ...data,
      }
    }
    return note
  })

  set(updatedNotes)
}

export function remove(id: number) {
  const notes = get()
  const updatedNotes = notes.filter(note => note.id !== id)

  set(updatedNotes)
}
