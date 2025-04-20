import { PROJECTS } from '@/data/projects'
import { getStaggerChildren } from '@/lib/data'
import { motion } from 'motion/react'
import { HASH_PATHS, LABELS } from '@/lib/constants'
import { ProjectCard } from './project-card'
import { Section } from '../layout/section'

const staggerChildren = getStaggerChildren(0.3)

export const Projects = () => {
  return (
    <Section
      size="lg"
      id={HASH_PATHS.PROJECTS}
      title={LABELS.PROJECTS}>
      {/* Projects Grid */}
      <motion.div
        variants={staggerChildren}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {PROJECTS.map((project, idx) => (
          <ProjectCard
            key={idx}
            data={project}
          />
        ))}
      </motion.div>
    </Section>
  )
}
