import NoteItem from '@/components/note/item'
import type { Note } from '@/models/notes'

export default function NoteList({ notes }: { notes: Array<Note> }) {
  return (
    <ul className="flex gap-3">
      {notes.map(note => <NoteItem key={note.id} note={note} />)}
    </ul>
  )
}
