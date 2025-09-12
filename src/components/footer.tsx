import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { portfolioData } from '@/lib/data';

type FooterProps = {
  personalInfo: typeof portfolioData.personalInfo;
};

export function Footer({ personalInfo }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row md:px-6">
        <p className="text-sm text-primary-foreground/80">
          © {currentYear} {personalInfo.name}. All rights reserved.
        </p>
        <div className="flex gap-2">
          <Button asChild variant="ghost" size="icon" className="text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground">
            <Link href={personalInfo.socials.github} target="_blank" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon" className="text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground">
            <Link href={personalInfo.socials.linkedin} target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
           <Button asChild variant="ghost" size="icon" className="text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground">
            <Link href={personalInfo.socials.email} aria-label="Email">
              <Mail className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
