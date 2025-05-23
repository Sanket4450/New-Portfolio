import { VALUES } from '@/lib/values'
import { IconProps } from '@/types/common'

export const EC2Icon: React.FC<IconProps> = ({ size = VALUES.ICON_SIZE }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 256 310"
      id="aws">
      <path
        fill="#F68536"
        d="M42.754 244.495l-29.918 6.826V57.565l29.918 6.839v180.091"></path>
      <path
        fill="#F68536"
        d="M80.082 255.931l-37.328 10.608V42.612l37.328 10.595v202.724M127.966 267.681l-47.884 17.524V23.946l47.884 17.516v226.219M256 245.079l-128.034 64.017V0L256 64.017v181.062"></path>
      <path
        fill="#9D5025"
        d="M102.444 12.763L127.966 0v309.096l-25.522-12.759V12.763M60.325 33.82l19.757-9.878v261.212l-19.757-9.878V33.82M27.016 50.477l15.738-7.869v223.88l-15.738-7.874V50.477M12.836 57.565L0 63.983v181.134l12.836 6.414V57.565"></path>
    </svg>
  )
}
