import { VALUES } from '@/lib/values'
import { Icon } from '@/types/common'
import { memo } from 'react'

interface Props {
  data: Icon
}

export const SocialIcon: React.FC<Props> = memo(({ data }) => {
  return (
    <a
      href={data.url}
      target="_blank"
      className="text-primary hover:text-primary-foreground">
      <data.icon size={VALUES.SOCIAL_ICON_SIZE} />
    </a>
  )
})
