import Link from 'next/link';
import { Youtube, Code, ToyBrick, Calculator, Bot, ExternalLink, BotMessageSquare } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { portfolioData } from '@/lib/data';

const iconMap: { [key: string]: React.ReactNode } = {
  'JARVIS - AI Assistant with Voice': <BotMessageSquare className="h-8 w-8 text-primary" />,
  'GenX Coding YouTube Channel': <Youtube className="h-8 w-8 text-primary" />,
  'Remind Me Android App': <Bot className="h-8 w-8 text-primary" />,
  'Recycling Waste Android App': <Code className="h-8 w-8 text-primary" />,
  'Mathstronauts Game Development': <ToyBrick className="h-8 w-8 text-primary" />,
  'Mathstronauts Nexus': <Calculator className="h-8 w-8 text-primary" />,
};

export function Projects({ projects }: { projects: typeof portfolioData.projects }) {
  const CardWrapper = ({ project, children }: {project: (typeof portfolioData.projects)[number], children: React.ReactNode}) => {
    if (project.url) {
      return <Link href={project.url} target="_blank" className="flex h-full flex-col">{children}</Link>
    }
    return <>{children}</>
  }
  
  return (
    <section>
      <h2 className="mb-8 text-center font-headline text-3xl font-bold text-primary md:text-4xl">
        Projects
      </h2>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-primary/20">
             <CardWrapper project={project}>
              <CardHeader className="flex flex-row items-start justify-between">
                <div className="flex items-center gap-4">
                  {iconMap[project.title] || <Code className="h-8 w-8 text-primary" />}
                  <CardTitle className="m-0">{project.title}</CardTitle>
                </div>
                {project.url && <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />}
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <CardDescription>{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </CardWrapper>
          </Card>
        ))}
      </div>
    </section>
  );
}
