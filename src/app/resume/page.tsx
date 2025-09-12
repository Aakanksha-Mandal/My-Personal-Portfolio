import Image from 'next/image';
import Link from 'next/link';
import { Download, Mail, Phone, Linkedin, Github, Briefcase, GraduationCap, CheckCircle } from 'lucide-react';
import { portfolioData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const ResumePage = () => {
    const { personalInfo, experience, education, projects, skills } = portfolioData;
    const resumeProfileImage = PlaceHolderImages.find(img => img.id === 'resume-profile');
    
    return (
        <div className="min-h-screen bg-background text-foreground">
            <main className="container mx-auto max-w-4xl p-4 sm:p-8">
                <div className="mb-8 flex justify-end">
                     <Button asChild>
                        <Link href="#">
                            <Download className="mr-2 h-4 w-4" /> Download PDF
                        </Link>
                    </Button>
                </div>
                <div className="rounded-xl border bg-card p-6 sm:p-10 shadow-xl">
                    {/* Header */}
                    <header className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
                        {resumeProfileImage && (
                            <Image 
                                src={resumeProfileImage.imageUrl} 
                                alt={personalInfo.name} 
                                width={120} 
                                height={120}
                                className="rounded-full border-4 border-primary"
                                data-ai-hint={resumeProfileImage.imageHint}
                            />
                        )}
                        <div className="w-full">
                            <h1 className="font-headline text-4xl font-bold text-primary sm:text-5xl">{personalInfo.name}</h1>
                            <p className="text-xl text-muted-foreground">{personalInfo.title}</p>
                            <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm sm:justify-start">
                                <Link href={personalInfo.socials.email} className="flex items-center gap-2 hover:underline"><Mail className="h-4 w-4 text-primary" /> {personalInfo.socials.email.replace('mailto:','')}</Link>
                                <span className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +91 12345 67890</span>
                                <Link href={personalInfo.socials.linkedin} target="_blank" className="flex items-center gap-2 hover:underline"><Linkedin className="h-4 w-4 text-primary" /> LinkedIn</Link>
                                <Link href={personalInfo.socials.github} target="_blank" className="flex items-center gap-2 hover:underline"><Github className="h-4 w-4 text-primary" /> GitHub</Link>
                            </div>
                        </div>
                    </header>

                    <Separator className="my-8" />
                    
                    {/* Main Content */}
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                        <div className="space-y-8 md:col-span-2">
                             {/* Experience */}
                            <section>
                                <h2 className="mb-6 flex items-center gap-3 font-headline text-2xl font-semibold text-primary">
                                    <Briefcase />
                                    Experience
                                </h2>
                                <div className="space-y-6">
                                    {experience.map((job, idx) => (
                                        <div key={idx} className="relative pl-8">
                                            <div className="absolute left-0 top-1 h-3 w-3 rounded-full bg-primary"></div>
                                            <div className="absolute left-1.5 top-4 h-full w-px bg-border"></div>
                                            <h3 className="font-semibold">{job.role}</h3>
                                            <div className="flex justify-between text-sm text-muted-foreground">
                                                <span>{job.company}</span>
                                                <span>{job.period}</span>
                                            </div>
                                            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground/80">
                                                {job.description.split('\n').map((point, i) => (
                                                    <li key={i}>{point}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </section>
                            
                             {/* Projects */}
                            <section>
                                <h2 className="mb-4 font-headline text-2xl font-semibold text-primary">Projects</h2>
                                <div className="space-y-6">
                                    {projects.slice(0,2).map((project, idx) => (
                                         <div key={idx}>
                                            <h3 className="font-semibold">{project.title}</h3>
                                            <p className="mt-1 text-sm text-foreground/80">{project.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                        
                        <div className="space-y-8">
                             {/* Education */}
                             <section>
                                <h2 className="mb-4 flex items-center gap-3 font-headline text-2xl font-semibold text-primary">
                                    <GraduationCap />
                                    Education
                                </h2>
                                {education.map((edu, idx) => (
                                    <div key={idx} className="mb-4">
                                        <h3 className="font-semibold">{edu.role}</h3>
                                        <p className="text-sm text-muted-foreground">{edu.company}</p>
                                        <p className="text-sm text-muted-foreground">{edu.period}</p>
                                    </div>
                                ))}
                            </section>

                             {/* Skills */}
                            <section>
                                <h2 className="mb-4 font-headline text-2xl font-semibold text-primary">Skills</h2>
                                <div className="space-y-4">
                                    {skills.map((skillCategory, idx) => (
                                        <div key={idx}>
                                            <h3 className="mb-2 text-sm font-semibold uppercase text-muted-foreground">{skillCategory.category}</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {skillCategory.skills.map((skill, sIdx) => (
                                                    <span key={sIdx} className="rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary">{skill}</span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ResumePage;
