import { cn } from '@/lib/utils'
import { SectionTitle } from './section-title'
import { VALUES } from '@/lib/values'

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
        'py-16 mx-auto',
        VALUES.PADDING_CLASS,
        size === 'lg'
          ? 'w-full 2xl:max-w-[92rem]'
          : size === 'sm'
          ? 'w-full max-w-5xl'
          : size === 'xs'
          ? 'max-w-4xl'
          : 'max-w-6xl 2xl:max-w-[80rem]'
      )}>
      {/* Section Title */}
      <SectionTitle title={title} />

      {/* Section Body */}
      {children}
    </section>
  )
}
