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
      'Generate personalized, professional emails instantly using AI. Just provide a prompt, and the system crafts tailored messages suitable for any audience—saving time while improving communication quality.',
      'Easily manage contacts and launch email campaigns through a clean, intuitive interface. Track key metrics like opens, clicks, and replies to understand engagement and refine your outreach.',
      'Save AI-generated drafts for later use, edit them as needed, and schedule emails for future delivery. Organize messages into folders or tags to streamline your workflow and stay productive.',
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
      'Customize your news feed by selecting topics, keywords, and preferred sources to get content that truly matters to you.',
      'Engage with a community by commenting, replying, and liking posts—spark conversations around trending stories.',
      'Instantly share interesting articles on social platforms like Facebook, Twitter, and LinkedIn with just one click.',
      'Save articles you love and organize them into collections for quick access and better content management.',
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
      'Explore a variety of products with real-time availability, detailed descriptions, and pricing.',
      'Add items to cart, place orders, and track their status seamlessly with a smooth checkout experience.',
      'Login securely to access your personalized dashboard, including saved items and past order history.',
      'Stay updated with order confirmations, delivery updates, and offers through automated email notifications.',
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
      'Discover and stream music with a smooth, responsive interface optimized for fast performance.',
      'Search, browse, and play songs without interruptions thanks to efficient backend handling.',
      'Create, update, and manage your own playlists or music libraries for a personalized listening experience.',
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
      'Built using Tailwind CSS for clean, consistent, and scalable styling.',
      'Fully responsive layout that adapts seamlessly across all devices.',
      'Smooth user interactions with intuitive navigation and subtle hover effects.',
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
