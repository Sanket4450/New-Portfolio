import { CONSTANTS, TECHNOLOGIES } from '../lib/constants'
import FirstCompanyLogo from '../assets/images/first-company-logo.jpeg'
import SecondCompanyLogo from '../assets/images/second-company-logo.jpeg'

export const EXP_SECTIONS = [
  {
    company: {
      name: 'Implies Solution',
      url: 'https://impliessolution.com',
      logo: SecondCompanyLogo,
    },
    roles: [
      {
        role: 'Full Stack Developer',
        start: '2024-05-31T18:30:00.000Z',
        end: CONSTANTS.CURRENT,
        details: ['Working as a Full Stack Developer in MERN technologies'],
        skills: [
          'Nest.js',
          'Next.js',
          'Remix',
          'React',
          'ShadCn UI',
          'DevOps',
          'AWS',
          'GCP',
          'CI/CD',
          'EC2',
          'S3',
          'Lambda',
          'Redis',
        ],
      },
    ],
  },
  {
    company: {
      name: 'Object Infotech',
      url: 'https://objectinfotech.com',
      logo: FirstCompanyLogo,
    },
    roles: [
      {
        role: 'MERN Stack Developer',
        start: '2023-05-31T18:30:00.000Z',
        end: '2024-04-30T18:30:00.000Z',
        details: [
          'Worked as a Full Stack Web Developer, with variety of tools & technologies like JavaScript, Typescript, React, Node.js, Express, SQL, MongoDB, etc.',
        ],
        skills: [
          'JavaScript',
          'TypeScript',
          'React',
          'Node.js',
          'Express',
          'SQL',
          'MongoDB',
          'PostgreSQL',
          'Tailwind CSS',
          'AWS',
          'HTML',
          'CSS',
        ],
      },
      {
        role: 'Web Development Intern',
        start: '2022-11-30T18:30:00.000Z',
        end: '2023-04-30T18:30:00.000Z',
        details: [
          'Worked as an Intern in Web development, learnt various programming languages & technologies like C, HTML, CSS, JavaScript, React, etc.',
        ],
        skills: [
          TECHNOLOGIES.JAVASCRIPT,
          TECHNOLOGIES.REACT,
          TECHNOLOGIES.NODE_JS,
          TECHNOLOGIES.EXPRESS,
          TECHNOLOGIES.MONGODB,
          TECHNOLOGIES.POSTGRESQL,
          TECHNOLOGIES.TAILWIND_CSS,
          TECHNOLOGIES.AWS_EC2,
          TECHNOLOGIES.AWS_S3,
          TECHNOLOGIES.HTML,
          TECHNOLOGIES.CSS,
        ],
      },
    ],
  },
]
