import TestPage from '@/pages/TestPage'
import TimeLine from '@/pages/TimeLinePage/index'
import Index from '@/pages/Index/index'
import NotFound from '@/pages/ErrorPage/NotFound/index'
import React, { lazy } from 'react'
import styles from './App.module.scss'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import BoxMove from './pages/BoxMove'
import Sticky from './pages/Sticky'
// import TransformPage from './pages/TransformPage'
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
          errorElement: <NotFound />,
        },
        {
          path: "testPage",
          element: <TestPage />,
          errorElement: <NotFound />
        },
        {
          path: "cssText",
          async lazy() {
            let CssText = await import("./pages/CssText");
            return { Component: CssText.default }
          },
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
          errorElement: <NotFound />,
          // 路由懒加载
          async lazy() {
            let TransformPage = await import("./pages/TransformPage");
            return { Component: TransformPage.default };
          },
          // lazy: () => import("./pages/TransformPage/index"),
        },
        {
          path: "gradient",
          element: <Gradient />,
          errorElement: <NotFound />
        },
        {
          path: "cssFilter",
          async lazy() {
            let CssFilter = await import("./pages/CssFilter");
            return { Component: CssFilter.default }
          },
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