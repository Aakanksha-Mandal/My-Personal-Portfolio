import { Youtube, Code, ToyBrick, Calculator, Bot } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { portfolioData } from '@/lib/data';

const iconMap: { [key: string]: React.ReactNode } = {
  'GenX Coding YouTube Channel': <Youtube className="h-8 w-8 text-primary" />,
  'Remind Me Android App': <Bot className="h-8 w-8 text-primary" />,
  'Recycling Waste Android App': <Code className="h-8 w-8 text-primary" />,
  'Mathstronauts Game Development': <ToyBrick className="h-8 w-8 text-primary" />,
  'Mathstronauts Nexus': <Calculator className="h-8 w-8 text-primary" />,
};

export function Projects({ projects }: { projects: typeof portfolioData.projects }) {
  return (
    <section>
      <h2 className="mb-8 text-center font-headline text-3xl font-bold text-primary md:text-4xl">
        Projects
      </h2>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <CardHeader className="flex flex-row items-center gap-4">
              {iconMap[project.title] || <Code className="h-8 w-8 text-primary" />}
              <CardTitle className="m-0">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <CardDescription>{project.description}</CardDescription>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
