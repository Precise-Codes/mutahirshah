import { MapPin } from "lucide-react";
import { EDUCATION, EXPERIENCE } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./primitives";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="border-t border-border bg-surface/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="04 / Career" title="Professional Experience" />
        </Reveal>

        <ol className="mt-12 relative border-l border-border pl-6 sm:pl-10">
          {EXPERIENCE.map((job, i) => (
            <Reveal as="li" key={job.company} delay={i * 60} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[1.68rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-primary bg-background sm:-left-[2.68rem]" />
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:flex-wrap sm:items-baseline sm:justify-between">
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold">{job.role}</h3>
                  <p className="mt-1 text-sm text-primary">{job.company}</p>
                </div>
                <p className="shrink-0 font-mono text-xs text-muted-foreground">{job.period}</p>
              </div>
              <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3 shrink-0" />
                {job.location}
              </p>

              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
                    {p}
                  </li>
                ))}
              </ul>

              {job.tags.length ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-primary/10 px-2.5 py-1 font-mono text-[11px] text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function EducationTimeline() {
  return (
    <section id="education" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="07 / Education" title="Education" />
        </Reveal>

        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
          {EDUCATION.map((e, i) => (
            <Reveal key={e.degree} delay={i * 60}>
              <div className="h-full bg-card p-6">
                <p className="font-mono text-xs text-primary">{e.period}</p>
                <h3 className="mt-3 text-base font-semibold leading-snug">{e.degree}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{e.school}</p>
                <p className="mt-4 inline-block rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground">
                  {e.result}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
