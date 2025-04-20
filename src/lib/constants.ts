import { BitbucketIcon } from '@/components/icons/bitbucket'
import { CSSIcon } from '@/components/icons/css'
import { DockerIcon } from '@/components/icons/docker'
import { EC2Icon } from '@/components/icons/ec2'
import { ElasticSearchIcon } from '@/components/icons/elasticsearch'
import { ESLintIcon } from '@/components/icons/eslint'
import { ExpressIcon } from '@/components/icons/express'
import { FirebaseIcon } from '@/components/icons/firebase'
import { GCPIcon } from '@/components/icons/gcp'
import { GitIcon } from '@/components/icons/git'
import { GithubIcon } from '@/components/icons/github'
import { GitlabIcon } from '@/components/icons/gitlab'
import { GraphQLIcon } from '@/components/icons/graphql'
import { HTMLIcon } from '@/components/icons/html'
import { JSIcon } from '@/components/icons/javascript'
import { JestIcon } from '@/components/icons/jest'
import { JiraIcon } from '@/components/icons/jira'
import { KubernetesIcon } from '@/components/icons/kubernetes'
import { LambdaIcon } from '@/components/icons/lambda'
import { MongoDBIcon } from '@/components/icons/mongodb'
import { MySQLIcon } from '@/components/icons/mysql'
import { NestJSIcon } from '@/components/icons/nestjs'
import { NextJSIcon } from '@/components/icons/nextjs'
import { NodeJsIcon } from '@/components/icons/nodejs'
import { OpenAIIcon } from '@/components/icons/openai'
import { PostgresIcon } from '@/components/icons/postgres'
import { PostmanIcon } from '@/components/icons/postman'
import { PrettierIcon } from '@/components/icons/prettier'
import { RDSIcon } from '@/components/icons/rds'
import { ReactIcon } from '@/components/icons/react'
import { RedisIcon } from '@/components/icons/redis'
import { ReduxIcon } from '@/components/icons/redux'
import { RemixIcon } from '@/components/icons/remix'
import { S3Icon } from '@/components/icons/s3'
import { SASSIcon } from '@/components/icons/sass'
import { ShadCNIcon } from '@/components/icons/shadcn'
import { SwaggerIcon } from '@/components/icons/swagger'
import { TailwindIcon } from '@/components/icons/tailwind'
import { TSIcon } from '@/components/icons/typescript'
import { VSCodeIcon } from '@/components/icons/vscode'

export const CONSTANTS = {
  TOGGLE: 'Toggle',

  FRONTEND: 'Frontend',
  BACKEND: 'Backend',
  CLOUD_AND_DEVOPS: 'Cloud & DevOps',
  TOOLS: 'Tools',

  CURRENT: 'Current',
  NAME: 'name',
  EMAIL: 'email',
  MESSAGE: 'message',
}

export const LABELS = {
  HOME: 'Home',
  ABOUT_ME: 'About me',
  PROJECT: 'Project',
  PROJECTS: 'Projects',
  SKILLS: 'Skills',
  EXPERIENCE: 'Experience',
  CONTACT: 'Contact',
  RESUME: 'Resume',
  LINKEDIN: 'LinkedIn',
  GITHUB: 'GitHub',
  WHATSAPP: 'WhatsApp',
  TELEGRAM: 'Telegram',
  EMAIL: 'Email',
  SUBMIT: 'Submit',
  GET_IN_TOUCH: 'Get in Touch',
  CONTACT_PUNCHLINE: "Let's work together to build something amazing!",
  CONTACT_NAME: 'Your Name',
  CONTACT_EMAIL: 'Your Email',
  CONTACT_MESSAGE: 'Your Message',
  EMAIL_ME: 'Email Me',
  CALL_ME: 'Call Me',
  CONTACT_FORM_SUCCESS:
    "Thank you for reaching out! I'll get back to you soon.",
}

export const HASH_PATHS = {
  HOME: '#home',
  ABOUT: '#about',
  EXPERIENCE: '#experience',
  SKILLS: '#skills',
  PROJECTS: '#projects',
  CONTACT: '#contact',
}

export const SCREEN_SIZES = {
  PH: 500,
  MD: 768,
  LG: 1024,
  XL: 1280,
  XXL: 1536,
}

