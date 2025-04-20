import { EXP_SECTIONS } from '@/data/experiences'
import { CONSTANTS, HASH_PATHS, LABELS } from '@/lib/constants'
import { getFadeInUp, getStaggerChildren } from '@/lib/data'
import { motion } from 'motion/react'
import { SectionTitle } from '../layout/section-title'
import { VALUES } from '@/lib/values'
import { Bolt, Dot } from 'lucide-react'

const fadeInUp = getFadeInUp()
const staggerChildren = getStaggerChildren()

export const Experience = () => {
  return (
    <section
      id={HASH_PATHS.EXPERIENCE}
      className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <SectionTitle title={LABELS.EXPERIENCE} />

        {/* Experience List */}
        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-4">
          {EXP_SECTIONS.map((section, sIdx) => (
            <motion.div
              key={sIdx}
              variants={fadeInUp}>
              {/* Company Logo and Details */}
              <div className="flex gap-2 items-start">
                <img
                  src={section.company.logo}
                  alt={`${section.company.name} Logo`}
                  width={VALUES.COMPANY_LEFT_SECTION_WIDTH}
                  className="object-cover rounded-xs"
                />

                <div className="h-full flex-col justify-between -mt-1">
                  <h3 className="text-xl font-bold">{section.company.name}</h3>
                  <p className="text-sm text-muted-text">
                    {section.roles[0].role} ·{' '}
                    {section.roles[0].start === section.roles[0].end
                      ? 'Present'
                      : `${new Date(section.roles[0].start).toLocaleDateString(
                          'en-US',
                          { month: 'short', year: 'numeric' }
                        )} - ${
                          section.roles[0].end === CONSTANTS.CURRENT
                            ? 'Present'
                            : new Date(section.roles[0].end).toLocaleDateString(
                                'en-US',
                                { month: 'short', year: 'numeric' }
                              )
                        }`}
                  </p>

                  <p className="text-sm text-muted-text">
                    {section.company.location}
                  </p>
                </div>
              </div>

              {/* Roles */}
              <motion.div
                variants={staggerChildren}
                className="mt-3">
                {section.roles.map((role, rIdx) => (
                  <motion.div
                    key={rIdx}
                    variants={fadeInUp}
                    className="flex gap-2">
                    <div
                      className="flex flex-col items-center"
                      style={{
                        width: VALUES.COMPANY_LEFT_SECTION_WIDTH,
                      }}>
                      {section.roles.length > 1 && (
                        <>
                          <Dot
                            size={44}
                            color="var(--muted-text)"
                            className="opacity-70 -mt-2"
                          />

                          {rIdx !== section.roles.length - 1 && (
                            <div className="flex-1 border-l-2 border-muted-text opacity-30 -mt-2" />
                          )}
                        </>
                      )}
                    </div>

                    <div
                      className={`${
                        rIdx !== section.roles.length - 1 ? 'pb-6' : ''
                      }`}>
                      {/* Role Title */}
                      <h4 className="text-lg font-semibold">{role.role}</h4>

                      {/* Dates */}
                      <p className="text-sm text-muted-text">
                        {new Date(role.start).toLocaleDateString('en-US', {
                          month: 'short',
                          year: 'numeric',
                        })}{' '}
                        -{' '}
                        {role.end === CONSTANTS.CURRENT
                          ? 'Present'
                          : new Date(role.end).toLocaleDateString('en-US', {
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

              {EXP_SECTIONS.length > 1 && sIdx !== EXP_SECTIONS.length - 1 && (
                <div className="mt-4 border-b border-muted-text opacity-30" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
