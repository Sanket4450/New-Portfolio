import { RESOURCES } from '../lib/constants'
import AIEmailSenderImage from '@/assets/images/ai-email-sender-preview.jpg'
import NewslineImage from '@/assets/images/newsline-preview.jpg'
import EviraImage from '@/assets/images/evira-preview.jpg'
import SonicBoxImage from '@/assets/images/sonicbox-preview.jpg'
import AppleImage from '@/assets/images/apple-preview.jpg'
import { Project } from '@/types/common'

export const PROJECTS: Project[] = [
  {
    title: 'AI Email Sender',
    subTitle: 'Smart Email Automation with AI',
    preview: AIEmailSenderImage,
    github: 'https://github.com/YourUsername/AI-Email-Sender',
    details: [
      'Leverage AI to craft personalized, professional emails in seconds using user-provided prompts. Tailor messages for any audience or purpose, ensuring impactful communication every time.',
      'Effortlessly manage contacts and email campaigns with an intuitive interface. Track email events such as opens, clicks, and responses to measure engagement and optimize outreach strategies.',
      'Save drafts of AI-generated emails for future use, enabling seamless editing and scheduling. Organize your workflow by categorizing emails into folders or tags for easy access and management.',
    ],
    technologies: [
      RESOURCES.REMIX,
      RESOURCES.NESTJS,
      RESOURCES.TYPESCRIPT,
      RESOURCES.NODE_JS,
      RESOURCES.POSTGRESQL,
      RESOURCES.GIT,
      RESOURCES.GITHUB,
      RESOURCES.POSTMAN,
    ],
  },
  {
    title: 'Newsline',
    subTitle: 'Full Stack News App',
    preview: NewslineImage,
    github: 'https://github.com/Sanket4450/Newsline',
    details: [
      'Customize your news feed to cater to your unique interests and preferences. Tailor your feed by selecting specific topics, keywords, or sources that matter most to you, ensuring that you receive relevant and timely content.',
      'Engage with fellow users by participating in lively discussions and debates on news articles and current events. Share your perspectives, insights, and opinions, and interact with others through comments, replies, and likes.',
      'Easily post articles & stories to popular social media platforms such as Facebook, Twitter, and LinkedIn, allowing you to spark conversations and drive engagement among your friends and followers.',
      'Organize your saved articles into personalized collections or categories, making it easy to revisit and access your favorite stories whenever you want.',
    ],
    technologies: [
      RESOURCES.TYPESCRIPT,
      RESOURCES.NODE_JS,
      RESOURCES.EXPRESS,
      RESOURCES.MONGODB,
      RESOURCES.GRAPHQL,
      RESOURCES.GIT,
      RESOURCES.POSTMAN,
      RESOURCES.SWAGGER,
      RESOURCES.AWS_EC2,
    ],
  },
  {
    title: 'Evira',
    subTitle: 'E-commerce Backend',
    preview: EviraImage,
    github: 'https://github.com/Sanket4450/Evira',
    details: [
      'With a total of 77 APIs, it provides comprehensive functionality allows for seamless interaction between different components of the application, ensuring efficient management of data.',
      'Admin APIs empower administrators to efficiently manage the backend of the e-commerce platform. These APIs enable tasks such as product management, order processing and user management.',
      'Implemented token-based authentication enhances the security of the backend APIs. This approach helps prevent unauthorized access to sensitive data and resources,',
      'Integrated an email service enables the application to communicate effectively with users, providing essential notifications, updates, and promotional messages.',
    ],
    technologies: [
      RESOURCES.JAVASCRIPT,
      RESOURCES.NODE_JS,
      RESOURCES.EXPRESS,
      RESOURCES.MONGODB,
      RESOURCES.GRAPHQL,
      RESOURCES.GIT,
      RESOURCES.POSTMAN,
      RESOURCES.SWAGGER,
      RESOURCES.AWS_EC2,
    ],
  },
  {
    title: 'SonicBox',
    subTitle: 'Music App Backend',
    preview: SonicBoxImage,
    github: 'https://github.com/Sanket4450/SonicBox',
    details: [
      'SonicBox boasts a sophisticated backend architecture developed using GraphQL that allows for efficient data retrieval and manipulation, enabling clients to request precisely the data they need.',
      "TypeScript serves as the primary programming language for SonicBox's backend development, offering strong typing to improve code quality and developer productivity by enforcing strict type checking at compile-time",
      'Organize your saved articles into personalized collections or categories, making it easy to revisit and access your favorite stories whenever you want.',
    ],
    technologies: [
      RESOURCES.TYPESCRIPT,
      RESOURCES.NODE_JS,
      RESOURCES.EXPRESS,
      RESOURCES.MONGODB,
      RESOURCES.GRAPHQL,
      RESOURCES.APOLLO,
      RESOURCES.GIT,
      RESOURCES.POSTMAN,
    ],
  },
  {
    title: 'Apple',
    subTitle: 'MacBook Air Page',
    preview: AppleImage,
    github: 'https://github.com/Sanket4450/Apple',
    details: [
      'The project ensures the power of Tailwind CSS, a utility-first CSS framework, to streamline development and ensure consistency in styling.',
      "The official MacBook Air page adapts seamlessly to various screen sizes and resolutions through Tailwind CSS's responsive design utilities, the layout gracefully adjusts to accommodate desktops, laptops, tablets, and mobile devices.",
      'The project prioritizes smooth interaction to enhance user engagement and satisfaction by ensuring hover effects to intuitive navigation gestures',
    ],
    technologies: [
      RESOURCES.HTML,
      RESOURCES.CSS,
      RESOURCES.TAILWIND_CSS,
      RESOURCES.JAVASCRIPT,
      RESOURCES.GIT,
      RESOURCES.POSTMAN,
    ],
  },
]
