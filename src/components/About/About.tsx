import { Container } from './styles'
import ScrollAnimation from 'react-animate-on-scroll'
import { ABOUT_SECTIONS } from '../../data/personal-info'
import { CONSTANTS, LABELS } from '../../lib/constants'
import { EXP_SECTIONS } from '../../data/experiences'
import './About.css'

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>{LABELS.ABOUT_ME}</h2>
        </ScrollAnimation>

        {ABOUT_SECTIONS.map((section) => (
          <ScrollAnimation
            animateIn="fadeInLeft"
            delay={0.1 * 1000}>
            <p style={{ marginTop: 12, fontSize: 15 }}>{section}</p>
          </ScrollAnimation>
        ))}
      </div>

      <div className="about-text experience-container">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>{LABELS.EXPERIENCE}</h2>
        </ScrollAnimation>

        {EXP_SECTIONS.map((section, index) => (
          <ScrollAnimation
            key={index}
            animateIn="fadeInUp"
            delay={700 + index * 200} // Staggered animation for each company
            duration={1.5}>
            <div className="company-section">
              {/* Company Logo */}
              <div className="company-logo">
                <img
                  src={section.company.logo}
                  alt={`${section.company.name} logo`}
                />
              </div>

              {/* Company Name and URL */}
              <div className="company-info">
                <a
                  href={section.company.url}
                  target="_blank"
                  rel="noopener noreferrer">
                  <h4>{section.company.name}</h4>
                </a>
              </div>

              {/* Roles */}
              {section.roles.map((role, roleIndex) => (
                <div
                  key={roleIndex}
                  className="role-section">
                  <h5>{role.role}</h5>
                  <p>
                    {new Date(role.start).toLocaleDateString('en-US', {
                      month: 'long',
                      year: 'numeric',
                    })}{' '}
                    -{' '}
                    {role.end === CONSTANTS.CURRENT
                      ? 'Present'
                      : new Date(role.end).toLocaleDateString('en-US', {
                          month: 'long',
                          year: 'numeric',
                        })}
                  </p>

                  {/* Role Details */}
                  <ul>
                    {role.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>

                  {/* Skills */}
                  <div className="skills">
                    <strong>Skills:</strong>
                    <ul>
                      {role.skills.map((skill, skillIndex) => (
                        <li key={skillIndex}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  )
}
