import { getFadeInUp, getStaggerChildren } from '@/lib/data'
import { VALUES } from '@/lib/values'
import { Resource } from '@/types/common'
import { motion } from 'motion/react'

interface Props {
  title: string
  skills: Resource[]
}

const fadeInUp = getFadeInUp()
const staggerChildren = getStaggerChildren(
  VALUES.SKILLS_STAGGER_CHILDREN_DURATION
)

export const SkillCategory: React.FC<Props> = ({ title, skills }) => {
  return (
    <div className="mb-12">
      {/* Category Title */}
      <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>

      {/* Skills Grid */}
      <motion.div
        variants={staggerChildren}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-1 phone:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            className="bg-card rounded-lg px-4 flex items-center gap-3 shadow-md hover:shadow-lg transition-shadow duration-300"
            style={{ height: VALUES.SKILL_CARD_HEIGHT }}>
            {/* Icon */}
            <div
              className="shrink-0 h-full flex justify-center items-center"
              style={{ width: VALUES.SKILL_ICON_CONTAINER_WIDTH }}>
              <skill.icon
                size={VALUES.SKILL_ICON_WIDTH}
                // color=
              />
            </div>

            {/* Skill Name */}
            <span className="text-lg font-medium">{skill.title}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
