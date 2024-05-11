import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <nav className="w-96">
      <Link to="/notes" className="block py-4 pl-5 border w-full">Notes</Link>
    </nav>
  )
}
