import TestPage from '@/pages/TestPage'
import TimeLine from '@/pages/TimeLinePage/index'
import Index from '@/pages/Index/index'
import NotFound from '@/pages/ErrorPage/NotFound/index'
import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const routerData = [
    {
      path: "/",
      element: <Index />,
      errorElement: <NotFound/>,
      children: [
        {
          path: "timeLine",
          element: <TimeLine />,
          errorElement: <NotFound/>
        },
        {
          path: "testPage",
          element: <TestPage />,
          errorElement: <NotFound/>
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