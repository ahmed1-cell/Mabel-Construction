import React from "react";
import { useRoute } from "wouter";
import { ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import projects, { ProjectData } from "@/data/projects";
import useResponsive from "@/hooks/use-responsive";

function normalizeSlug(s?: string) {
  if (!s) return "";
  return decodeURIComponent(s.toString())
    .trim()
    .toLowerCase()
    .replace(/(^\/+|\/+$)/g, "") // remove leading/trailing slashes
    .replace(/[^a-z0-9-]/g, "-") // replace non-slug chars with -
    .replace(/-+/g, "-"); // collapse dashes
}

export default function ProjectDetail(): JSX.Element {
  const [matched, params] = useRoute("/projects/:slug");
  const rawSlug = params?.slug ?? "";
  const slug = normalizeSlug(rawSlug);
  const { isMobile } = useResponsive();

  const project: ProjectData | undefined =
    projects.find((p) => normalizeSlug(p.slug) === slug) ||
    projects.find((p) => normalizeSlug(p.title) === slug);

  if (!project) {
    return (
      <>
        <SEOHead title="Project not found — Mabel Construction" description="Project not found" />
        <main className="container-responsive pt-28 md:pt-32 pb-12">
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold">Project not found</h2>
            <p className="mt-3 text-muted-foreground">We couldn’t find the project you requested.</p>
            <a href="/projects" className="inline-block mt-6 text-primary">Back to Projects</a>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <SEOHead title={`${project.title} — Mabel Construction`} description={project.description} />
      {/* top padding offsets the fixed header; adjust pt values to match your header height */}
      <main className="container-responsive pt-28 md:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-0">
          {/* Top meta row (mobile stacks, desktop two-column header) */}
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            {/* Image */}
            <div className={`w-full md:w-1/2 ${isMobile ? "" : "md:sticky md:top-32"}`}>
              <div className="rounded-lg overflow-hidden shadow-sm">
                {/* smaller image height on mobile to reduce vertical pressure */}
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className={`w-full object-cover ${isMobile ? "h-64" : "h-[520px]"}`}
                />
              </div>
            </div>

            {/* Details column */}
            <div className="w-full md:w-1/2 md:pl-8 lg:pl-12">
              <div className="mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="min-w-0">
                  <a href="/projects" className="inline-flex items-center text-sm text-primary hover:underline">
                    <ArrowLeft className="mr-2" /> Back to Portfolio
                  </a>

                  <h1 className="mt-4 md:mt-6 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight break-words">
                    {project.title}
                  </h1>

                  <div className="mt-2 text-sm text-muted-foreground">{project.category}</div>
                </div>

                {/* Right-side compact info box (hidden on mobile) */}
                <aside className="hidden md:block w-40 flex-shrink-0">
                  <div className="rounded-md border p-4 bg-white/60 shadow-sm">
                    <div className="text-sm text-muted-foreground">Budget</div>
                    <div className="font-semibold mt-1">{project.budget ?? "—"}</div>

                    <div className="mt-4 text-sm text-muted-foreground">Duration</div>
                    <div className="mt-1">{project.size ?? "—"}</div>
                  </div>
                </aside>
              </div>

              {/* Mobile meta: show a single compact meta block under the title (removed duplicate) */}
              <div className="md:hidden mt-4 grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  <div className="font-semibold text-foreground">Status</div>
                  <div>{project.status ?? "—"}</div>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Completed</div>
                  <div>{project.completionDate ?? "—"}</div>
                </div>
              </div>

              <div className="prose prose-sm max-w-none mt-6 text-foreground">
                <p>{project.description}</p>
              </div>

              {/* Additional info grid */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Project Summary & Notes</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Details</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li><strong className="mr-2">Location:</strong> {project.location ?? "—"}</li>
                    <li><strong className="mr-2">Size:</strong> {project.size ?? "—"}</li>
                    <li><strong className="mr-2">Architect:</strong> {project.client ?? "Mabel Construction"}</li>
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <a href="/contact" className="inline-block px-6 py-3 rounded-full bg-primary text-white font-semibold">Request a Quote</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}