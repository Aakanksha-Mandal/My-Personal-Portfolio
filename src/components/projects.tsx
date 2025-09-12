import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { portfolioData } from '@/lib/data';

type ProjectsProps = {
  projects: typeof portfolioData.projects;
};

export function Projects({ projects }: ProjectsProps) {
  return (
    <section>
      <h2 className="mb-8 text-center font-headline text-3xl font-bold text-primary md:text-4xl">
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <div className="aspect-video overflow-hidden rounded-md border">
                <Image
                  src={project.image.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  data-ai-hint={project.image.imageHint}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button asChild variant="ghost" size="sm">
                <Link href={project.githubUrl} target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button asChild size="sm">
                <Link href={project.liveUrl} target="_blank">
                  Live Site
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
