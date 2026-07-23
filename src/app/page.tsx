import Header from '@/src/components/Header';
import Hero from '@/src/components/Hero';
import TrustCarousel from '@/src/components/TrustCarousel';
import FeatureTabs from '@/src/components/FeatureTabs';
import Services from '@/src/components/Services';
import HowItWorks from '@/src/components/HowItWorks';
import Founders from '@/src/components/Founders';
import Compare from '@/src/components/Compare';
import Testimonials from '@/src/components/Testimonials';
import Integrations from '@/src/components/Integrations';
import Pricing from '@/src/components/Pricing';
import Cta from '@/src/components/Cta';
import Faq from '@/src/components/Faq';
import Contact from '@/src/components/Contact';
import Footer from '@/src/components/Footer';
import {Calculator} from '@/src/components/Calculator';
import HeroSection from '../components/hero-banner';

export default function Home() {
  return (
    <>
  
      <Header />
      <main>
        <Hero />
        {/* <HeroSection/> */}
        {/* <TrustCarousel /> */}
        <FeatureTabs />
        <Services />
        <HowItWorks />
      
        <Founders />
        <Compare />
        <Testimonials />
        <Calculator/>
        {/* <Pricing /> */}
        <Cta />
        <Integrations />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
