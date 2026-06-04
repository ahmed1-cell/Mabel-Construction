import React from "react";

export interface ProjectCardProps {
  id?: number;
  slug: string;
  title: string;
  category?: string;
  location?: string;
  description?: string;
  imageUrl: string;
  completionDate?: string;
  size?: string;
  budget?: string;
  features?: string[];
  status?: string;
  showButton?: boolean;
}

export default function ProjectCard({
  slug,
  title,
  category,
  location,
  description,
  imageUrl,
  completionDate,
  size,
  budget,
  features = [],
  status,
  showButton = true,
}: ProjectCardProps) {
  const href = `/projects/${encodeURIComponent(slug)}`;

  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden">
      <a
        href={href}
        className="block group no-underline"
        aria-label={title}
        rel="noopener noreferrer"
      >
        <div className="relative w-full h-56 md:h-60 lg:h-64 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {category && (
            <span className="absolute top-3 left-3 inline-block bg-purple-700 text-white text-xs px-3 py-1 rounded-full">
              {category}
            </span>
          )}
          {status && (
            <span className="absolute top-3 right-3 inline-block bg-green-500 text-white text-xs px-3 py-1 rounded-full">
              {status}
            </span>
          )}
        </div>

        <div className="p-5">
          <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
          {description && (
            <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
              {description}
            </p>
          )}

          <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-4">
              {completionDate && (
                <div className="flex items-center gap-2">
                  <span>{completionDate}</span>
                </div>
              )}
              {location && (
                <div className="flex items-center gap-2">
                  <span>{location}</span>
                </div>
              )}
            </div>
            {budget && (
              <div className="text-sm font-semibold text-purple-700">{budget}</div>
            )}
          </div>

          {features.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {features.slice(0, 3).map((f) => (
                <span
                  key={f}
                  className="text-xs px-3 py-1 bg-muted/10 rounded-full"
                >
                  {f}
                </span>
              ))}
              {features.length > 3 && (
                <span className="text-xs px-3 py-1 bg-muted/10 rounded-full">
                  +{features.length - 3} more
                </span>
              )}
            </div>
          )}

          {showButton && (
            <div>
              <span className="inline-flex items-center justify-center w-full border rounded-md py-3 text-sm">
                View Details <span className="ml-2">→</span>
              </span>
            </div>
          )}
        </div>
      </a>
    </article>
  );
}