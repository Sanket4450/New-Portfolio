import { getFadeInUp, getStaggerChildren } from '@/lib/data'
import { motion } from 'motion/react'

interface SectionTitleProps {
  title: string
  description?: string
}

const fadeInUp = getFadeInUp()
const staggerChildren = getStaggerChildren()

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  description,
}) => {
  return (
    <motion.div
      variants={staggerChildren}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="mb-8">
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-4xl text-primary font-bold text-center">
        {title}
      </motion.h2>

      {description && (
        <motion.p
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-[15px] text-muted-text text-center mt-1.5">
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}
