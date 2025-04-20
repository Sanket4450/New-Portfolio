import { motion } from 'motion/react'
import { getFadeInUp, getStaggerChildren } from '@/lib/data'
import { Role } from '@/types/common'
import { VALUES } from '@/lib/values'
import { Bolt, Dot } from 'lucide-react'
import { CONSTANTS } from '@/lib/constants'

interface Props {
  data: Role[]
}

const fadeInUp = getFadeInUp()
const staggerChildren = getStaggerChildren()

export const ExperienceRoles: React.FC<Props> = ({ data }) => {
  return (
    <motion.div
      variants={staggerChildren}
      className="mt-3">
      {data.map((role, rIdx) => (
        <motion.div
          key={rIdx}
          variants={fadeInUp}
          className="flex gap-2">
          <div
            className="flex flex-col items-center"
            style={{
              width: VALUES.COMPANY_LEFT_SECTION_WIDTH,
            }}>
            {data.length > 1 && (
              <>
                <Dot
                  size={44}
                  color="var(--muted-text)"
                  className="opacity-70 -mt-2"
                />

                {rIdx !== data.length - 1 && (
                  <div className="flex-1 border-l-2 border-muted-text opacity-30 -mt-2" />
                )}
              </>
            )}
          </div>

          <div className={`${rIdx !== data.length - 1 ? 'pb-6' : ''}`}>
            {/* Role Title */}
            <h4 className="text-lg font-semibold">{role.title}</h4>

            {/* Dates */}
            <p className="text-sm text-muted-text">
              {new Date(role.startDate).toLocaleDateString('en-US', {
                month: 'short',
                year: 'numeric',
              })}{' '}
              -{' '}
              {role.endDate === CONSTANTS.CURRENT
                ? 'Present'
                : new Date(role.endDate).toLocaleDateString('en-US', {
                    month: 'short',
                    year: 'numeric',
                  })}
            </p>

            {/* Description */}
            <ul className="mt-2 text-sm space-y-1">
              {role.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>

            {/* Skills */}
            <div className="mt-2 flex items-center flex-wrap gap-2 text-sm font-semibold">
              <Bolt size={15} />
              {role.skills.map((skill) => skill.title).join(', ')}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
