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
    // --- New: certifications section (duplicated from skills, with renamed keys) ---
    certifications: [
        {
            organization: "Programming Languages",
            certifications: ["Python", "Java", "C", "Bash", "PowerShell"]
        },
        {
            organization: "Web & Data Formats",
            certifications: ["HTML", "CSS", "JavaScript", "JSON", "YAML"]
        },
        {
            organization: "Azure Technologies",
            certifications: ["Logic Apps", "Function Apps", "Databricks (Apps, Jobs, Asset Bundles)", "DevOps", "Data Factory", "Blob Storage", "Log Analytics"]
        },
        {
            organization: "Tools & Technologies",
            certifications: ["Visual Studio", "Android Studio", "Kanban", "Agile", "Jira", "Confluence", "CI/CD Pipelines"]
        },
        {
            organization: "Operating Systems",
            certifications: ["UNIX", "Windows"]
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