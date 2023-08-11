import TestPage from '@/pages/TestPage'
import TimeLine from '@/pages/TimeLinePage/index'
import Index from '@/pages/Index/index'
import NotFound from '@/pages/ErrorPage/NotFound/index'
import React from 'react'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import BoxMove from './pages/BoxMove'
import Sticky from './pages/Sticky'
import TransformPage from './pages/TransformPage'
import Gradient from './pages/Gradient'

function App() {

  const routerData = [
    {
      path: "/",
      element: <Navigate to="/timeLine" />,
      errorElement: <NotFound />,
    },
    {
      element: <Index />,
      children: [
        {
          path: "timeLine",
          element: <TimeLine />,
          errorElement: <NotFound />
        },
        {
          path: "testPage",
          element: <TestPage />,
          errorElement: <NotFound />
        },
        {
          path: "boxMove",
          element: <BoxMove />,
          errorElement: <NotFound />
        },
        {
          path: "sticky",
          element: <Sticky />,
          errorElement: <NotFound />
        },
        {
          path: "transformPage",
          element: <TransformPage />,
          errorElement: <NotFound />
        },
        {
          path: "gradient",
          element: <Gradient />,
          errorElement: <NotFound />
        },
      ]
    },
  ]

  const router = createBrowserRouter(routerData);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App