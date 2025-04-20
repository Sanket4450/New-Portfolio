import { NAV_ITEMS } from '@/data/nav-items'
import { Link, NavLink } from 'react-router'
import { LABELS } from '@/lib/constants'
import { VALUES } from '@/lib/values'
import { PERSONAL_INFO } from '@/data/personal-info'
import { ThemeSwitch } from './theme-switch'
import { ActionBtn } from '../ActionBtn'

export const Header = () => {
  return (
    <header
      className="fixed top-0 bg-layer w-full flex justify-between items-center"
      style={{
        height: VALUES.HEADER_HEIGHT,
        padding: `0 ${VALUES.LAYOUT_PADDING}px`,
        backdropFilter: `blur(${VALUES.BACKDROP_BLUR}px)`,
      }}>
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-bold">
        <span className="text-primary">{'<'}</span>
        {PERSONAL_INFO.fullName}
        <span className="text-primary">/{'>'}</span>
      </Link>

      {/* Navigation */}
      <nav className="flex items-center gap-4">
        {/* Toggle Switch */}
        <ThemeSwitch />

        {/* Navigation Links */}
        <ul className="flex items-center gap-4">
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
          className="text-[15px] px-4 py-1.5"
        />
      </nav>
    </header>
  )
}
