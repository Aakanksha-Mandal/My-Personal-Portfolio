import type { ImagePlaceholder } from "./placeholder-images";
import { PlaceHolderImages } from "./placeholder-images";

const findImage = (id: string): ImagePlaceholder => {
    const image = PlaceHolderImages.find(img => img.id === id);
    if (!image) {
        // Fallback to a default image if not found
        return {
            id: 'default',
            imageUrl: 'https://picsum.photos/seed/default/600/400',
            imageHint: 'abstract',
            description: 'Default placeholder image'
        };
    }
    return image;
};

export const portfolioData = {
    personalInfo: {
        name: "Aakanksha Mandal",
        title: "Computer Science Student",
        bio: "I am a Computer Science student at the University of Windsor with a lifelong passion for technology. Early experiences with Python, Java, HTML, CSS, and JavaScript led me to develop mobile apps for Technovation Girls and participate in the Nexus program by Mathstronauts, where I explored Python, Machine Learning, and essential soft skills. I also created a Space Shooting Game using Python and graphic design.\n\nThrough co-op experiences at the University of Waterloo and the National Bank of Canada, I honed my skills in web development, system performance improvement, and documentation. Recently, at the Bank of Canada, I gained hands-on experience with Azure and DevOps, developing Bash and PowerShell scripts to automate Azure Logic App source code synchronization, designing reusable Azure DevOps deployment templates, standardizing configuration management across projects, and creating pipeline alert systems with HTML email templates. These projects strengthened my technical expertise, problem-solving skills, and understanding of Agile workflows.\n\nWith a proactive approach and certifications in networking, graphic design, and health and safety, I am excited to contribute to dynamic teams, make meaningful impacts, and continue growing professionally.",
        image: findImage('profile'),
        socials: {
            linkedin: "https://www.linkedin.com/in/aakanksha-mandal/",
            github: "https://github.com/GenXCoding",
            email: "mailto:mandal5@uwindsor.ca"
        },
        resumeUrl: "/resume"
    },
    experience: [
        {
            role: "Co-Op, Student Developer",
            company: "Bank of Canada",
            period: "May 2025 - Aug 2025",
            description: "Developed a custom Bash and PowerShell script to automate synchronization of Azure Logic App source code from Kudu, enabling local version control with overwrite capability. Designed reusable Azure DevOps deployment templates for Logic Apps and JavaScript Function Apps, with child pipelines and environment-specific configs (dev, stg, prd). Created documentation to standardize deployments across multiple teams and environments. Standardized configuration management across three projects by implementing a shared + environment-specific folder structure, reusable deployment template, and child pipelines. Created documentation and presentations to support adoption, improving consistency and reducing manual effort in deployments. Created comprehensive documentation and a professional HTML email template for an Azure Logic App that generates pipeline alerts, ensuring consistent, customizable alerts. Migrated and deployed the alerts Logic App across three projects, including creating configs, testing, and monitoring alerts."
        },
        {
            role: "Internship, Developer Intern",
            company: "National Bank of Canada (NBIN - Wealth)",
            period: "Jun 2024 - Aug 2024",
            description: "Created onboarding documentation for Git, Java, and VS Code to streamline setup for new developers. Improved security by identifying and removing sensitive credentials from BitBucket repositories. Set up DataDog monitoring and alerts for Compass R2 and R2 Adapter to CX, enhancing system visibility. Uninstalled AppDynamics from IBM WebSphere servers, boosting performance. Developed a bash script to automate log cleanup, simplifying maintenance."
        },
        {
            role: "Co-Op, Research Assistant",
            company: "University of Waterloo",
            period: "Sep 2022 - Jan 2023",
            description: "Conducted research for a Virtual Reality (VR) project. Performed hardware and software components testing for the DMX Interface Selection Project. Produced written reports and guides about project specifications and procedures. Initiated communication with several hockey teams to facilitate testing processes. Diagnosed and resolved technical issues with proficiency."
        },
        {
            role: "Co-Op, Computer Programming Assistant",
            company: "Wilmot Technologies Inc.",
            period: "Jun 2022 - Jul 2022",
            description: "Utilized HTML and CSS to build 3 interactive websites. Implemented responsive design principles to ensure optimal viewing experience across various devices. Designed and programmed a website utilizing the Bootstrap framework to improve functionality and design aesthetics."
        }
    ],
    education: [
         {
            role: "Bachelor of Computer Science Honours",
            company: "University of Windsor",
            period: "Sep 2024 - Dec 2027",
            description: "AI Specialization and Mathematics Minor. Courses: Key Concepts in Computer Science (95%); Systems Programming (92%); Object-Oriented Programming using Java (88%); Computer Architecture I: Digital Design (86%), Language, Grammar & Translators (97%); Theoretical Foundations of Computer Science (94%); Computer Architecture II: Microprocessor Programming (82%); Data Structures & Algorithms (100%); Computer Networks (88%). GPA: 91.7%."
        },
        {
            role: "Bachelor of Science in Computer Science Honours",
            company: "University of Toronto",
            period: "Sep 2023 - Apr 2024",
            description: "Courses: Introduction to Computer Programming; Introduction to Computer Science."
        }
    ],
    projects: [
        {
            title: "GenX Coding YouTube Channel",
            description: "Created Python tutorials, including quiz games, sound integration with Pygame, calculators, and more.",
            image: findImage('project1'),
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Remind Me Android App",
            description: "Developed an Android app for task and event management, integrating calling, messaging, and maps.",
            image: findImage('project2'),
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Recycling Waste Android App",
            description: "Built an app to educate users on waste disposal through a quiz game, with audio and visual feedback.",
            image: findImage('project3'),
            liveUrl: "#",
            githubUrl: "#"
        }
    ]
};
