import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export default function DefaultLayout() {
  return (
    <div>
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="w-full">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
