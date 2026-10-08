import ScrollProgress from './components/ScrollProgress/ScrollProgress.jsx';
import Preloader from './components/Preloader/Preloader.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Work from './components/Work/Work.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import Services from './components/Services/Services.jsx';
import Experience from './components/Experience/Experience.jsx';
import FAQ from './components/FAQ/FAQ.jsx';
import Footer from './components/Footer/Footer.jsx';

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Testimonials />
        <Services />
        <Experience />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
