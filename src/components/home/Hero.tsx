import {
  PERSONAL_INFO,
  PERSONAL_INFO_LINKS,
  SOCIAL_MEDIA_ICONS,
} from '@/data/personal-info'
import { HASH_PATHS, LABELS } from '@/lib/constants'
import { motion } from 'motion/react'
import { Illustration } from '../icons/illustration'
import { getFadeInUp, getStaggerChildren } from '@/lib/data'
import { ActionBtn } from '../ActionBtn'
import { SocialIcon } from './social-icon'
import { cn } from '@/lib/utils'
import { VALUES } from '@/lib/values'

const fadeInUp = getFadeInUp()
const staggerChildren = getStaggerChildren()

export const Hero = () => {
  return (
    <section
      id={HASH_PATHS.HOME}
      className={cn(
        'h-[34rem] md:h-[100svh] w-full flex items-center justify-between',
        VALUES.PADDING_CLASS
      )}
      style={{ paddingTop: VALUES.HEADER_HEIGHT }}>
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
            className="text-xl 2xl:text-2xl font-light">
            Hello 👋, I'm
          </motion.h3>

          {/* Name */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl 2xl:text-6xl font-bold">
            {PERSONAL_INFO.fullName}
          </motion.h1>

          {/* Job Title */}
          <motion.p
            variants={fadeInUp}
            className="text-xl 2xl:text-2xl font-semibold text-green-500">
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
            type="link"
            href={PERSONAL_INFO_LINKS.phone}
            child={LABELS.CONTACT}
            className="text-[15px] 2xl:text-lg px-4 py-2 mt-4"
          />

          {/* Social Icons */}
          <motion.div
            variants={fadeInUp}
            className="flex space-x-4 mt-8">
            {SOCIAL_MEDIA_ICONS.map((i, idx) => (
              <SocialIcon
                key={idx}
                data={i}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Right Side (Illustration) */}
      <div className="max-xl:hidden w-full md:w-1/2 flex justify-end">
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
