import { useState } from "react";
import { ChevronDown, ExternalLink, Lock, ShieldCheck } from "lucide-react";
import { ENTERPRISE_PROJECTS, PUBLIC_PROJECT } from "@/lib/portfolio-data";
import { Reveal, SectionHeading, TechnologyBadge } from "./primitives";
import { cn } from "@/lib/utils";

function ProjectCaseStudy({
  project,
}: {
  project: (typeof ENTERPRISE_PROJECTS)[number];
}) {
  const [open, setOpen] = useState(false);
  const id = project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <article className="flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
      <div className="flex items-center gap-2">
        <Lock className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Confidential / Internal System
        </span>
      </div>
      <h3 className="mt-4 text-lg font-semibold leading-snug">{project.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

      <p className="mt-4 font-mono text-xs text-primary">Role: {project.role}</p>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={id}
        className="mt-6 inline-flex items-center justify-between gap-2 rounded-md border border-border bg-surface px-4 py-2.5 text-sm font-medium transition-colors hover:border-primary/50"
      >
        Professional Case Study
        <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
      </button>

      <div
        id={id}
        hidden={!open}
        className="mt-5 border-t border-border pt-5"
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Engineering responsibilities
        </p>
        <ul className="mt-3 space-y-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2.5 text-sm text-muted-foreground">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
              {h}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto" />
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="03 / Work"
            title="Featured Work"
            description="One publicly accessible platform, plus professional systems delivered for government and enterprise clients that remain confidential."
          />
        </Reveal>

        {/* Public project */}
        <Reveal delay={80}>
          <article className="mt-10 overflow-hidden rounded-2xl border border-primary/30 bg-card">
            <div className="grid gap-0 lg:grid-cols-[1.2fr_1fr]">
              <div className="p-7 sm:p-9">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                    <ShieldCheck className="h-3 w-3" />
                    {PUBLIC_PROJECT.label}
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-semibold leading-snug sm:text-3xl">
                  {PUBLIC_PROJECT.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {PUBLIC_PROJECT.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {PUBLIC_PROJECT.tech.map((t) => (
                    <TechnologyBadge key={t} label={t} />
                  ))}
                </div>

                <a
                  href={PUBLIC_PROJECT.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Visit Live Website
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div className="border-t border-border bg-surface p-7 sm:p-9 lg:border-l lg:border-t-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Case study focus areas
                </p>
                <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
                  {PUBLIC_PROJECT.caseStudy.map((c, i) => (
                    <li
                      key={c}
                      className="flex items-center gap-3 rounded-md border border-border bg-card px-3 py-2.5 text-sm"
                    >
                      <span className="font-mono text-[10px] text-primary">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-16 flex items-center gap-4">
            <h3 className="font-display text-xl font-semibold">
              Professional / Enterprise Projects
            </h3>
            <span className="h-px flex-1 bg-border" />
          </div>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            These systems are not publicly accessible. Case studies describe the problem, my role
            and the engineering work involved, without exposing confidential information.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {ENTERPRISE_PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <ProjectCaseStudy project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
