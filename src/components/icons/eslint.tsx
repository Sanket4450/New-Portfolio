import { VALUES } from '@/lib/values'
import { IconProps } from '@/types/common'

export const ESLintIcon: React.FC<IconProps> = ({
  size = VALUES.ICON_SIZE,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      preserveAspectRatio="xMinYMin meet"
      viewBox="0 0 256 263"
      id="eslint">
      <path
        fill="#3A33D1"
        d="M100.034 262.106L.598 172.57 28.45 41.694 155.626.354l99.436 89.535-27.851 130.876-127.177 41.34zm-48.086-106.18l59.291 53.307 75.828-24.695 16.645-78.004-59.291-53.417-75.828 24.805-16.645 78.003z"></path>
      <path
        fill="#6464E2"
        d="M181.301 223.92H74.359l-53.525-92.69 53.525-92.69h106.942l53.525 92.69-53.525 92.69zM93.18 191.283h69.3l34.705-60.053-34.705-60.053h-69.3L58.584 131.23l34.596 60.053z"></path>
    </svg>
  )
}
