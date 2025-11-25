import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  period: string
  category: string
  githubUrl?: string
  demoUrl?: string
  imageUrl?: string
}

const ProjectCard = ({
  title,
  description,
  technologies,
  period,
  category,
  githubUrl,
  demoUrl,
  imageUrl,
}: ProjectCardProps) => {
  return (
    <div className="group rounded-lg border border-gray-200 bg-white overflow-hidden transition-all hover:shadow-lg">
      {imageUrl ? (
        <div className="aspect-video w-full overflow-hidden bg-gray-100">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="aspect-video w-full bg-gradient-to-br from-gray-100 to-gray-200" />
      )}

      <div className="p-6">
        <div className="mb-3 flex items-center justify-between text-sm text-gray-500">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
            {category}
          </span>
          <span>{period}</span>
        </div>

        <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>

        <p className="mb-4 text-sm text-gray-600 line-clamp-3">{description}</p>

        <div className="mb-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-700">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-gray-700 transition-colors hover:text-gray-900"
              aria-label={`${title} GitHub repository`}
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </Link>
          )}
          {demoUrl && (
            <Link
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-gray-700 transition-colors hover:text-gray-900"
              aria-label={`${title} demo site`}
            >
              <ExternalLink className="h-4 w-4" />
              <span>Demo</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export { ProjectCard }
