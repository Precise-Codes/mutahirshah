import { useState, type FormEvent } from "react";
import { ExternalLink, Github, Linkedin, Mail, Send } from "lucide-react";
import { CONTACT, NAV_LINKS } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./primitives";

const inputClass =
  "w-full rounded-md border border-border bg-surface px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  // No email backend is connected yet. Replace this handler with a call to an
  // email service or server function to deliver the message.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="08 / Contact"
            title="Let's Build Something Meaningful."
            description="Whether you're looking for an experienced developer, technical lead, API specialist, or someone to help architect a complex web application, I'd be happy to connect."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
          <Reveal delay={60}>
            <div className="space-y-3">
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
              >
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span className="min-w-0">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Email
                  </span>
                  <span className="block truncate text-sm">{CONTACT.email}</span>
                </span>
              </a>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
              >
                <Github className="h-4 w-4 shrink-0 text-primary" />
                <span className="min-w-0">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    GitHub
                  </span>
                  <span className="block truncate text-sm">mutahir-shah</span>
                </span>
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
              >
                <Linkedin className="h-4 w-4 shrink-0 text-primary" />
                <span className="min-w-0">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    LinkedIn
                  </span>
                  <span className="block truncate text-sm">mutahir-shah-a225a762</span>
                </span>
              </a>
              <a
                href={CONTACT.publicProject}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
              >
                <ExternalLink className="h-4 w-4 shrink-0 text-primary" />
                <span className="min-w-0">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Public Project
                  </span>
                  <span className="block truncate text-sm">kp.gov.pk</span>
                </span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={onSubmit}
              className="rounded-xl border border-border bg-card p-6 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs text-muted-foreground">
                    Name
                  </label>
                  <input id="name" name="name" required className={inputClass} placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs text-muted-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={inputClass}
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="mb-1.5 block text-xs text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className={inputClass}
                  placeholder="Tell me about your project"
                />
              </div>
              <button
                type="submit"
                className="mt-5 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Send Message
                <Send className="h-4 w-4" />
              </button>
              <p aria-live="polite" className="mt-3 text-xs text-muted-foreground">
                {sent
                  ? `Thanks — message noted. Email delivery isn't connected yet, so please also reach me at ${CONTACT.email}.`
                  : "Prefer email? Write directly to " + CONTACT.email + "."}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/60 py-12">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="font-display text-lg font-semibold">{CONTACT.name}</p>
            <p className="mt-1 text-sm text-primary">{CONTACT.title}</p>
            <p className="mt-3 max-w-md text-sm text-muted-foreground">
              Building scalable digital systems with PHP, Laravel and modern web technologies.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6">
          <p className="font-mono text-xs text-muted-foreground">
            © 2026 Mutahir Shah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
