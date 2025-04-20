import { FormFieldType } from '@/types/common'
import { CONSTANTS, LABELS } from './constants'

export const CONTACT_FIELDS: FormFieldType[] = [
  {
    name: CONSTANTS.NAME,
    label: LABELS.CONTACT_NAME,
    required: true,
  },
  {
    name: CONSTANTS.EMAIL,
    label: LABELS.CONTACT_EMAIL,
    required: true,
    spaceNotAllowed: true,
  },
  {
    type: 'textarea',
    name: CONSTANTS.MESSAGE,
    label: LABELS.CONTACT_MESSAGE,
    required: true,
  },
]
