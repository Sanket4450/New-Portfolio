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
