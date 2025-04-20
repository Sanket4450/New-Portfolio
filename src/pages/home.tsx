import { useLocation } from 'react-router'

import { AboutMe } from '@/components/home/About'
import { Contact } from '@/components/home/Contact'
import { Experience } from '@/components/home/Experience'
import { Hero } from '@/components/home/Hero'
import { Projects } from '@/components/home/Projects'
import { Skills } from '@/components/home/Skills'
import { useEffect } from 'react'
import { HASH_PATHS } from '@/lib/constants'

const Home = () => {
  const { hash } = useLocation()

  useEffect(() => {
    const element = document.getElementById(hash || HASH_PATHS.HOME)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [hash])

  return (
    <>
      <Hero />
      <AboutMe />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default Home
