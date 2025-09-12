'use server';

import { summarizeSkills } from '@/ai/flows/summarize-skills-from-experience';

type AnalyzeSkillsState = {
  skillsSummary?: string;
  error?: string;
}

export async function analyzeSkillsAction(
  prevState: AnalyzeSkillsState,
  formData: FormData
): Promise<AnalyzeSkillsState> {
  const experienceText = formData.get('experienceText') as string;
  const projectText = formData.get('projectText') as string;

  if (!experienceText || !projectText) {
    return { error: 'Missing experience or project text.' };
  }

  try {
    const result = await summarizeSkills({ experienceText, projectText });
    if (!result || !result.skillsSummary) {
       return { error: 'AI analysis failed to produce a summary.' };
    }
    return { skillsSummary: result.skillsSummary };
  } catch (error) {
    console.error('AI analysis error:', error);
    return { error: 'An error occurred while analyzing skills. Please try again later.' };
  }
}
