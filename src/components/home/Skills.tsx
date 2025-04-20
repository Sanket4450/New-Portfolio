import { CONSTANTS, HASH_PATHS, LABELS } from '@/lib/constants'
import { SKILLS } from '@/data/skills'
import { SkillCategory } from './skill-category'
import { Section } from '../layout/section'

export const Skills = () => {
  return (
    <Section
      size="lg"
      id={HASH_PATHS.SKILLS}
      title={LABELS.SKILLS}>
      <>
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
      </>
    </Section>
  )
}
