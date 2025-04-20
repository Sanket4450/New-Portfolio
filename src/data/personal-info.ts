import { WhatsappIcon } from '@/components/icons/whatsapp'
import { LABELS } from '../lib/constants'
import { LinkedInIcon } from '@/components/icons/linkedin'
import { GithubIcon } from '@/components/icons/github'
import { TelegramIcon } from '@/components/icons/telegram'
import { VALUES } from '@/lib/values'
import { removeSpaces } from '@/lib/utils'
import { Icon } from '@/types/common'

export const PERSONAL_INFO = {
  fullName: 'Sanket Talaviya',
  nickName: 'Sanket',
  designation: 'MERN Stack Developer',
  email: 'talaviyasanket01@gmail.com',
  phone: '97235 30820',
  yearOfExp: 3,
}

export const PERSONAL_INFO_LINKS = {
  phone: `tel:+${VALUES.PHONE_CODE}${removeSpaces(PERSONAL_INFO.phone)}`,
  whatsapp: `tel:+${VALUES.PHONE_CODE}${removeSpaces(PERSONAL_INFO.phone)}`,
  email: `mailto:${PERSONAL_INFO.email}`,
  linkedIn: 'https://www.linkedin.com/in/sankettalaviya',
  github: 'https://github.com/Sanket4450',
  telegram: 'https://t.me/sankettalaviya',
}

export const ABOUT_SECTIONS = [
  "I'm Sanket Talaviya, a passionate MERN Stack Developer with 3+ years of experience in crafting dynamic web applications. I specialize in React for intuitive front-end experiences and Node.js/Express for robust back-end solutions, while leveraging databases like MongoDB and PostgreSQL to deliver scalable projects.",
  'From designing responsive UIs to architecting efficient APIs, I thrive in solving complex problems with clean, maintainable code. My tech stack includes AWS, GCP, TypeScript, and more—ensuring cutting-edge solutions tailored to client needs.',
  "With a commitment to innovation and continuous learning, I'm always eager to explore new technologies and create impactful digital experiences. Let's connect and build something extraordinary together!",
]

export const SOCIAL_MEDIA_ICONS: Icon[] = [
  {
    label: LABELS.WHATSAPP,
    icon: WhatsappIcon,
    url: PERSONAL_INFO_LINKS.whatsapp,
  },
  {
    label: LABELS.LINKEDIN,
    icon: LinkedInIcon,
    url: PERSONAL_INFO_LINKS.linkedIn,
  },
  { label: LABELS.GITHUB, icon: GithubIcon, url: PERSONAL_INFO_LINKS.github },
  {
    label: LABELS.TELEGRAM,
    icon: TelegramIcon,
    url: PERSONAL_INFO_LINKS.telegram,
  },
]
