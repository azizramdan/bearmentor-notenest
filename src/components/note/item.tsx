import type { Note } from '@/models/notes'
import { getById } from '@/models/priorities'

export default function NoteItem({ note }: { note: Note }) {
  return (
    <li className="p-5 border rounded-lg">
      <h2 className="font-bold">{note.title}</h2>
      <p>{note.content}</p>

      {note.priority && <span>{getById(note.priority)}</span>}
    </li>
  )
}
