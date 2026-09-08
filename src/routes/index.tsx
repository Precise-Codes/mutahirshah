import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About, Expertise } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { ExperienceTimeline, EducationTimeline } from "@/components/portfolio/Experience";
import { ArchitectureDiagram, BeyondWebDevelopment } from "@/components/portfolio/Approach";
import { ContactSection, Footer } from "@/components/portfolio/Contact";

const TITLE = "Mutahir Shah | Senior Full-Stack Web Developer & Technical Lead";
const DESCRIPTION =
  "Portfolio of Mutahir Shah, a Senior Full-Stack Web Developer and Technical Lead with 14+ years of experience in PHP, Laravel, REST APIs, databases, enterprise systems and scalable web applications.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Mutahir Shah",
          jobTitle: "Senior Full-Stack Web Developer & Technical Lead",
          email: "mailto:mutahiricup@gmail.com",
          sameAs: ["https://www.linkedin.com/in/mutahir-shah-a225a762/"],
          knowsAbout: [
            "PHP",
            "Laravel",
            "REST APIs",
            "MySQL",
            "PostgreSQL",
            "React",
            "Vue.js",
            "PostGIS",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <ExperienceTimeline />
        <ArchitectureDiagram />
        <BeyondWebDevelopment />
        <EducationTimeline />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
