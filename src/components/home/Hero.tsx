import { PERSONAL_INFO, SOCIAL_MEDIA_ICONS } from '@/data/personal-info'
import { HASH_PATHS, LABELS } from '@/lib/constants'
import { VALUES } from '@/lib/values'
import { motion } from 'motion/react'
import { Illustration } from '../icons/illustration'
import { getFadeInUp, getStaggerChildren } from '@/lib/data'
import { ActionBtn } from '../ActionBtn'

const fadeInUp = getFadeInUp()
const staggerChildren = getStaggerChildren()

export const Hero = () => {
  return (
    <section
      id={HASH_PATHS.HOME}
      className="w-full h-[100svh] flex items-center justify-between"
      style={{
        padding: `0 ${VALUES.LAYOUT_PADDING}px`,
      }}>
      {/* Left Side (Text Content) */}
      <div className="w-full md:w-1/2">
        <motion.div
          variants={staggerChildren}
          initial="initial"
          animate="animate"
          className="space-y-4">
          {/* Hello Message */}
          <motion.h3
            variants={fadeInUp}
            className="text-xl font-light">
            Hello 👋, I'm
          </motion.h3>

          {/* Name */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl font-bold">
            {PERSONAL_INFO.fullName}
          </motion.h1>

          {/* Job Title */}
          <motion.p
            variants={fadeInUp}
            className="text-xl font-semibold text-green-500">
            {PERSONAL_INFO.designation}
          </motion.p>

          {/* Experience */}
          <motion.p
            variants={fadeInUp}
            className="text-lg font-light">
            {PERSONAL_INFO.yearOfExp} Year Experience
          </motion.p>

          {/* Contact Button */}
          <ActionBtn
            child={LABELS.CONTACT}
            className="text-[15px] px-4 py-2 mt-4"
          />

          {/* Social Icons */}
          <motion.div
            variants={fadeInUp}
            className="flex space-x-4 mt-4">
            {SOCIAL_MEDIA_ICONS.map((i, idx) => (
              <a
                key={idx}
                href={i.url}
                target="_blank"
                className="text-primary hover:text-primary-foreground">
                <i.icon size={VALUES.SOCIAL_ICON_SIZE} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Right Side (Illustration) */}
      <div className="w-full md:w-1/2 flex justify-end">
        <motion.div
          className="max-w-full h-auto"
          variants={fadeInUp}
          initial="initial"
          animate="animate">
          <Illustration />
        </motion.div>
      </div>
    </section>
  )
}
