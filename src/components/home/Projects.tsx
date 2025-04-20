import { Folder } from 'lucide-react'
import { PROJECTS } from '@/data/projects'
import { getFadeInUp, getStaggerChildren } from '@/lib/data'
import { motion } from 'motion/react'
import { SectionTitle } from '../layout/section-title'
import { HASH_PATHS, LABELS } from '@/lib/constants'
import { GithubIcon } from '../icons/github'
import { VALUES } from '@/lib/values'

const fadeInUp = getFadeInUp()
const staggerChildren = getStaggerChildren(0.3)

export const Projects = () => {
  return (
    <section
      id={HASH_PATHS.PROJECTS}
      className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <SectionTitle title={LABELS.PROJECTS} />

        {/* Projects Grid */}
        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="bg-card rounded-lg p-4 flex flex-col space-y-4 shadow-md hover:shadow-lg transition-shadow duration-300"
              style={{ height: VALUES.PROJECT_CARD_HEIGHT }}>
              {/* Header */}
              <div className="flex items-center justify-between">
                {/* Folder Icon */}
                <Folder
                  size={48}
                  className="text-primary"
                />

                {/* GitHub Icon */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer">
                  <GithubIcon size={48} />
                </a>
              </div>

              {/* Project Title */}
              <h3 className="flex items-center text-xl font-bold overflow-hidden whitespace-nowrap">
                {project.title}
              </h3>

              {/* Project Description */}
              <div className="flex-1 min-h-0 space-y-2 overflow-y-auto">
                {project.details.map((detail, subIdx) => (
                  <p
                    key={subIdx}
                    className="text-sm text-muted-foreground">
                    {detail}
                  </p>
                ))}
              </div>

              {/* Technologies */}
              <div className="w-full flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-muted text-[13px] font-medium px-2 py-1 rounded-sm">
                    {tech.title}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
