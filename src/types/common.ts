export interface IconProps {
  size?: number
  color?: string
}

export interface Resource {
  title: string
  icon: any
}

export interface FormFieldType {
  type?: 'input' | 'textarea'
  name: string
  label: string
  required?: boolean
  spaceNotAllowed?: boolean
}

export interface Icon {
  label: string
  icon: React.FC<IconProps>
  url: string
}

export interface Project {
  title: string
  subTitle: string
  preview: string
  github: string
  details: string[]
  technologies: Resource[]
}

export interface Experience {
  company: Company
  roles: Role[]
}

export interface Company {
  name: string
  url: string
  logo: string
  location: string
}

export interface Role {
  title: string
  startDate: string
  endDate: string
  details: string[]
  skills: Resource[]
}
