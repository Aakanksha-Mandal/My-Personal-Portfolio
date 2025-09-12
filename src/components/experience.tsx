import Image from 'next/image';
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
      <Card className="mx-auto max-w-4xl shadow-lg">
        <CardContent className="p-6">
          {experience.map((job, idx) => (
            <div key={idx} className="grid grid-cols-[50px_1fr] gap-x-6 gap-y-2 py-6 first:pt-0 last:pb-0">
              <div className="flex h-[50px] w-[50px] items-center justify-center rounded-lg bg-background shadow-md">
                <Image
                  src={job.logo.imageUrl}
                  alt={`${job.company} logo`}
                  width={35}
                  height={35}
                  className="object-contain"
                  data-ai-hint={job.logo.imageHint}
                />
              </div>
              <div>
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
        </CardContent>
      </Card>
    </section>
  );
}
