import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import ExplorePlants from './ExplorePlants/ExplorePlants.jsx'
import LandingModel from './Landing/LandingModel.jsx'

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <LandingModel />
      },
      {
        path: "explore-plants",
        element: <ExplorePlants />
      },
      {
        path: "/virtual-farm",
        element: "Virtual Farm"
      },
      {
        path: "/register",
        element: "Virtual Farm"
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
