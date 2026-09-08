import { ArrowDown, Database, Globe, Layers, Map, Network, Server, Workflow } from "lucide-react";
import { ARCH_INFRA, ARCH_LAYERS, BEYOND, PRINCIPLES } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./primitives";

const LAYER_ICONS = [Globe, Network, Layers, Workflow, Database, Server];

export function ArchitectureDiagram() {
  return (
    <section id="approach" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="05 / Approach"
            title="Engineering Approach"
            description="These represent technologies and architectural patterns used across my professional experience — not every component was used in every project."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <Reveal delay={60}>
            <div className="relative overflow-hidden rounded-xl border border-border bg-card p-6 sm:p-8">
              <div className="grid-bg pointer-events-none absolute inset-0 opacity-50" />
              <div className="relative">
                {ARCH_LAYERS.map((layer, i) => {
                  const Icon = LAYER_ICONS[i] ?? Layers;
                  return (
                    <div key={layer}>
                      <div className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3.5">
                        <Icon className="h-4 w-4 shrink-0 text-primary" />
                        <span className="min-w-0 truncate text-sm font-medium">{layer}</span>
                        <span className="ml-auto shrink-0 font-mono text-[10px] text-muted-foreground">
                          L{i + 1}
                        </span>
                      </div>
                      {i < ARCH_LAYERS.length - 1 ? (
                        <div className="flex justify-center py-1.5">
                          <ArrowDown className="h-3.5 w-3.5 text-muted-foreground" />
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={120}>
              <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
                <h3 className="text-base font-semibold">Supporting Infrastructure</h3>
                <ul className="mt-5 space-y-2.5">
                  {ARCH_INFRA.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 rounded-md border border-border bg-surface px-3.5 py-2.5 text-sm text-muted-foreground"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
                <h3 className="text-base font-semibold">Principles</h3>
                <div className="mt-5 grid grid-cols-2 gap-2">
                  {PRINCIPLES.map((p) => (
                    <span
                      key={p}
                      className="rounded-md bg-primary/10 px-3 py-2 text-xs text-primary sm:text-sm"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

const CONCEPT = [
  { icon: Map, label: "Maps" },
  { icon: Database, label: "Data" },
  { icon: Network, label: "APIs" },
  { icon: Server, label: "Databases" },
  { icon: Workflow, label: "Business Systems" },
];

export function BeyondWebDevelopment() {
  return (
    <section id="gis" className="border-t border-border bg-surface/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="06 / GIS & Enterprise"
            title="Beyond Web Development"
            description="My experience extends beyond conventional web applications into enterprise information systems and GIS-enabled platforms."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.05fr]">
          <Reveal delay={60}>
            <div className="flex h-full flex-wrap content-start gap-2.5 rounded-xl border border-border bg-card p-6 sm:p-8">
              {BEYOND.map((b) => (
                <span
                  key={b}
                  className="rounded-lg border border-border bg-surface px-3.5 py-2 text-sm transition-colors hover:border-primary/50 hover:text-primary"
                >
                  {b}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative h-full overflow-hidden rounded-xl border border-border bg-card p-6 sm:p-8">
              <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
              <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-3">
                {CONCEPT.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-start gap-3 rounded-lg border border-border bg-surface p-4"
                  >
                    <Icon className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">{label}</span>
                  </div>
                ))}
                <div className="col-span-2 flex items-center rounded-lg border border-dashed border-primary/40 p-4 text-xs text-muted-foreground sm:col-span-1">
                  Geospatial layers feeding operational decision-making.
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
