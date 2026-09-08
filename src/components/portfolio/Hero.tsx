import { ArrowRight, Mail } from "lucide-react";
import { HERO_TECH } from "@/lib/portfolio-data";
import { Reveal, TechnologyBadge } from "./primitives";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[46rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Senior Full-Stack Web Developer &amp; Technical Lead
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
            Building Scalable Digital Systems That Solve Real-World Problems.
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I&rsquo;m Mutahir Shah, a Senior Full-Stack Web Developer and Technical Lead with 14+
            years of experience designing, developing and optimizing web applications, enterprise
            platforms, APIs and information systems.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-4 max-w-2xl border-l-2 border-primary/60 pl-4 text-sm leading-relaxed text-muted-foreground">
            Specialized in Laravel, PHP, REST APIs, databases, modern frontend technologies and
            scalable application architecture.
          </p>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium transition-colors hover:border-primary/50"
            >
              <Mail className="h-4 w-4" />
              Let&rsquo;s Connect
            </a>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-12 border-t border-border pt-6">
            <div className="flex flex-wrap gap-2">
              {HERO_TECH.map((t) => (
                <TechnologyBadge key={t} label={t} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
