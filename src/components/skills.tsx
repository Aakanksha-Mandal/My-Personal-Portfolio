import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { portfolioData } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

type SkillsProps = {
  skills: typeof portfolioData.skills;
};

export function Skills({ skills }: SkillsProps) {
  return (
    <section>
      <h2 className="mb-8 text-center font-headline text-3xl font-bold text-primary md:text-4xl">
        Technical Skills
      </h2>
      <Card className="mx-auto max-w-4xl border-0 bg-transparent shadow-none md:border md:bg-card md:shadow-lg transition-all duration-300 hover:shadow-primary/20">
        <CardContent className="p-0 md:p-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {skills.map((category, index) => (
              <div key={index}>
                <h3 className="mb-4 font-semibold text-primary">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIndex) => (
                    <Badge variant="secondary" key={sIndex}>
                      {skill}
                    </Badge>
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
