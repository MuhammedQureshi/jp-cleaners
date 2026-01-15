import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { BeforeAfter } from './components/BeforeAfter';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhoWeAre } from './components/About';
import ServicesList from './components/ServiceList';
import ServiceBenefits from './components/WhyUs';
import CleaningServiceFeatures from './components/Stats';
import CTA from './components/Cta';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <WhoWeAre />
      <ServicesList />
      <Services />
      <CTA />             
      <ServiceBenefits />
      <CleaningServiceFeatures />
      <BeforeAfter />
      <Contact />
      <Footer />
    </div>
  );
}
