import React from "react"
import MainLayout from "@/layouts/MainLayout"
import Error from "@/pages/Error"
import Home from "@/pages/Home"
import IndeksPageDesign from "@/pages/IndeksPageDesign"
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
        {
          path: "welcome",
          element: <Home status={"onboarding"} />,
        },
        {
          path: "logout",
          element: <Home status={"logout"} />,
        },
        {
          path: "restricted",
          element: <Home status={"restricted"} />,
        },
        {
          path: "closed",
          element: <Home status={"closed"} />,
        },
        {
          path: "indeks-page-design",
          element: <IndeksPageDesign />,
        },
      ],
    },
  ],
  { basename: import.meta.env.DEV ? "/" : import.meta.env.BASE_URL }
)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
