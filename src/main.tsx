import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'
import '@/index.css'
import DefaultLayout from '@/layouts/default'
import NotesPage from '@/pages/notes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/notes" />,
  },
  {
    path: '/notes',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <NotesPage />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
