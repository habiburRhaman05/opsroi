import Header from '@/src/components/layout/Header';
import Hero from '@/src/components/pages/home-page/Hero';
import TrustCarousel from '@/src/components/shared/TrustCarousel';
import FeatureTabs from '@/src/components/shared/FeatureTabs';
import Services from '@/src/components/shared/Services';
import HowItWorks from '@/src/components/pages/home-page/HowItWorks';
import Founders from '@/src/components/pages/home-page/Founders';
import Compare from '@/src/components/shared/Compare';
import Testimonials from '@/src/components/shared/Testimonials';
import Integrations from '@/src/components/pages/home-page/Integrations';
import Pricing from '@/src/components/shared/Pricing';
import Cta from '@/src/components/pages/home-page/Cta';
import Faq from '@/src/components/pages/home-page/Faq';
import Contact from '@/src/components/shared/Contact';
import Footer from '@/src/components/layout/Footer';
import {Calculator} from '@/src/components/pages/home-page/Calculator';
import HeroSection from '../components/pages/home-page/hero-banner';
import { Club } from '../components/pages/home-page/Club';
import { StraightTalk } from '../components/pages/home-page/StraightTalk';
import { ComparisonTable } from '../components/pages/home-page/ComparisonTable';
import { Platform } from '../components/pages/home-page/Platform';

export default function Home() {
  return (
    <>
  
   
      <main>
        <Hero />
        <Platform/>
        <HowItWorks />
        <Founders />
        <ComparisonTable/>
        <Calculator/>
        <Club />
        <StraightTalk/>
        <Integrations />
        <Cta />
        <Faq />
        <Contact />
      </main>
  
    </>
  );
}
