import { useEffect, useState } from 'react';
import { SoundProvider } from '@/context/SoundContext';
import { ScrollTrigger } from '@/utils/gsap';
import { Preloader } from '@/components/common';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ApiSection, Cta, Hero, Industry, Partners, Stats, Suite, WhyUs } from '@/components/sections';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded) return;
    ScrollTrigger.refresh();
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
  }, [isLoaded]);

  return (
    <SoundProvider>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Preloader onComplete={() => setIsLoaded(true)} />
      <Header />

      <main id="main">
        <Hero isReady={isLoaded} />
        <Partners />
        <Stats />
        <Suite />
        <WhyUs />
        <ApiSection />
        <Industry />
        <Cta />
      </main>

      <Footer />
    </SoundProvider>
  );
}
