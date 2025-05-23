import { VALUES } from '@/lib/values'
import { IconProps } from '@/types/common'

export const ElasticSearchIcon: React.FC<IconProps> = ({
  size = VALUES.ICON_SIZE,
}) => {
  return (
    <svg
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="elastic-search">
      <path
        fill="#F0BF1A"
        d="M22.74 4.68a5.692 5.692 0 0 1-4.38 2.07H2.42C4.37 2.76 8.47 0 13.22 0c3.88 0 7.32 1.84 9.52 4.68z"></path>
      <path
        fill="#3EBEB0"
        d="M22.78 19.27c-2.2 2.87-5.66 4.73-9.56 4.73-4.75 0-8.85-2.76-10.8-6.75h16.01c1.75 0 3.31.78 4.35 2.02z"></path>
      <path
        fill="#07A5DE"
        d="M20.38 12c0 1.88-1.54 3.38-3.37 3.38H1.71c-.32-1.07-.49-2.2-.49-3.38s.17-2.31.49-3.38h15.3c1.87 0 3.37 1.5 3.37 3.38z"></path>
      <path
        fill="#231F20"
        d="M12.13 12c0 1.24-.15 2.36-.41 3.38H1.71c-.32-1.07-.49-2.2-.49-3.38s.17-2.31.49-3.38h10.01c.26 1.02.41 2.14.41 3.38z"></path>
      <path
        fill="#D7A229"
        d="M7.182 1.613A12.35 12.35 0 0 0 2.42 6.75h8.85c-.9-2.062-2.325-3.788-4.088-5.137z"></path>
      <path
        fill="#019B8F"
        d="M7.557 22.575a13.373 13.373 0 0 0 3.975-5.325H2.42a12.358 12.358 0 0 0 5.137 5.325z"></path>
    </svg>
  )
}
