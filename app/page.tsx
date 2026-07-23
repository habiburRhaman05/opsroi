import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustCarousel from '@/components/TrustCarousel';
import FeatureTabs from '@/components/FeatureTabs';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import Founders from '@/components/Founders';
import Compare from '@/components/Compare';
import Testimonials from '@/components/Testimonials';
import Integrations from '@/components/Integrations';
import Pricing from '@/components/Pricing';
import Cta from '@/components/Cta';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import {Calculator} from '@/components/Calculator';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustCarousel />
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
