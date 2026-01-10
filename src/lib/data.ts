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
        title: "Computer Science Student & Aspiring AI Specialist",
        bio: "A passionate Computer Science student with a flair for AI and DevOps. Experienced in automating processes and building scalable solutions.",
        image: findImage('profile'),
        socials: {
            linkedin: "https://www.linkedin.com/in/aakanksha-mandal/",
            github: "https://github.com/Aakanksha-Mandal",
            email: "mailto:mandal5@uwindsor.ca"
        },
    },
    skills: [
        {
            category: "Programming Languages",
            skills: ["Python", "Java", "C", "Bash", "PowerShell"]
        },
        {
            category: "Web & Data Formats",
            skills: ["HTML", "CSS", "JavaScript", "JSON", "YAML"]
        },
        {
            category: "Azure Technologies",
            skills: ["Logic Apps", "Function Apps", "Databricks (Apps, Jobs, Asset Bundles)", "DevOps", "Data Factory", "Blob Storage", "Log Analytics"]
        },
        {
            category: "Tools & Technologies",
            skills: ["Visual Studio", "Android Studio", "Kanban", "Agile", "Jira", "Confluence", "CI/CD Pipelines"]
        },
        {
            category: "Operating Systems",
            skills: ["UNIX", "Windows"]
        }
    ],
    experience: [
        {
            role: "Part Time, Student Developer",
            company: "Bank of Canada",
            period: "Sep 2025 - Present",
            description: "Designing reusable Databricks Asset Bundle deployment templates for apps, jobs, and notebooks, with environment-specific configurations (dev, stg, prd). Creating documentation to standardize deployments across multiple teams and environments.\nBuilt and validated Azure Data Factory pipeline for ingesting data from external SFTP source into the raw zone.\nMigrated and deployed shared Databricks bundles and Logic Apps into centralized repositories, ensuring consistent configuration and deployment."
        },
        {
            role: "Co-Op, Student Developer",
            company: "Bank of Canada",
            period: "May 2025 - Aug 2025",
            description: "Developed a custom Bash and PowerShell script to automate synchronization of Azure Logic App source code from Kudu, enabling local version control with overwrite capability.\nDesigned reusable Azure DevOps deployment templates for Logic Apps and JavaScript Function Apps, with child pipelines and environment-specific configs (dev, stg, prd). Created documentation to standardize deployments across multiple teams and environments.\nStandardized configuration management across three projects by implementing a shared + environment-specific folder structure, reusable deployment template, and child pipelines. Created documentation and presentations to support adoption, improving consistency and reducing manual effort in deployments.\nCreated comprehensive documentation and a professional HTML email template for an Azure Logic App that generates pipeline alerts, ensuring consistent, customizable alerts. Migrated and deployed the alerts Logic App across three projects, including creating configs, testing, and monitoring alerts."
        },
        {
            role: "Internship, Developer Intern",
            company: "National Bank of Canada (NBIN - Wealth)",
            period: "Jun 2024 - Aug 2024",
            description: "Created onboarding documentation for Git, Java, and VS Code to streamline setup for new developers.\nImproved security by identifying and removing sensitive credentials from BitBucket repositories.\nSet up DataDog monitoring and alerts for Compass R2 and R2 Adapter to CX, enhancing system visibility.\nUninstalled AppDynamics from IBM WebSphere servers, boosting performance.\nDeveloped a bash script to automate log cleanup, simplifying maintenance."
        },
        {
            role: "Co-Op, Research Assistant",
            company: "University of Waterloo",
            period: "Sep 2022 - Jan 2023",
            description: "Conducted research for a Virtual Reality (VR) project.\nPerformed hardware and software components testing for the DMX Interface Selection Project.\nProduced written reports and guides about project specifications and procedures.\nInitiated communication with several hockey teams to facilitate testing processes.\nDiagnosed and resolved technical issues with proficiency."
        },
        {
            role: "Co-Op, Computer Programming Assistant",
            company: "Wilmot Technologies Inc.",
            period: "Jun 2022 - Jul 2022",
            description: "Utilized HTML and CSS to build 3 interactive websites.\nImplemented responsive design principles to ensure optimal viewing experience across various devices.\nDesigned and programmed a website utilizing the Bootstrap framework to improve functionality and design aesthetics."
        }
    ],
    education: [
         {
            role: "Bachelor of Computer Science Honours",
            company: "University of Windsor",
            period: "Sep 2024 - Apr 2027",
            description: "AI Specialization and Mathematics Minor",
            grade: "90.75%",
            completedCourses: ["Key Concepts in Computer Science (95%)", "Systems Programming (92%)", "Object-Oriented Programming using Java (88%)", "Computer Architecture I: Digital Design (86%)", "Language, Grammar & Translators (97%)", "Theoretical Foundations of Computer Science (94%)", "Data Structures & Algorithms (100%)", "Computer Architecture II: Microprocessor Programming (82%)", "Computer Networks (88%)", "Intro to Software Engineering (93%)", "Object-Oriented Software Analysis and Design (87%)", "Theory of Computation (91%)", "Network Security (88%)", "Numerical Analysis for Computer Science (88%)"],
            inProgressCourses: ["Database Management Systems", "Data Analytics I", "Advanced Object Oriented System Design Using C++", "Artificial Intelligence Concepts", "Principle of Programming Languages"]
        },
        {
            role: "Bachelor of Science in Computer Science Honours",
            company: "University of Toronto",
            period: "Sep 2023 - Apr 2024",
            description: "Transfered to UWindsor after First Year",
            completedCourses: ["Introduction to Computer Programming", "Introduction to Computer Science"]
        }
    ],
    projects: [
        {
            title: "GenX Coding YouTube Channel",
            description: "Created Python tutorials, including quiz games, sound integration with Pygame, calculators, and more.",
            tags: ["Python", "Pygame", "YouTube", "Content Creation"],
            url: "https://www.youtube.com/@genxcoding55/videos"
        },
        {
            title: "Remind Me Android App",
            description: "Developed an Android app for task and event management, integrating calling, messaging, and maps.",
            tags: ["Android", "Java", "XML", "Mobile App"],
            url: "https://github.com/Aakanksha-Mandal/Technovation-RemindMe"
        },
        {
            title: "Recycling Waste Android App",
            description: "Built an app to educate users on waste disposal through a quiz game, with audio and visual feedback.",
            tags: ["Android", "MIT App Inventor", "Gamification"],
            url: "https://www.youtube.com/watch?v=goJw__nqihU&list=LL&index=17"
        },
        {
            title: "Mathstronauts Game Development",
            description: "Developed an interactive game with Python and Pygame, implementing graphics, animations, and game mechanics.",
            tags: ["Python", "Pygame", "Game Development"],
            url: "https://github.com/Aakanksha-Mandal/Mathstronauts-Game-Developement"
        },
        {
            title: "Mathstronauts Nexus",
            description: "Created various Python applications including calculators, simulations, and a Java Swing button game.",
            tags: ["Python", "Java", "Java Swing", "Simulation"],
            url: "https://github.com/Aakanksha-Mandal/Mathstronauts-Nexus"
        }
    ]
};
