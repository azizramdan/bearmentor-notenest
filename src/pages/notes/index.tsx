import { useState } from 'react'
import CreateNote from '@/components/note/create'
import { getAll as getNotes } from '@/models/notes'
import NoteList from '@/components/note/list'

export default function NotesPage() {
  const filters = {
    search: new URLSearchParams(window.location.search).get('q') || '',
  }

  const [notes] = useState(getNotes(filters))

  return (
    <div>
      <CreateNote />

      <div className="mt-5">
        <NoteList notes={notes} />
      </div>
    </div>
  )
}
