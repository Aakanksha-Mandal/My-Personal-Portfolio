import { GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import type { portfolioData } from '@/lib/data';

type EducationProps = {
  education: typeof portfolioData.education;
};

export function Education({ education }: EducationProps) {
  return (
    <section>
      <h2 className="mb-8 text-center font-headline text-3xl font-bold text-primary md:text-4xl">
        Education
      </h2>
      <Card className="mx-auto max-w-3xl shadow-lg">
        <CardContent className="p-6">
          <div className="relative space-y-8">
            <div className="absolute left-3 top-4 hidden h-full w-0.5 bg-border md:block"></div>
            {education.map((edu, idx) => (
              <div key={idx} className="relative pl-8">
                <div className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <GraduationCap className="h-4 w-4" />
                </div>
                <div className="md:ml-4">
                    <div className="flex flex-col justify-between md:flex-row">
                        <h3 className="font-headline text-lg font-semibold">{edu.role}</h3>
                        <span className="text-sm text-muted-foreground">{edu.period}</span>
                    </div>
                    <p className="text-md mb-2 text-muted-foreground">{edu.company}</p>
                    <p className="text-sm text-foreground/80">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
