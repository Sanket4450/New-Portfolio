import { HASH_PATHS, LABELS } from '@/lib/constants'
import { motion } from 'motion/react'
import { SectionTitle } from '../layout/section-title'
import { getFadeInUp, getStaggerChildren } from '@/lib/data'
import { ABOUT_SECTIONS } from '@/data/personal-info'
import { VALUES } from '@/lib/values'

const fadeInUp = getFadeInUp()
const staggerSections = getStaggerChildren(
  VALUES.ABOUT_STAGGER_CHILDREN_DURATION
)

export const AboutMe = () => {
  return (
    <section
      id={HASH_PATHS.ABOUT}
      className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <SectionTitle title={LABELS.ABOUT_ME} />

        <div className="flex justify-center">
          <motion.div
            variants={staggerSections}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="w-full md:w-[80%] xl:w-[60%] space-y-4">
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
      </div>
    </section>
  )
}