export const TECHNOLOGIES = {
  HTML: 'HTML',
  CSS: 'CSS',
  SASS: 'Sass',
  JAVASCRIPT: 'JavaScript',
  TYPESCRIPT: 'TypeScript',
  REACT: 'React',
  NEXTJS: 'Next.js',
  REMIX: 'Remix',
  TAILWIND_CSS: 'Tailwind CSS',
  MATERIAL_UI: 'Material-UI',
  CHAKRA_UI: 'Chakra UI',
  ANT_UI: 'Ant UI',
  SHADCN: 'ShadCn UI',
  REDUX: 'Redux',
  ZUSTAND: 'Zustand',
  GRAPHQL: 'GraphQL',
  APOLLO: 'Apollo Client',
  NODE_JS: 'Node.js',
  EXPRESS: 'Express.js',
  NESTJS: 'NestJS',
  MONGODB: 'MongoDB',
  POSTGRESQL: 'PostgreSQL',
  MYSQL: 'MySQL',
  SQLITE: 'SQLite',
  REDIS: 'Redis',
  ELASTICSEARCH: 'Elasticsearch',
  FIREBASE: 'Firebase',
  DYNAMODB: 'DynamoDB',
  AWS_EC2: 'Amazon EC2',
  AWS_S3: 'Amazon S3',
  AWS_LAMBDA: 'AWS Lambda',
  AWS_API_GATEWAY: 'AWS API Gateway',
  AWS_CLOUDFRONT: 'Amazon CloudFront',
  AWS_RDS: 'Amazon RDS',
  AWS_ELASTIC_BEANSTALK: 'AWS Elastic Beanstalk',
  AWS_CLOUDWATCH: 'Amazon CloudWatch',
  AWS_IAM: 'AWS IAM',
  GCP: 'Google Cloud Platform',
  VS_CODE: 'Visual Studio Code',
  POSTMAN: 'Postman',
  SWAGGER: 'Swagger',
  DOCKER: 'Docker',
  KUBERNETES: 'Kubernetes',
  GIT: 'Git',
  GITHUB: 'GitHub',
  GITLAB: 'GitLab',
  BITBUCKET: 'Bitbucket',
  JIRA: 'Jira',
  ESLINT: 'ESLint',
  PRETTIER: 'Prettier',
  JEST: 'Jest',
  HUGGING_FACE: 'Hugging Face',
  GENERATIVE_AI: 'Generative AI',
  OPENAI: 'OpenAI',
}

export const RESOURCES = {
  HTML: {
    title: 'HTML',
    icon: HTMLIcon,
  },
  CSS: {
    title: 'CSS',
    icon: CSSIcon,
  },
  SASS: {
    title: 'SASS',
    icon: SASSIcon,
  },
  JAVASCRIPT: {
    title: 'JavaScript',
    icon: JSIcon,
  },
  TYPESCRIPT: {
    title: 'TypeScript',
    icon: TSIcon,
  },
  REACT: {
    title: 'React',
    icon: ReactIcon,
  },
  NEXTJS: {
    title: 'Next.js',
    icon: NextJSIcon,
  },
  REMIX: {
    title: 'Remix',
    icon: RemixIcon,
  },
  TAILWIND_CSS: {
    title: 'Tailwind CSS',
    icon: TailwindIcon,
  },
  SHADCN: {
    title: 'shadcn/ui',
    icon: ShadCNIcon,
  },
  REDUX: {
    title: 'Redux',
    icon: ReduxIcon,
  },
  GRAPHQL: {
    title: 'GraphQL',
    icon: GraphQLIcon,
  },
  APOLLO: {
    title: 'Apollo Client',
    icon: GraphQLIcon,
  },
  NODE_JS: {
    title: 'Node.js',
    icon: NodeJsIcon,
  },
  EXPRESS: {
    title: 'Express.js',
    icon: ExpressIcon,
  },
  NESTJS: {
    title: 'Nest.js',
    icon: NestJSIcon,
  },
  MONGODB: {
    title: 'MongoDB',
    icon: MongoDBIcon,
  },
  POSTGRESQL: {
    title: 'PostgreSQL',
    icon: PostgresIcon,
  },
  MYSQL: {
    title: 'MySQL',
    icon: MySQLIcon,
  },
  SQLITE: {
    title: 'SQLite',
    icon: HTMLIcon,
  },
  REDIS: {
    title: 'Redis',
    icon: RedisIcon,
  },
  ELASTICSEARCH: {
    title: 'Elasticsearch',
    icon: ElasticSearchIcon,
  },
  FIREBASE: {
    title: 'Firebase',
    icon: FirebaseIcon,
  },
  DYNAMODB: {
    title: 'DynamoDB',
    icon: RDSIcon,
  },
  AWS_EC2: {
    title: 'EC2',
    icon: EC2Icon,
  },
  AWS_S3: {
    title: 'S3',
    icon: S3Icon,
  },
  AWS_LAMBDA: {
    title: 'Lambda',
    icon: LambdaIcon,
  },
  AWS_RDS: {
    title: 'RDS',
    icon: RDSIcon,
  },
  GCP: {
    title: 'GCP',
    icon: GCPIcon,
  },
  VS_CODE: {
    title: 'VS Code',
    icon: VSCodeIcon,
  },
  POSTMAN: {
    title: 'Postman',
    icon: PostmanIcon,
  },
  SWAGGER: {
    title: 'Swagger',
    icon: SwaggerIcon,
  },
  DOCKER: {
    title: 'Docker',
    icon: DockerIcon,
  },
  KUBERNETES: {
    title: 'Kubernetes',
    icon: KubernetesIcon,
  },
  GIT: {
    title: 'Git',
    icon: GitIcon,
  },
  GITHUB: {
    title: 'GitHub',
    icon: GithubIcon,
  },
  GITLAB: {
    title: 'GitLab',
    icon: GitlabIcon,
  },
  BITBUCKET: {
    title: 'Bitbucket',
    icon: BitbucketIcon,
  },
  JIRA: {
    title: 'Jira',
    icon: JiraIcon,
  },
  ESLINT: {
    title: 'ESLint',
    icon: ESLintIcon,
  },
  PRETTIER: {
    title: 'Prettier',
    icon: PrettierIcon,
  },
  JEST: {
    title: 'Jest',
    icon: JestIcon,
  },
  OPENAI: {
    title: 'OpenAI',
    icon: OpenAIIcon,
  },
}
