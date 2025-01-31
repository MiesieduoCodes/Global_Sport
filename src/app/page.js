import Hero from '@/app/components/hero';
import NextMatch from '@/app/components/nextmatch';
import News from '@/app/components/news';
import TheTeam from '@/app/components/teams';
import Videos from '@/app/components/videos'
import SecondSlider from '@/app/components/secondhero';
const page = () => {
  return (
    <div>
      <Hero/>
      <NextMatch/>
      <Videos/>
      <News/>
      <SecondSlider/>
      <TheTeam/>
    </div>
  )
}

export default page;