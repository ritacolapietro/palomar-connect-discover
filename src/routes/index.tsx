import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Compass,
  Microscope,
  Users,
  LineChart,
  Leaf,
  GraduationCap,
  Heart,
} from "lucide-react";
import heroImage from "@/assets/hero-mediterranean.jpg";
import communityImage from "@/assets/experience-community.jpg";
import territoryImage from "@/assets/experience-territory.jpg";
import observationImage from "@/assets/experience-observation.jpg";
import regionImage from "@/assets/vision-region.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Palomar — Meaningful engagement through Mediterranean research" },
      {
        name: "description",
        content:
          "Palomar designs corporate engagement experiences that contribute to real Mediterranean research. Built for HR, ESG and culture leaders.",
      },
      {
        property: "og:title",
        content: "Palomar — Meaningful engagement through Mediterranean research",
      },
      {
        property: "og:description",
        content:
          "Transform employee engagement into science-based experiences across the Mediterranean.",
      },
      { property: "og:image", content: heroImage },
      { property: "og:url", content: "/" },
      { name: "twitter:image", content: heroImage },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
      {children}
    </span>
  );
}

function HomePage() {
  return (
    <main>
      {/* 1. HERO */}
      <section className="relative">
        <div className="grid lg:grid-cols-2 min-h-[88vh]">
          <div className="flex flex-col justify-center px-6 lg:px-16 py-20 lg:py-0 animate-fade-up">
            <Eyebrow>For HR · ESG · Culture leaders</Eyebrow>
            <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground text-balance">
              Engage your people.
              <br />
              <span className="italic">Understand</span> the
              <br />
              Mediterranean.
            </h1>
            <p className="mt-8 max-w-md text-lg text-muted-foreground text-pretty leading-relaxed">
              Palomar designs corporate experiences that turn employee engagement into
              meaningful action — connecting your teams to the territories, communities and
              cultures of the Mediterranean.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:bg-accent transition-colors"
              >
                For companies
                <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#solution"
                className="inline-flex items-center px-7 py-3.5 border border-border text-foreground text-sm font-medium rounded-full hover:bg-secondary transition-colors"
              >
                Learn more
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden bg-secondary order-first lg:order-last min-h-[40vh] lg:min-h-full">
            <img
              src={heroImage}
              alt="Mediterranean coastal landscape with hillside village"
              className="absolute inset-0 h-full w-full object-cover"
              width={1080}
              height={1920}
            />
            <div className="absolute bottom-6 right-6 bg-background/80 backdrop-blur-sm rounded-md px-4 py-3 text-[10px] font-mono uppercase tracking-widest text-foreground/70 hidden md:block">
              Mediterranean region
            </div>
          </div>
        </div>
      </section>

      {/* 2. VALUE — the corporate challenge */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 border-t border-border">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Eyebrow>The challenge</Eyebrow>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-balance">
              Engagement and sustainability often live in
              <span className="italic"> separate rooms</span>.
            </h2>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              HR teams look for experiences that bring people together. ESG teams look for
              tangible, credible impact. Most programs deliver one without the other.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SOLUTION — what Palomar does (no "citizen science" yet) */}
      <section id="solution" className="py-24 lg:py-32 px-6 lg:px-16 bg-secondary">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-6 font-display text-3xl md:text-4xl lg:text-5xl leading-tight">
              Experiences that <span className="italic">connect</span> people to place.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
              We design hands-on programs where your teams explore Mediterranean territories
              and communities, learn from local context, and contribute to a shared body of
              knowledge.
            </p>
            <ul className="mt-10 space-y-4">
              {[
                { icon: Compass, label: "Guided exploration" },
                { icon: GraduationCap, label: "Hands-on learning" },
                { icon: Users, label: "Community encounters" },
                { icon: Leaf, label: "Real contribution" },
              ].map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-4">
                  <span className="flex size-10 items-center justify-center rounded-full bg-background border border-border">
                    <Icon className="size-4 text-accent" />
                  </span>
                  <span className="text-foreground font-medium">{label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/5] rounded-md overflow-hidden">
            <img
              src={observationImage}
              alt="A field notebook with handwritten observations"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              width={900}
              height={1200}
            />
          </div>
        </div>
      </section>

      {/* 4. EXPERIENCE — curiosity & discovery */}
      <section className="py-24 lg:py-32 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-16">
            <Eyebrow>The experience</Eyebrow>
            <h2 className="mt-6 font-display text-3xl md:text-4xl lg:text-5xl leading-tight">
              Curiosity, in the <span className="italic">field</span>.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              People exploring environments and meeting communities. Learning a territory
              from the inside. Working together on something real, beyond the office walls.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { src: territoryImage, title: "Environment", caption: "A territory, observed." },
              { src: communityImage, title: "Community", caption: "People, in conversation.", offset: true },
              { src: observationImage, title: "Knowledge", caption: "Notes that matter." },
            ].map(({ src, title, caption, offset }) => (
              <figure
                key={title}
                className={`space-y-4 ${offset ? "md:mt-12" : ""}`}
              >
                <div className="aspect-[3/4] overflow-hidden rounded-md bg-secondary">
                  <img
                    src={src}
                    alt={caption}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    width={900}
                    height={1200}
                  />
                </div>
                <figcaption>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                    {title}
                  </span>
                  <p className="mt-2 font-display italic text-xl text-foreground">{caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONCEPT — citizen science reveal */}
      <section className="py-32 lg:py-40 px-6 lg:px-16 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
            The method
          </span>
          <h2 className="mt-8 font-display text-4xl md:text-5xl lg:text-6xl italic leading-[1.05]">
            This approach is called
            <br />
            citizen science.
          </h2>
          <p className="mt-10 text-lg md:text-xl text-primary-foreground/70 leading-relaxed max-w-2xl mx-auto">
            It is the practice of involving people outside the academic world in real
            scientific research. Through Palomar, your teams help collect data and
            observations that feed Mediterranean research institutions — turning a corporate
            experience into a credible scientific contribution.
          </p>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section id="how" className="py-24 lg:py-32 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="mt-6 font-display text-3xl md:text-4xl lg:text-5xl leading-tight">
              A simple, <span className="italic">guided</span> process.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {[
              {
                n: "01",
                title: "Alignment",
                body: "We map your engagement and ESG goals to active research projects.",
              },
              {
                n: "02",
                title: "Experience",
                body: "Your teams join guided field experiences with researchers and local partners.",
              },
              {
                n: "03",
                title: "Contribution",
                body: "Observations are validated and integrated into ongoing scientific studies.",
              },
              {
                n: "04",
                title: "Reporting",
                body: "You receive impact metrics ready for ESG reports and internal communication.",
              },
            ].map(({ n, title, body }) => (
              <div key={n} className="border-t border-border pt-6">
                <span className="font-mono text-xs text-accent">{n}</span>
                <h3 className="mt-3 font-display text-2xl text-foreground">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BUSINESS VALUE */}
      <section id="value" className="py-24 lg:py-32 px-6 lg:px-16 bg-secondary">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <Eyebrow>For companies</Eyebrow>
            <h2 className="mt-6 font-display text-3xl md:text-4xl lg:text-5xl leading-tight">
              A program that <span className="italic">earns its place</span> in HR and ESG.
            </h2>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: Heart,
                title: "Engagement",
                body: "Experiences people remember and talk about long after they end.",
              },
              {
                icon: LineChart,
                title: "ESG impact",
                body: "Verified contributions to research, ready to report.",
              },
              {
                icon: GraduationCap,
                title: "Learning",
                body: "Scientific literacy and a closer relationship with the natural world.",
              },
              {
                icon: Users,
                title: "Culture",
                body: "Shared purpose across teams, locations and roles.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-background rounded-md p-7 border border-border">
                <Icon className="size-5 text-accent" />
                <h3 className="mt-5 font-display text-xl text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. VISION */}
      <section id="vision" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={seaImage}
            alt="A sailing vessel on the deep Mediterranean"
            className="h-full w-full object-cover"
            loading="lazy"
            width={1600}
            height={1000}
          />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        <div className="relative py-32 lg:py-48 px-6 lg:px-16 text-primary-foreground">
          <div className="max-w-3xl mx-auto text-center">
            <Eyebrow>Our vision</Eyebrow>
            <h2 className="mt-8 font-display text-4xl md:text-5xl lg:text-6xl italic leading-[1.1]">
              A Mediterranean of companies, people and researchers — together.
            </h2>
            <p className="mt-10 text-lg text-primary-foreground/80 max-w-xl mx-auto leading-relaxed">
              We believe the future of this sea will be written by those who choose to
              understand it. Palomar is the bridge that brings them into the same room.
            </p>
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section id="contact" className="py-24 lg:py-32 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <Eyebrow>Start a conversation</Eyebrow>
              <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                Ready to design your <span className="italic">first pilot</span>?
              </h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
                Tell us about your team and your goals. We'll come back with a
                tailored proposal within a few days.
              </p>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <a
                href="mailto:hello@palomar.co"
                className="group inline-flex items-center gap-3 px-7 py-4 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:bg-accent transition-colors"
              >
                <Microscope className="size-4" />
                Plan a pilot
                <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
