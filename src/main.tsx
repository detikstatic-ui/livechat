import React from "react"
import MainLayout from "@/layouts/MainLayout"
import TestLayout from "@/layouts/TestLayout"
import Error from "@/pages/Error"
import Home from "@/pages/Home"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "/test",
      element: <TestLayout />,
    },
  ],
  { basename: import.meta.env.DEV ? "/" : import.meta.env.BASE_URL }
)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
