import { CONSTANTS, RESOURCES } from '../lib/constants'
import FirstCompanyLogo from '../assets/images/first-company-logo.jpeg'
import SecondCompanyLogo from '../assets/images/second-company-logo.jpeg'
import { Experience } from '@/types/common'

export const EXP_SECTIONS: Experience[] = [
  {
    company: {
      name: 'Implies Solution',
      url: 'https://impliessolution.com',
      logo: SecondCompanyLogo,
      location: 'Surat, Gujarat, India',
    },
    roles: [
      {
        title: 'Full Stack Developer',
        startDate: '2024-05-31T18:30:00.000Z',
        endDate: CONSTANTS.CURRENT,
        details: ['Working as a Full Stack Developer in MERN technologies'],
        skills: [
          RESOURCES.NESTJS,
          RESOURCES.NEXTJS,
          RESOURCES.REMIX,
          RESOURCES.REACT,
          RESOURCES.SHADCN,
          RESOURCES.AWS_EC2,
          RESOURCES.AWS_S3,
          RESOURCES.AWS_LAMBDA,
          RESOURCES.AWS_RDS,
          RESOURCES.REDIS,
          RESOURCES.NESTJS,
          RESOURCES.GCP,
        ],
      },
    ],
  },
  {
    company: {
      name: 'Object Infotech',
      url: 'https://objectinfotech.com',
      logo: FirstCompanyLogo,
      location: 'Surat, Gujarat, India',
    },
    roles: [
      {
        title: 'MERN Stack Developer',
        startDate: '2023-05-31T18:30:00.000Z',
        endDate: '2024-04-30T18:30:00.000Z',
        details: [
          'Worked as a Full Stack Web Developer, with variety of tools & technologies like JavaScript, Typescript, React, Node.js, Express, SQL, MongoDB, etc.',
        ],
        skills: [
          RESOURCES.REACT,
          RESOURCES.NODE_JS,
          RESOURCES.EXPRESS,
          RESOURCES.MONGODB,
          RESOURCES.REDIS,
          RESOURCES.TYPESCRIPT,
          RESOURCES.SASS,
          RESOURCES.TAILWIND_CSS,
          RESOURCES.AWS_EC2,
          RESOURCES.AWS_S3,
        ],
      },
      {
        title: 'Web Development Intern',
        startDate: '2022-11-30T18:30:00.000Z',
        endDate: '2023-04-30T18:30:00.000Z',
        details: [
          'Worked as an Intern in Web development, learnt various programming languages & technologies like C, HTML, CSS, JavaScript, React, etc.',
        ],
        skills: [
          RESOURCES.JAVASCRIPT,
          RESOURCES.REACT,
          RESOURCES.NODE_JS,
          RESOURCES.EXPRESS,
          RESOURCES.MONGODB,
          RESOURCES.POSTGRESQL,
          RESOURCES.TAILWIND_CSS,
          RESOURCES.HTML,
          RESOURCES.CSS,
        ],
      },
    ],
  },
]
