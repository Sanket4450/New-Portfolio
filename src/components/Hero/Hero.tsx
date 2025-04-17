import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"
import Hello from '../../assets/Hello.gif'
import { PersonalInfo, SOCIAL_MEDIA_ICONS } from '../../data/personal-info'
export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>
            Hello{' '}
            <img
              src={Hello}
              alt="Hello"
              width="20px"
            />
            , I'm
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInUp"
          delay={0.2 * 1000}>
          <h1>{PersonalInfo.fullName}</h1>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInUp"
          delay={0.4 * 1000}>
          <h3>{PersonalInfo.designation}</h3>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInUp"
          delay={0.6 * 1000}>
          <p className="small-resume">
            {PersonalInfo.yearOfExp} Year Experience
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInUp"
          delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink
              smooth
              to="#contact"
              className="button">
              Contact
            </NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInUp"
          delay={1 * 1000}>
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
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation
          animateIn="fadeInRight"
          delay={1 * 1000}>
          <img
            src={Illustration}
            alt="Ilustração"
          />
        </ScrollAnimation>
      </div>
    </Container>
  )
}