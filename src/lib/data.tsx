import { VALUES } from './values'

export const getFadeInUp = (duration: number = VALUES.FADE_IN_UP_DURATION) => ({
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration, ease: 'easeOut' },
})

export const getStaggerChildren = (
  duration: number = VALUES.STAGGER_CHILDREN_DURATION
) => ({
  initial: {},
  animate: {
    transition: {
      staggerChildren: duration,
    },
  },
})
