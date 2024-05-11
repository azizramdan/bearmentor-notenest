import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="py-4 pl-5 border">
      <Link to="/">NoteNest</Link>
    </header>
  )
}
