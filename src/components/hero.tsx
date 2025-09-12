import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import type { portfolioData } from '@/lib/data';

type HeroProps = {
  personalInfo: typeof portfolioData.personalInfo;
};

export function Hero({ personalInfo }: HeroProps) {
  return (
    <section className="py-20 text-center md:py-28">
      <div className="flex flex-col items-center gap-6">
        <Avatar className="h-32 w-32 md:h-40 md:w-40 border-4 border-primary shadow-lg">
          <AvatarImage src={personalInfo.image.imageUrl} alt={personalInfo.name} />
          <AvatarFallback>{personalInfo.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="space-y-2">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl lg:text-6xl">
            {personalInfo.name}
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">{personalInfo.title}</p>
        </div>
        <p className="max-w-prose text-center text-foreground/80">{personalInfo.bio}</p>
        <div className="flex gap-4">
          <Button asChild variant="outline" size="icon" className="hover:bg-accent/50">
            <Link href={personalInfo.socials.github} target="_blank" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="icon" className="hover:bg-accent/50">
            <Link href={personalInfo.socials.linkedin} target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="icon" className="hover:bg-accent/50">
            <Link href={personalInfo.socials.email} aria-label="Email">
              <Mail className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
