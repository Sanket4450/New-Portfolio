import { motion } from 'motion/react'
import { getFadeInUp } from '@/lib/data'
import { Experience } from '@/types/common'
import { VALUES } from '@/lib/values'
import { ExperienceRoles } from './experience-roles'
import { EXP_SECTIONS } from '@/data/experiences'
import { CONSTANTS } from '@/lib/constants'
import { memo } from 'react'

interface Props {
  currentIdx: number
  data: Experience
}

const fadeInUp = getFadeInUp()

export const ExperienceCard: React.FC<Props> = memo(({ currentIdx, data }) => {
  return (
    <motion.div variants={fadeInUp}>
      {/* Company Logo and Details */}
      <div className="flex gap-2 items-start">
        <img
          src={data.company.logo}
          alt={`${data.company.name} Logo`}
          width={VALUES.COMPANY_LEFT_SECTION_WIDTH}
          className="object-cover rounded-xs"
        />

        <div className="h-full flex-col justify-between -mt-1">
          <h3 className="text-xl font-bold">{data.company.name}</h3>
          <p className="text-sm text-muted-text">
            {data.roles[0].title} ·{' '}
            {data.roles[0].startDate === data.roles[0].endDate
              ? 'Present'
              : `${new Date(data.roles[0].startDate).toLocaleDateString(
                  'en-US',
                  {
                    month: 'short',
                    year: 'numeric',
                  }
                )} - ${
                  data.roles[0].endDate === CONSTANTS.CURRENT
                    ? 'Present'
                    : new Date(data.roles[0].endDate).toLocaleDateString(
                        'en-US',
                        {
                          month: 'short',
                          year: 'numeric',
                        }
                      )
                }`}
          </p>

          <p className="text-sm text-muted-text">{data.company.location}</p>
        </div>
      </div>

      {/* Roles */}
      <ExperienceRoles data={data.roles} />

      {EXP_SECTIONS.length > 1 && currentIdx !== EXP_SECTIONS.length - 1 && (
        <div className="mt-4 border-b border-muted-text opacity-30" />
      )}
    </motion.div>
  )
})
