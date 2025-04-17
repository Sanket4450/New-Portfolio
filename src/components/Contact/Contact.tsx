import { Container } from './styles'
import emailIcon from '../../assets/email-icon.svg'
import phoneIcon from '../../assets/phone-icon.svg'
import { Form } from '../Form/Form'
import { EMAIL_HREF, PersonalInfo, PHONE_NO_HREF } from '../../data/personal-info'
import { CONSTANTS } from '../../lib/constants'

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
          <a href={EMAIL_HREF}>
            <img
              src={emailIcon}
              alt="Email"
            />
          </a>
          <a href={EMAIL_HREF}>{PersonalInfo.email}</a>
        </div>
        <div>
          <a href={PHONE_NO_HREF}>
            <img
              src={phoneIcon}
              alt="Phone No"
            />
          </a>
          <a href={PHONE_NO_HREF}>
            (+{CONSTANTS.PHONE_CODE}) {PersonalInfo.phone}
          </a>
        </div>
      </div>
      <Form></Form>
    </Container>
  )
}
