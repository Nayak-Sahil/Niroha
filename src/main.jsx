import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import ExplorePlants from './ExplorePlants/ExplorePlants.jsx'
import LandingModel from './Landing/LandingModel.jsx'
import ModelViewer from './Landing/ModelViewer.jsx'
import PlantDetails from './ExplorePlants/PlantDetails.jsx'

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
        children: [
          {
            path: "",
            element: <ExplorePlants />,
          },
          {
            path: ":plantsID",
            element: <PlantDetails />
          }
        ]
      },
      {
        path: "/virtual-farm",
        element: <ModelViewer />
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
