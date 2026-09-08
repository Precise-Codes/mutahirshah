import { SKILL_GROUPS, STATS } from "@/lib/portfolio-data";
import { Reveal, SectionHeading, TechnologyBadge } from "./primitives";

export function About() {
  return (
    <section id="about" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="01 / About" title="About Me" />
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <Reveal delay={60} className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              I&rsquo;m a results-driven web developer with more than 14 years of experience in PHP
              and Laravel-based application development. My work spans scalable web applications,
              enterprise systems, Management Information Systems, RESTful APIs, database
              architecture and digital platforms.
            </p>
            <p>
              I enjoy translating complex business requirements into reliable technical solutions,
              with particular attention to performance, security, maintainability and long-term
              scalability.
            </p>
            <p>
              My professional experience includes commercial software development as well as
              large-scale government and enterprise systems, where reliability, security and
              maintainability are critical.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border">
              {STATS.map((s) => (
                <div key={s.label} className="bg-card p-5 sm:p-6">
                  <p className="font-display text-xl font-semibold text-primary sm:text-2xl">
                    {s.value}
                  </p>
                  <p className="mt-1.5 text-xs text-muted-foreground sm:text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Expertise() {
  return (
    <section id="expertise" className="border-t border-border bg-surface/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="02 / Expertise"
            title="Technical Expertise"
            description="Technologies and practices applied across enterprise applications, government platforms and API-driven systems."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal
              key={group.title}
              delay={i * 60}
              className={i === SKILL_GROUPS.length - 1 ? "md:col-span-2" : undefined}
            >
              <div className="h-full rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-semibold">{group.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <TechnologyBadge key={item} label={item} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
