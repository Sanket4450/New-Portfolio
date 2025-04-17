import { Container } from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState } from 'react'
import Resume from '../../assets/Vinayak_Singh_Resume.pdf'
import { PersonalInfo } from '../../data/personal-info'
import { NavItems } from '../../data/nav-items'
import { CONSTANTS } from '../../lib/constants'
export function Header() {
  const [isActive, setActive] = useState(false)
  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0]
    html.classList.toggle('light')
  }
  function closeMenu() {
    setActive(false)
  }
  return (
    <Container className="header-fixed">
      <Router>
        <HashLink
          smooth
          to="#home"
          className="logo">
          <span>{'<'}</span>
          <span>{PersonalInfo.fullName}</span>
          <span>{'/>'}</span>
        </HashLink>
        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label htmlFor="switch">{CONSTANTS.TOGGLE}</label>
        <nav className={isActive ? 'active' : ''}>
          {NavItems.map((item) => (
            <NavHashLink
              smooth
              to={item.path}
              onClick={closeMenu}>
              {item.label}
            </NavHashLink>
          ))}

          <a
            href={Resume}
            download
            className="button">
            Resume
          </a>
        </nav>
        <div
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
          className={isActive ? 'menu active' : 'menu'}
          onClick={() => {
            setActive(!isActive)
          }}></div>
      </Router>
    </Container>
  )
}
