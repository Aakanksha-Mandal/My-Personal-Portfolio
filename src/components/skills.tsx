import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { portfolioData } from '@/lib/data';

type SkillsProps = {
  skills: typeof portfolioData.skills;
};

export function Skills({ skills }: SkillsProps) {
  return (
    <section>
      <h2 className="mb-8 text-center font-headline text-3xl font-bold text-primary md:text-4xl">
        Technical Skills
      </h2>
      <Card className="mx-auto max-w-3xl shadow-lg">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {skills.map((category, index) => (
              <div key={index}>
                <h3 className="mb-3 font-semibold text-primary">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIndex) => (
                    <span key={sIndex} className="rounded-full bg-accent/20 px-3 py-1 text-sm text-accent-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
