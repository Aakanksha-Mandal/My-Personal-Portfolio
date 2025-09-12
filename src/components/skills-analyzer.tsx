'use client';

import { useFormState } from 'react-dom';
import { BrainCircuit, Loader2 } from 'lucide-react';
import { analyzeSkillsAction } from '@/app/actions';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { SubmitButton } from './submit-button';

const initialState = {
  skillsSummary: '',
  error: '',
};

type SkillsAnalyzerProps = {
  experienceText: string;
  projectText: string;
};

export function SkillsAnalyzer({ experienceText, projectText }: SkillsAnalyzerProps) {
  const [state, formAction] = useFormState(analyzeSkillsAction, initialState);

  return (
    <section>
      <h2 className="mb-8 text-center font-headline text-3xl font-bold text-primary md:text-4xl">
        AI-Powered Skill Analysis
      </h2>
      <Card className="mx-auto max-w-3xl shadow-lg">
        <form action={formAction}>
          <input type="hidden" name="experienceText" value={experienceText} />
          <input type="hidden" name="projectText" value={projectText} />
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BrainCircuit className="h-6 w-6 text-primary" />
              <span>Discover My Technical Skills</span>
            </CardTitle>
            <CardDescription>
              Click the button below to use AI to parse my experience and project descriptions, and generate a summary of my key technical skills.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {state.skillsSummary && (
              <div className="rounded-lg border bg-accent/20 p-4">
                <h3 className="mb-2 font-semibold text-primary">AI Generated Skill Summary:</h3>
                <p className="text-sm text-foreground/90 whitespace-pre-wrap">{state.skillsSummary}</p>
              </div>
            )}
            {state.error && (
                <p className="text-sm text-destructive">{state.error}</p>
            )}
          </CardContent>
          <CardFooter>
            <SubmitButton
              defaultText="Analyze My Skills"
              loadingText="Analyzing..."
            />
          </CardFooter>
        </form>
      </Card>
    </section>
  );
}
