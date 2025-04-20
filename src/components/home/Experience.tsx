import { EXP_SECTIONS } from '@/data/experiences'
import { HASH_PATHS, LABELS } from '@/lib/constants'
import { getStaggerChildren } from '@/lib/data'
import { motion } from 'motion/react'
import { Section } from '../layout/section'
import { ExperienceCard } from './experience-card'

const staggerChildren = getStaggerChildren()

export const Experience = () => {
  return (
    <Section
      id={HASH_PATHS.EXPERIENCE}
      title={LABELS.EXPERIENCE}>
      <motion.div
        variants={staggerChildren}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="space-y-4">
        {EXP_SECTIONS.map((section, sIdx) => (
          <ExperienceCard
            key={sIdx}
            currentIdx={sIdx}
            data={section}
          />
        ))}
      </motion.div>
    </Section>
  )
}
