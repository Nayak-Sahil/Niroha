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
            loader: async ({ request }) => {
              try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/limit/8`);
                if (response.status === 200) {
                  const result = await response.json();
                  return result;
                } else throw Error("Unable to fetch plants");
              } catch (err) {
                console.error(err.message);
                return [];
              }
            },
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
