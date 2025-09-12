import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { portfolioData } from '@/lib/data';

type ExperienceProps = {
  experience: typeof portfolioData.experience;
  education: typeof portfolioData.education;
};

export function Experience({ experience, education }: ExperienceProps) {
  return (
    <section>
      <h2 className="mb-8 text-center font-headline text-3xl font-bold text-primary md:text-4xl">
        Experience & Education
      </h2>
      <Card className="mx-auto max-w-3xl shadow-lg">
        <CardContent className="p-2 md:p-6">
          <Accordion type="single" collapsible className="w-full">
            {[...experience, ...education].map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex w-full items-start justify-between gap-4">
                    <div className="flex flex-col items-start">
                      <p className="font-semibold text-primary">{item.role}</p>
                      <p className="text-sm text-muted-foreground">{item.company}</p>
                    </div>
                    <p className="shrink-0 text-right text-sm text-muted-foreground">{item.period}</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-foreground/80">{item.description}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </section>
  );
}
