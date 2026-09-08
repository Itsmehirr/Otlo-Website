import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import ChatCard from "@/components/ChatCard";
import DealStack from "@/components/DealStack";
import StatsRow from "@/components/StatsRow";
import ParallaxBreak from "@/components/ParallaxBreak";
import Testimonials from "@/components/Testimonials";
import ControlSection from "@/components/ControlSection";
import NichePicker from "@/components/NichePicker";
import ImageMarquee from "@/components/ImageMarquee";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Placeholder from "@/components/Placeholder";
import { BREAK_IMAGES, FEATURE_IMAGES, STATS_BG } from "@/lib/stock-media";

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <main>
        <Hero />

        <section id="how" className="scroll-mt-24">
          <FeatureSection
            eyebrow="[EYEBROW LABEL]"
            heading="[HOW SECTION 1 HEADING]"
            body="[HOW SECTION 1 BODY SENTENCE]"
            labelA="[IMAGE STICKY1A 4:5]"
            labelB="[IMAGE STICKY1B 4:5]"
            seedA={FEATURE_IMAGES.sticky1a}
            seedB={FEATURE_IMAGES.sticky1b}
          />
          <FeatureSection
            eyebrow="[EYEBROW LABEL]"
            heading="[HOW SECTION 2 HEADING]"
            body="[HOW SECTION 2 BODY SENTENCE]"
            labelA="[IMAGE STICKY2A 4:5]"
            labelB="[IMAGE STICKY2B 4:5]"
            seedA={FEATURE_IMAGES.sticky2a}
            seedB={FEATURE_IMAGES.sticky2b}
            reversed
          />
        </section>

        <ParallaxBreak label="[IMAGE BREAK 1]" seed={BREAK_IMAGES.break1} />

        <section id="deal" className="scroll-mt-24 max-w-content mx-auto px-6 py-section-md">
          <div className="text-center mb-12">
            <div className="text-eyebrow uppercase text-muted mb-4">[EYEBROW LABEL]</div>
            <h2 className="text-h2-sm font-medium">[DEAL SECTION HEADING]</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <ChatCard />
            <DealStack />
          </div>
        </section>

        <div className="relative bg-charcoal rounded-2xl mx-3 max-960:mx-2 overflow-hidden">
          <Placeholder label="[IMAGE STATS BG]" seed={STATS_BG} className="absolute inset-0 rounded-none opacity-30" />
          <div className="relative">
            <StatsRow />
          </div>
        </div>

        <ParallaxBreak label="[IMAGE BREAK 2]" seed={BREAK_IMAGES.break2} />

        <Testimonials />

        <ControlSection />

        <section id="niches" className="scroll-mt-24">
          <NichePicker />
        </section>

        <ImageMarquee />

        <PricingSection />

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
