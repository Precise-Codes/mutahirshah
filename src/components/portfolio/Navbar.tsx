import { useEffect, useState } from "react";
import { Github, Linkedin, Menu, Moon, Sun, X } from "lucide-react";
import { CONTACT, NAV_LINKS } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDark = stored ? stored === "dark" : true;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-border bg-surface text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY;
      setScrolled(top > 12);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(100, (top / h) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit) setActive(`#${hit.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.6] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "border-b transition-colors duration-300",
          scrolled ? "border-border bg-background/85 backdrop-blur-xl" : "border-transparent bg-transparent",
        )}
      >
        <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 lg:px-8">
          <a
            href="#home"
            className="min-w-0 truncate font-display text-base font-semibold tracking-tight"
          >
            Mutahir<span className="text-primary">.</span>Shah
          </a>

          <div className="flex shrink-0 items-center gap-1.5">
            <ul className="mr-2 hidden items-center gap-1 lg:flex">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      "rounded-md px-3 py-2 text-sm transition-colors hover:text-foreground",
                      active === link.href ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="grid h-9 w-9 place-items-center rounded-md border border-border bg-surface text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid h-9 w-9 place-items-center rounded-md border border-border bg-surface text-muted-foreground transition-colors hover:text-foreground lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {open ? (
          <ul className="border-t border-border bg-background px-5 py-3 lg:hidden">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <div className="h-px w-full bg-transparent">
        <div
          className="h-px bg-primary transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
    </header>
  );
}
