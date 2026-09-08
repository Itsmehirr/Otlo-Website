import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import Statement from "@/components/Statement";
import ChatCard from "@/components/ChatCard";
import DealStack from "@/components/DealStack";
import StatsRow from "@/components/StatsRow";
import ParallaxBreak from "@/components/ParallaxBreak";
import Testimonials from "@/components/Testimonials";
import ControlSection from "@/components/ControlSection";
import NichePicker from "@/components/NichePicker";
import ImageMarquee from "@/components/ImageMarquee";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Placeholder from "@/components/Placeholder";
import { BREAK_IMAGES, FEATURE_IMAGES, STATEMENT_BG, STATS_BG } from "@/lib/stock-media";

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <main>
        <Hero />

        <section id="how" className="scroll-mt-24">
          <FeatureSection
            eyebrow="The street"
            heading="People find you before you've met them."
            body="Your community shouldn't depend on a feed built for cat videos. Otlo surfaces the right room to the right person — searchable, local, built for exactly this kind of gathering. Someone three streets over finds your run club before their feed ever would."
            statLead="No feed to game."
            statRest="Just proximity, format, and the people already looking for a room like yours."
            labelA="[IMAGE STICKY1A 4:5]"
            labelB="[IMAGE STICKY1B 4:5]"
            seedA={FEATURE_IMAGES.sticky1a}
            seedB={FEATURE_IMAGES.sticky1b}
          />
          <FeatureSection
            eyebrow="Your ground"
            heading="The room, without the 2,000-person ceiling."
            body="No exposed phone numbers. No invite link that outlives its intent. Members are organised by role and purpose, not one infinite scroll of noise — so the room that hit 2,000 people last month still feels like a room, not a wall."
            statLead="No member ceiling."
            statRest="Export works on day one, not just when you finally ask."
            labelA="[IMAGE STICKY2A 4:5]"
            labelB="[IMAGE STICKY2B 4:5]"
            seedA={FEATURE_IMAGES.sticky2a}
            seedB={FEATURE_IMAGES.sticky2b}
            reversed
            demo={
              <div className="rounded-xl border border-border bg-white p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-positive" />
                  <span className="text-eyebrow uppercase text-muted">Otlo &middot; Member read</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="rounded-lg bg-stone px-3 py-2.5 text-body-sm">
                    Priya&rsquo;s coming back for the third time.
                  </div>
                  <div className="rounded-lg bg-stone px-3 py-2.5 text-body-sm">
                    She hasn&rsquo;t RSVP&rsquo;d yet.
                  </div>
                  <div className="rounded-pill bg-charcoal text-cream px-3 py-2.5 text-body-sm text-center font-medium">
                    Send the nudge →
                  </div>
                </div>
              </div>
            }
          />
        </section>

        <Statement
          eyebrow="For community builders"
          lines={["The event is four hours.", "The community is the other 8,756."]}
          body="Most tools obsess over the four. Otlo obsesses over the rest — the second Tuesday someone comes back, the DM that turns into a regular, the format that's ready for its second city before you've thought to take it there."
          seed={STATEMENT_BG}
        />

        <ParallaxBreak label="[IMAGE BREAK 1]" seed={BREAK_IMAGES.break1} />

        <section id="deal" className="scroll-mt-24 max-w-content mx-auto px-6 py-section-md">
          <div className="text-center mb-12">
            <div className="text-eyebrow uppercase text-muted mb-4">For brands</div>
            <h2 className="text-h2-sm font-medium max-w-[560px] mx-auto">
              Where brands come for belonging instead of impressions.
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <ChatCard />
            <DealStack />
          </div>
        </section>

        <div className="relative bg-charcoal rounded-2xl m-4 max-960:m-3 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <Placeholder label="[IMAGE STATS BG]" seed={STATS_BG} className="w-full h-full rounded-none" />
          </div>
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

        {/* "About" in the nav still points to #pricing — retargeted here now
            that the pricing section is gone, so the link keeps working */}
        <div id="pricing" className="scroll-mt-24">
          <CTASection />
        </div>
      </main>
      <Footer />
    </>
  );
}
