import { getFadeInUp } from '@/lib/data'
import { cn } from '@/lib/utils'
import { ClassValue } from 'clsx'
import { motion } from 'motion/react'

interface ActionBtnProps {
  type?: 'button' | 'submit' | 'link'
  variant?: 'primary' | 'secondary'
  child: React.ReactNode
  href?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: ClassValue
}

const fadeInUp = getFadeInUp()

export const ActionBtn: React.FC<ActionBtnProps> = ({
  type = 'button',
  variant = 'primary',
  child,
  href,
  onClick,
  className = '',
}) => {
  if (type === 'link')
    return (
      <motion.a
        variants={fadeInUp}
        href={href}
        className={cn(
          'px-5 py-2.5 font-medium rounded-xl transition-colors duration-200',
          variant === 'secondary'
            ? 'bg-gray-800 hover:bg-gray-700 text-white'
            : 'bg-primary hover:bg-primary-foreground text-white',
          className
        )}>
        {child}
      </motion.a>
    )

  return (
    <motion.button
      variants={fadeInUp}
      type={type}
      className={cn(
        'px-6 py-3 font-medium rounded-xl transition-colors duration-200',
        variant === 'secondary'
          ? 'bg-gray-800 hover:bg-gray-700 text-white'
          : 'bg-primary hover:bg-primary-foreground text-white',
        className
      )}
      onClick={onClick}>
      {child}
    </motion.button>
  )
}
