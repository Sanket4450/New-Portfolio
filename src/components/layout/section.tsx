import { cn } from '@/lib/utils'
import { SectionTitle } from './section-title'

interface Props {
  size?: 'xs' | 'sm' | 'md' | 'lg'
  id: string
  title: string
  children: React.ReactNode
}

export const Section: React.FC<Props> = ({
  size = 'md',
  id,
  title,
  children,
}) => {
  return (
    <section
      id={id}
      className={cn(
        'py-16 px-4 md:px-8 lg:px-16 mx-auto',
        size === 'lg'
          ? 'max-w-7xl'
          : size === 'sm'
          ? 'max-w-5xl'
          : size === 'xs'
          ? 'max-w-4xl'
          : 'max-w-6xl'
      )}>
      {/* Section Title */}
      <SectionTitle title={title} />

      {/* Section Body */}
      {children}
    </section>
  )
}
