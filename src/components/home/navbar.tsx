import Resume from '@/assets/files/sanket-talaviya-resume.pdf'
import { ThemeSwitch } from '../layout/theme-switch'
import { NAV_ITEMS } from '@/data/nav-items'
import { NavLink } from 'react-router'
import { ActionBtn } from '../ActionBtn'
import { LABELS, SCREEN_SIZES } from '@/lib/constants'
import { memo } from 'react'
import { useMediaQuery } from 'react-responsive'
import { getResumeDownloadLink } from '@/lib/utils'

export const Navbar = memo(() => {
  const isLgScreen = useMediaQuery({ minWidth: SCREEN_SIZES.LG })

  const downloadResume = () => {
    const downloadLink = getResumeDownloadLink()

    const link = document.createElement('a')
    link.href = Resume
    link.download = downloadLink
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <nav className="flex items-center gap-4">
      {/* Toggle Switch */}
      <ThemeSwitch />

      {isLgScreen && (
        <>
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
            className="max-lg:hidden text-[15px] px-4 py-1.5"
            onClick={downloadResume}
          />
        </>
      )}
    </nav>
  )
})
