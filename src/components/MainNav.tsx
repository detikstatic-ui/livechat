import { Link, NavLink } from "react-router-dom"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link to="/" className="flex items-center space-x-2">
        <img src="/dtk.svg" className="h-6 w-6" alt="logo" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <NavLink
                  key={index}
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      "text-muted-foreground flex items-center text-sm font-medium transition-all",
                      item.disabled && "cursor-not-allowed opacity-80",
                      isActive && "font-bold underline"
                    )
                  }
                >
                  {item.title}
                </NavLink>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
