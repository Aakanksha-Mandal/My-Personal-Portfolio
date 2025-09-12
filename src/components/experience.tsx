import { Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { portfolioData } from '@/lib/data';

type ExperienceProps = {
  experience: typeof portfolioData.experience;
};

export function Experience({ experience }: ExperienceProps) {
  return (
    <section>
      <h2 className="mb-8 text-center font-headline text-3xl font-bold text-primary md:text-4xl">
        Work Experience
      </h2>
      <Card className="mx-auto max-w-4xl transition-all duration-300 hover:shadow-primary/20 md:border md:bg-card md:shadow-lg">
        <CardContent className="p-6">
          <div className="relative space-y-8">
            <div className="absolute left-3 top-4 hidden h-full w-0.5 bg-border md:block"></div>
            {experience.map((job, idx) => (
              <div 
                key={idx} 
                className="relative pl-8 animate-fade-in"
                style={{ animationDelay: `${idx * 150}ms`, animationFillMode: 'both' }}
              >
                <div className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Briefcase className="h-4 w-4" />
                </div>
                <div className="md:ml-4">
                  <div className="flex flex-col justify-between md:flex-row">
                    <h3 className="font-headline text-lg font-semibold">{job.role}</h3>
                    <span className="text-sm text-muted-foreground">{job.period}</span>
                  </div>
                  <p className="mb-2 text-muted-foreground">{job.company}</p>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value={`item-${idx}`} className="border-b-0">
                      <AccordionTrigger className="text-sm hover:no-underline [&[data-state=open]>svg]:-rotate-90">
                        View Description
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-foreground/80">
                          {job.description.split('\n').map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
