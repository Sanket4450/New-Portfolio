import { CONSTANTS, HASH_PATHS, LABELS } from '@/lib/constants'
import { SectionTitle } from '../layout/section-title'
import { SKILLS } from '@/data/skills'
import { SkillCategory } from './skill-category'

export const Skills = () => {
  return (
    <section
      id={HASH_PATHS.SKILLS}
      className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Main Section Title */}
        <SectionTitle title={LABELS.SKILLS} />

        {/* Frontend Skills */}
        <SkillCategory
          title="Frontend"
          skills={SKILLS[CONSTANTS.FRONTEND]}
        />

        {/* Backend Skills */}
        <SkillCategory
          title="Backend"
          skills={SKILLS[CONSTANTS.BACKEND]}
        />

        {/* Cloud & DevOps Skills */}
        <SkillCategory
          title="Cloud & DevOps"
          skills={SKILLS[CONSTANTS.CLOUD_AND_DEVOPS]}
        />

        {/* Tools Skills */}
        <SkillCategory
          title="Tools"
          skills={SKILLS[CONSTANTS.TOOLS]}
        />
      </div>
    </section>
  )
}
