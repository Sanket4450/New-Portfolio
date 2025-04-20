import { ThemeSwitch } from '../layout/theme-switch'
import { NAV_ITEMS } from '@/data/nav-items'
import { NavLink } from 'react-router'
import { ActionBtn } from '../ActionBtn'
import { LABELS } from '@/lib/constants'
import { memo } from 'react'

export const Navbar = memo(() => {
  return (
    <nav className="flex items-center gap-4">
      {/* Toggle Switch */}
      <ThemeSwitch />

      {/* Navigation Links */}
      <ul className="max-lg:hidden flex items-center gap-4">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className="text-[15px] text-foreground hover:text-primary transition-colors duration-200 uppercase">
            {item.label}
          </NavLink>
        ))}
      </ul>

      {/* Resume Button */}
      <ActionBtn
        child={LABELS.RESUME}
        className="max-lg:hidden text-[15px] px-4 py-1.5"
      />
    </nav>
  )
})
