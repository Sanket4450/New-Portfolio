import { WhatsappIcon } from '@/components/icons/whatsapp'
import { LABELS } from '../lib/constants'
import { LinkedInIcon } from '@/components/icons/linkedin'
import { GithubIcon } from '@/components/icons/github'
import { TelegramIcon } from '@/components/icons/telegram'
import { VALUES } from '@/lib/values'
import { removeSpaces } from '@/lib/utils'

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
  email: `mailto:${PERSONAL_INFO.email}`,
  linkedIn: 'https://www.linkedin.com/in/sankettalaviya',
  github: 'https://github.com/Sanket4450',
  telegram: 'https://t.me/sankettalaviya',
}

export const ABOUT_SECTIONS = [
  'I am a MERN stack developer with a deep passion for crafting web applications. With expertise in React, Node.js, Express, JavaScript, TypeScript, MongoDB, PostgreSQL, AWS, GCP, and SQL, I thrive in dynamic environments where learning, innovation and problem-solving take place.',
  "My expertise and experience relies on both front-end as well as back-end development. I excel in building responsive user interfaces with React, while also designing robust server-side systems using Node.js and Express. Leveraging MongoDB and SQL, I ensure efficient data management and seamless integration of APIs, delivering scalable solutions according to clients' requirements.",
  "My vision is to continually push the boundaries of web development, staying at the forefront of emerging technologies and best practices. I am committed to delivering high-quality, maintainable code that not only meets but exceeds expectations. Let's connect and embark on a journey of innovation and growth together in the dynamic world of MERN stack development.",
]

export const SOCIAL_MEDIA_ICONS = [
  {
    label: LABELS.WHATSAPP,
    icon: WhatsappIcon,
    url: PERSONAL_INFO_LINKS.phone,
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
