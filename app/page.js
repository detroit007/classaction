import { Companies } from '@/components/pages/Companies/page'
import { HeroSection } from '@/components/pages/HeroSection/page'
import { PartnerSection } from '@/components/pages/PartnerSection/page'
import { SecondHero } from '@/components/pages/SecondHero/page'
import { SkillSection } from '@/components/pages/SkillSection/page'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='container mx-auto'>
      <HeroSection/>
      <Companies/>
      <SecondHero/>
      <SkillSection/>
      <PartnerSection/>
    </div>
  )
}
