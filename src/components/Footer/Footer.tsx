import { Container } from './styles'
import { SOCIAL_MEDIA_ICONS } from '../../data/personal-info'

export function Footer() {
  return (
    <Container className="footer">
      <div></div>

      <div className="social-media">
        {SOCIAL_MEDIA_ICONS.map((icon) => (
          <a
            href={icon.url}
            target="_blank"
            rel="noreferrer">
            <img
              src={icon.icon}
              alt={icon.label}
            />
          </a>
        ))}
      </div>
    </Container>
  )
}
