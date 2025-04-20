import { useTheme } from '@/context/theme-context'
import { Switch } from '../ui/switch'

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme()

  const checked = theme === 'dark'

  const onChange = () => {
    setTheme(checked ? 'light' : 'dark')
  }

  return (
    <Switch
      size="lg"
      checked={checked}
      onClick={onChange}
    />
  )
}
