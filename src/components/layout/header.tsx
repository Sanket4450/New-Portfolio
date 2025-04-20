import { Link } from 'react-router'
import { VALUES } from '@/lib/values'
import { PERSONAL_INFO } from '@/data/personal-info'
import { cn } from '@/lib/utils'
import { Navbar } from '../home/navbar'

export const Header = () => {
  return (
    <header
      className={cn(
        'fixed top-0 z-10 bg-layer w-full flex justify-between items-center',
        VALUES.PADDING_CLASS
      )}
      style={{
        height: VALUES.HEADER_HEIGHT,
        backdropFilter: `blur(${VALUES.BACKDROP_BLUR}px)`,
      }}>
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-bold">
        <span className="text-primary">{'<'}</span>
        {PERSONAL_INFO.fullName}
        <span className="text-primary">/{'>'}</span>
      </Link>

      {/* Navigation */}
      <Navbar />
    </header>
  )
}
