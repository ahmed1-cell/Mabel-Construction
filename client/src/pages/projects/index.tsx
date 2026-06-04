import React from "react";
import projects from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage(): JSX.Element {
  return (
    <main className="container-responsive py-12">
      <h2 className="text-3xl font-extrabold mb-6">Our Portfolio</h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <div
            key={p.slug ?? `${p.title}-${i}`}
            className="animate-fade-in-up"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <ProjectCard
              id={p.id}
              slug={p.slug}
              title={p.title}
              category={p.category}
              location={p.location}
              description={p.description}
              imageUrl={p.imageUrl}
              completionDate={p.completionDate}
              size={p.size}
              budget={p.budget}
              features={p.features}
              status={p.status}
              showButton={true} // show "View Details" on the Projects page
            />
          </div>
        ))}
      </div>
    </main>
  );
}