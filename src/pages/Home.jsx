import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import About from '../components/About';
import Courses from '../components/Courses';
import WhyChooseUs from '../components/WhyChooseUs';
import LearningExperience from '../components/LearningExperience';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Location from '../components/Location';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppFAB from '../components/WhatsAppFAB';
import MobileCTABar from '../components/MobileCTABar';

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <Hero />
        <TrustBar />
        <About />
        <Courses />
        <WhyChooseUs />
        <LearningExperience />
        <Gallery />
        <Testimonials />
        <Location />
        <Contact />
      </main>

      <Footer />

      {/* Floating elements */}
      <WhatsAppFAB />
      <MobileCTABar />
    </>
  );
}
