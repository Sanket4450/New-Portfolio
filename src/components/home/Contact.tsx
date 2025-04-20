import { ChangeEventHandler, FormEventHandler, useState } from 'react'
import { motion } from 'motion/react'
import { SectionTitle } from '../layout/section-title'
import { CONSTANTS, HASH_PATHS, LABELS } from '@/lib/constants'
import { ActionBtn } from '../ActionBtn'
import { CONTACT_FIELDS } from '@/lib/form-data'
import { getFadeInUp, getStaggerChildren } from '@/lib/data'
import { PERSONAL_INFO_LINKS } from '@/data/personal-info'

const fadeInUp = getFadeInUp()
const staggerChildren = getStaggerChildren()

const initialContactData = {
  [CONSTANTS.NAME]: '',
  [CONSTANTS.EMAIL]: '',
  [CONSTANTS.MESSAGE]: '',
}

export const Contact = () => {
  const [formData, setFormData] = useState(initialContactData)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Handle form input changes
  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  // Handle form submission
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    console.log('Form Data Submitted:', formData)
    setIsSubmitted(true)
    setFormData(initialContactData)
  }

  return (
    <motion.div
      id={HASH_PATHS.CONTACT}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
      className="py-16 px-4 md:px-8 lg:px-16 max-w-4xl mx-auto">
      {/* Section Title */}
      <SectionTitle
        title={LABELS.CONTACT}
        description={LABELS.CONTACT_PUNCHLINE}
      />

      {/* Ready-Made Buttons */}
      <motion.div
        variants={fadeInUp}
        className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
        <ActionBtn
          type="link"
          href={PERSONAL_INFO_LINKS.email}
          child={LABELS.EMAIL_ME}
        />

        <ActionBtn
          type="link"
          variant="secondary"
          href={PERSONAL_INFO_LINKS.phone}
          child={LABELS.CALL_ME}
        />
      </motion.div>

      {/* Get in Touch Form */}
      <motion.div
        variants={fadeInUp}
        className="p-8">
        <h3 className="text-2xl font-bold text-center mb-6">
          {LABELS.GET_IN_TOUCH}
        </h3>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="w-full space-y-4 mb-6">
            {CONTACT_FIELDS.map((f) => (
              <motion.input
                key={f.name}
                variants={fadeInUp}
                type="text"
                id={f.name}
                name={f.name}
                value={formData[f.name]}
                placeholder={f.label}
                onChange={handleChange}
                required={f.required}
                autoComplete="off"
                className="w-full text-sm px-4 py-2 font-semibold rounded-xl placeholder:text-sm border border-foreground focus:outline-none focus:border-primary"
              />
            ))}
          </motion.div>

          {/* Submit Button */}
          <ActionBtn
            type="submit"
            child={LABELS.SUBMIT}
          />
        </form>

        {/* Success/Info Message */}
        {isSubmitted && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-primary text-center mt-4">
            {LABELS.CONTACT_FORM_SUCCESS}
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  )
}
