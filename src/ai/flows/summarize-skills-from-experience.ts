'use server';

/**
 * @fileOverview This file defines a Genkit flow to summarize technical skills from experience and project descriptions.
 *
 * - summarizeSkills - A function that takes experience and project descriptions as input and returns a summary of key technical skills.
 * - SummarizeSkillsInput - The input type for the summarizeSkills function.
 * - SummarizeSkillsOutput - The return type for the summarizeSkills function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeSkillsInputSchema = z.object({
  experienceText: z
    .string()
    .describe('Text containing details of work and academic experience.'),
  projectText: z.string().describe('Text containing descriptions of projects.'),
});
export type SummarizeSkillsInput = z.infer<typeof SummarizeSkillsInputSchema>;

const SummarizeSkillsOutputSchema = z.object({
  skillsSummary: z
    .string()
    .describe('A summarized list of key technical skills identified.'),
});
export type SummarizeSkillsOutput = z.infer<typeof SummarizeSkillsOutputSchema>;

export async function summarizeSkills(input: SummarizeSkillsInput): Promise<SummarizeSkillsOutput> {
  return summarizeSkillsFlow(input);
}

const summarizeSkillsPrompt = ai.definePrompt({
  name: 'summarizeSkillsPrompt',
  input: {schema: SummarizeSkillsInputSchema},
  output: {schema: SummarizeSkillsOutputSchema},
  prompt: `You are an AI assistant that helps users identify their key technical skills based on their experience and project descriptions.

  Summarize the key technical skills from the following text. Be concise and list the most important skills.

  Experience Description: {{{experienceText}}}

  Project Description: {{{projectText}}}

  Skills Summary:`, // Removed the extraneous single quote
});

const summarizeSkillsFlow = ai.defineFlow(
  {
    name: 'summarizeSkillsFlow',
    inputSchema: SummarizeSkillsInputSchema,
    outputSchema: SummarizeSkillsOutputSchema,
  },
  async input => {
    const {output} = await summarizeSkillsPrompt(input);
    return output!;
  }
);
