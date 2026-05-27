import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Microscope,
  Users,
  LineChart,
  GraduationCap,
  Heart,
  ClipboardList,
  Compass,
  ShieldCheck,
  FileBarChart,
  Leaf,
  Building2,
  UtensilsCrossed,
  HeartHandshake,
  
  Sparkles,
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
    <span className="text-[10px] uppercase tracking-[0.22em] text-accent font-mono">
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
          <div className="flex flex-col justify-center px-6 lg:px-16 py-20 lg:py-0 animate-fade-up bg-teal-100 font-sans text-center font-bold">
            <Eyebrow>​</Eyebrow>
            <h1 className="mt-6 font-display md:text-6xl lg:text-7xl leading-[1.05] text-foreground text-balance font-sans font-bold text-xl bg-teal-200">
              Engage your people.
              <br />
              <span className="italic">Understand</span> the
              <br />
              Mediterranean.
            </h1>
            <p className="mt-8 max-w-md text-muted-foreground text-pretty leading-relaxed font-serif text-xl">
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
                href="#how"
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

      {/* 2. FOR COMPANIES */}
      <section id="companies" className="py-24 lg:py-32 px-6 lg:px-16 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <Eyebrow>For companies</Eyebrow>
              <h2 className="mt-6 font-display text-3xl md:text-4xl lg:text-5xl leading-tight">
                A program that <span className="italic">earns its place</span> in HR and ESG.
              </h2>
              <p className="mt-6 text-base text-muted-foreground leading-relaxed">
                We co-design a field experience with our scientific partners, run it with
                your team on a real Mediterranean site, validate the data with researchers,
                and deliver reporting your sustainability team can actually use.
              </p>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Heart,
                  title: "Meaningful engagement",
                  body: "Field experiences your people remember and talk about long after they end.",
                },
                {
                  icon: Microscope,
                  title: "Science-based credibility",
                  body: "Protocols co-designed with researchers, validated by scientific partners.",
                },
                {
                  icon: LineChart,
                  title: "ESG alignment",
                  body: "Primary data and KPIs mapped to ESRS, CSRD and GRI frameworks.",
                },
                {
                  icon: GraduationCap,
                  title: "Learning & skills",
                  body: "A closer understanding of environments, communities and cultures.",
                },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="bg-background rounded-2xl p-7 border border-border">
                  <Icon className="size-5 text-accent" />
                  <h3 className="mt-5 font-display text-xl text-foreground">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Reporting outputs */}
          <div className="mt-20 pt-16 border-t border-border">
            <div className="max-w-2xl mb-12">
              <Eyebrow>What you receive</Eyebrow>
              <h3 className="mt-4 font-display text-2xl md:text-3xl lg:text-4xl leading-tight">
                Reporting outputs, ready to use.
              </h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Executive summary",
                  body: "What was measured, where, by whom and with which methodology — in plain language.",
                },
                {
                  title: "KPI mapping",
                  body: "Cross-walk to ESRS, CSRD and GRI, with methodological references attached.",
                },
                {
                  title: "Scientific validation",
                  body: "Protocols and datasets reviewed and validated by our research partners.",
                },
                {
                  title: "Stakeholder materials",
                  body: "Extracts ready for sustainability reports, internal comms and social channels.",
                },
              ].map(({ title, body }) => (
                <div key={title} className="bg-background rounded-2xl p-6 border border-border">
                  <h4 className="font-display text-lg text-foreground">{title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section id="how" className="py-24 lg:py-32 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="mt-6 font-display text-3xl md:text-4xl lg:text-5xl leading-tight">
              Four steps, from research <span className="italic">to reporting</span>.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                n: "01",
                icon: ClipboardList,
                title: "Scientific Co-design",
                body: "We start from our scientific partners' research priorities and translate them into simple, structured protocols that non-experts can perform correctly. Participants receive a preliminary briefing or training session led by researchers to understand context, objectives and methods.",
              },
              {
                n: "02",
                icon: Compass,
                title: "Field Experience",
                body: "Your team spends half a day or more on a real site together with a researcher. The experience follows the rhythm of a workshop and the rigour of a scientific mission: briefing, data collection, debriefing and a guided moment of reflection on the researched themes.",
              },
              {
                n: "03",
                icon: ShieldCheck,
                title: "Scientific Validation",
                body: "Our research partners review all collected data, verify data points, discard outliers and ensure methodological consistency. Scientific responsibility and validation remain fully with the researchers.",
              },
              {
                n: "04",
                icon: FileBarChart,
                title: "Strategic Reporting",
                body: "We translate validated findings and participation metrics into primary-data KPIs relevant for companies. Outputs are mapped to ESRS, CSRD and sustainability reporting needs.",
              },
            ].map(({ n, icon: Icon, title, body }) => (
              <div
                key={n}
                className="bg-secondary rounded-2xl p-7 border border-border flex flex-col"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-accent">{n}</span>
                  <Icon className="size-5 text-accent" />
                </div>
                <h3 className="mt-6 font-display text-xl text-foreground leading-snug">
                  {title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          {/* Citizen science — dark feature block */}
          <div className="mt-20 relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0">
              <img
                src={observationImage}
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/85" />
            </div>
            <div className="relative py-20 lg:py-24 px-8 lg:px-16 text-primary-foreground grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <span className="text-[10px] uppercase tracking-[0.22em] text-accent font-mono">
                  The method
                </span>
                <h3 className="mt-4 font-display text-3xl md:text-4xl leading-tight italic">
                  Citizen science, structured for companies.
                </h3>
              </div>
              <div className="lg:col-span-8 flex items-center">
                <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed">
                  Citizen science is the practice of involving people outside the academic
                  world in real research. Palomar makes it usable for organisations: guided
                  participation on Mediterranean territories, scientific protocols co-designed
                  with research institutions, and a structured process that turns a field day
                  into validated data and reporting-ready outputs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROJECTS */}
      <section id="projects" className="py-24 lg:py-32 px-6 lg:px-16 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
            <div className="lg:col-span-7">
              <Eyebrow>Projects</Eyebrow>
              <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                The field is your <span className="italic">workshop</span>.
              </h2>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">
                Exploration, learning, collaboration and contribution — every project is a
                guided field activity that brings your team into direct contact with a real
                Mediterranean site and a real research question.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={territoryImage}
                  alt="A Mediterranean territory observed during fieldwork"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  width={900}
                  height={675}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {[
              { icon: Leaf, label: "Environment (land & sea)" },
              { icon: HeartHandshake, label: "Social" },
              { icon: UtensilsCrossed, label: "Culture & food" },
              { icon: Building2, label: "Urban systems" },
            ].map(({ icon: Icon, label }) => (
              <button
                key={label}
                type="button"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background text-xs font-medium text-foreground/80 hover:bg-secondary transition-colors"
              >
                <Icon className="size-3.5 text-accent" />
                {label}
              </button>
            ))}
          </div>

          {/* Stay tuned placeholder */}
          <div className="rounded-2xl border border-dashed border-border bg-background p-12 text-center">
            <Sparkles className="size-6 text-accent mx-auto" />
            <h3 className="mt-4 font-display text-2xl md:text-3xl text-foreground">
              Stay tuned.
            </h3>
            <p className="mt-3 text-muted-foreground max-w-md mx-auto leading-relaxed">
              The first pilots are currently being designed with our scientific partners.
              Project listings will appear here as they go live.
            </p>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-base font-medium text-foreground hover:text-accent transition-colors"
            >
              Looking for something specific for your team? Let's design it together
              <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* 6. WHO WE ARE */}
      <section id="who" className="py-24 lg:py-32 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Intro */}
          <div className="grid lg:grid-cols-12 gap-12 mb-24">
            <div className="lg:col-span-4">
              <Eyebrow>Who we are</Eyebrow>
            </div>
            <div className="lg:col-span-8">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-balance">
                An independent initiative connecting companies, research and{" "}
                <span className="italic">people</span>.
              </h2>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Palomar was born in Venice, from a conversation around the Mediterranean
                during the Ocean Literacy World Conference 2024. Today it designs structured
                field experiences inspired by citizen science, built around the Mediterranean
                as a region — its territories, communities and cultures.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="grid lg:grid-cols-12 gap-12 mb-24">
            <div className="lg:col-span-4">
              <Eyebrow>Our journey</Eyebrow>
              <h3 className="mt-4 font-display text-2xl md:text-3xl leading-tight">
                Recognitions and <span className="italic">milestones</span>.
              </h3>
            </div>
            <div className="lg:col-span-8">
              <ol className="relative border-l-2 border-border pl-8 space-y-12">
                {[
                  {
                    year: "2024",
                    title: "MITdesignX Venice",
                    body: "Selected for the MITdesignX program based at Giudecca, Venice — where Palomar also won the Hospitality Prize awarded by SerenDPT, the Venetian incubator supporting young entrepreneurs and innovative ideas in Venice.",
                  },
                  {
                    year: "2025",
                    title: "Start Venice Hub — 3rd place",
                    body: "Recognised in the program promoted by IUAV University and Regione Veneto.",
                  },
                  {
                    year: "2025",
                    title: "BLUNEW · European Interreg",
                    body: "Currently selected for a European Interreg project on the blue economy.",
                  },
                ].map(({ year, title, body }) => (
                  <li key={title} className="relative">
                    <span
                      aria-hidden="true"
                      className="absolute -left-[2.6rem] top-1.5 size-4 rounded-full bg-accent border-4 border-background"
                    />
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                      {year}
                    </span>
                    <h4 className="mt-2 font-display text-xl md:text-2xl text-foreground leading-snug">
                      {title}
                    </h4>
                    <p className="mt-3 text-base text-muted-foreground leading-relaxed max-w-xl">
                      {body}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Advisor */}
          <div className="grid lg:grid-cols-12 gap-12 mb-24">
            <div className="lg:col-span-4">
              <Eyebrow>Advisor</Eyebrow>
              <h3 className="mt-4 font-display text-2xl md:text-3xl leading-tight">
                A scientific compass.
              </h3>
            </div>
            <div className="lg:col-span-8">
              <div className="bg-secondary rounded-2xl p-8 border border-border">
                <h4 className="font-display text-2xl text-foreground">Ana</h4>
                <p className="mt-2 text-xs font-mono uppercase tracking-widest text-accent">
                  Advisor · Ocean Literacy & Blue Careers
                </p>
                <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                  Specialist in ocean literacy and blue-economy careers.
                </p>
              </div>
            </div>
          </div>

          {/* Open to dialogue — moved ABOVE vision */}
          <div className="mb-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-y border-border py-10">
            <div className="max-w-xl">
              <Eyebrow>Open to dialogue</Eyebrow>
              <h4 className="mt-4 font-display text-2xl md:text-3xl text-foreground leading-tight">
                Always looking for <span className="italic">conversation</span> and advisory.
              </h4>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                These themes live on exchange. We're always open to dialogue with researchers,
                practitioners and organisations who want to share perspectives on the
                Mediterranean.
              </p>
            </div>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 border border-border text-foreground text-sm font-medium rounded-full hover:bg-secondary transition-colors shrink-0"
            >
              <Users className="size-4 text-accent" />
              Get in touch
              <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Vision (dark block — closes the section) */}
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0">
              <img
                src={regionImage}
                alt="A Mediterranean city seen from above, blending architecture, parks and the sea"
                className="h-full w-full object-cover"
                loading="lazy"
                width={1600}
                height={1000}
              />
              <div className="absolute inset-0 bg-primary/70" />
            </div>
            <div className="relative py-20 lg:py-28 px-8 lg:px-16 text-primary-foreground">
              <div className="max-w-3xl">
                <Eyebrow>Our vision</Eyebrow>
                <h3 className="mt-6 font-display text-3xl md:text-4xl lg:text-5xl italic leading-[1.1]">
                  A Mediterranean of cities, communities and researchers — working together.
                </h3>
                <p className="mt-8 text-lg text-primary-foreground/80 max-w-xl leading-relaxed">
                  The Mediterranean is more than a sea. It is territories, cultures and
                  people facing shared environmental and social challenges. Palomar is the
                  bridge that brings them — and the companies who care — into the same
                  conversation, working toward system-level change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section id="contact" className="py-24 lg:py-32 px-6 lg:px-16 border-t border-border">
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

      {/* Hidden image preloads to keep imports active for visual continuity */}
      <div className="hidden">
        <img src={communityImage} alt="" />
        <img src={observationImage} alt="" />
      </div>
    </main>
  );
}
