import { HASH_PATHS, LABELS } from '@/lib/constants'
import { motion } from 'motion/react'
import { getFadeInUp, getStaggerChildren } from '@/lib/data'
import { ABOUT_SECTIONS } from '@/data/personal-info'
import { VALUES } from '@/lib/values'
import { Section } from '../layout/section'

const fadeInUp = getFadeInUp()
const staggerSections = getStaggerChildren(
  VALUES.ABOUT_STAGGER_CHILDREN_DURATION
)

export const AboutMe = () => {
  return (
    <Section
      size="sm"
      id={HASH_PATHS.ABOUT}
      title={LABELS.ABOUT_ME}>
      <div className="flex justify-center">
        <motion.div
          variants={staggerSections}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="w-full space-y-4">
          {ABOUT_SECTIONS.map((section, idx) => (
            <motion.p
              key={idx}
              variants={fadeInUp}
              className="font-light text-muted-foreground">
              {section}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
