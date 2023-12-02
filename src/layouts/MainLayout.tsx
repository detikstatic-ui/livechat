import { Outlet } from "react-router-dom"

// import { ThemeToggle } from "@/components/ThemeToggle"

import { TailwindIndicator } from "../components/TailwindIndicator"
import { ThemeProvider } from "../context/ThemeProvider"

function MainLayout() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="theme">
      <div className="flex h-screen flex-col">
        <Outlet />
      </div>
      <TailwindIndicator />
      {/* <div className="fixed right-1 top-1 z-50">
        <ThemeToggle mode="swap" />
      </div> */}
    </ThemeProvider>
  )
}

export default MainLayout
