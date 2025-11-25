import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TutorSection } from './components/TutorSection';
import { FeatureSection1 } from './components/FeatureSection1';
import { FeatureSection2 } from './components/FeatureSection2';
import { AppDownloadSection } from './components/AppDownloadSection';
import { PricingSection } from './components/PricingSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <TutorSection />
      <FeatureSection1 />
      <FeatureSection2 />
      <AppDownloadSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}
