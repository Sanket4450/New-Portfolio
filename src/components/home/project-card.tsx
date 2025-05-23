import { motion } from 'motion/react'
import { Folder } from 'lucide-react'
import { getFadeInUp } from '@/lib/data'
import { Project } from '@/types/common'
import { GithubIcon } from '../icons/github'
import { VALUES } from '@/lib/values'
import { memo } from 'react'

interface Props {
  data: Project
}

const fadeInUp = getFadeInUp()

export const ProjectCard: React.FC<Props> = memo(({ data }) => {
  return (
    <motion.div
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
          href={data.github}
          target="_blank"
          rel="noopener noreferrer">
          <GithubIcon size={48} />
        </a>
      </div>

      {/* data Title */}
      <div className="flex items-center gap-2">
        <h3 className="shrink-0 flex items-center text-xl font-bold overflow-hidden whitespace-nowrap">
          {data.title}
        </h3>
        {data.subTitle && (
          <p className="mt-1 text-sm text-muted-text font-semibold">
            - {data.subTitle}
          </p>
        )}
      </div>

      {/* data Preview */}
      <img
        src={data.preview}
        width="100%"
        className="w-full rounded-xs"
      />

      {/* data Description */}
      <div className="flex-1 min-h-0 space-y-2 overflow-y-auto">
        {data.details.map((detail, subIdx) => (
          <p
            key={subIdx}
            className="text-sm text-muted-foreground">
            {detail}
          </p>
        ))}
      </div>

      {/* Technologies */}
      <div className="w-full flex flex-wrap gap-2">
        {data.technologies.map((tech, idx) => (
          <span
            key={idx}
            className="bg-muted text-[13px] font-medium px-2 py-1 rounded-sm">
            {tech.title}
          </span>
        ))}
      </div>
    </motion.div>
  )
})
