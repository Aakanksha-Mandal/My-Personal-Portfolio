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
        title: "Aspiring Software Engineer",
        bio: "A dedicated and enthusiastic final-year Computer Science and Engineering student with a passion for web development and problem-solving. Eager to apply my skills in a professional setting and contribute to innovative projects.",
        image: findImage('profile'),
        socials: {
            linkedin: "https://www.linkedin.com/in/aakanksha-mandal-/",
            github: "https://github.com/aakanksha-mandal",
            email: "mailto:aakanksha.mandal.dev@gmail.com"
        },
        resumeUrl: "/resume"
    },
    experience: [
        {
            role: "Full Stack Developer Intern",
            company: "Celebal Technologies",
            period: "Jan 2024 - Jun 2024",
            description: "Developed and maintained web applications using the MERN stack. Collaborated with a team to design and implement new features, focusing on performance and user experience. Gained hands-on experience with RESTful APIs, database management, and agile development methodologies."
        },
        {
            role: "Web Development Intern",
            company: "TechnoHacks",
            period: "Aug 2023 - Sep 2023",
            description: "Assisted in building responsive and interactive user interfaces using HTML, CSS, and JavaScript. Contributed to front-end development tasks and learned foundational concepts of modern web design and version control with Git."
        },
    ],
    education: [
         {
            role: "Bachelor of Technology in CSE",
            company: "KIIT University",
            period: "2021 - 2025",
            description: "Relevant coursework: Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks. Maintained a CGPA of 9.0+."
        },
    ],
    projects: [
        {
            title: "ProjectHub",
            description: "A collaborative platform for developers to showcase their projects, connect with peers, and find collaborators. Built with Next.js, TypeScript, and Tailwind CSS for the frontend, and Node.js with Express and MongoDB for the backend.",
            image: findImage('project1'),
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "E-Commerce Store",
            description: "A fully functional e-commerce website featuring product listings, a shopping cart, and a checkout process. Developed using React, Redux for state management, and Firebase for authentication and database services.",
            image: findImage('project2'),
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Task Manager App",
            description: "A personal task management application to help users organize their to-do lists. Implemented with Vue.js and Vuex, providing a clean and intuitive interface for managing daily tasks.",
            image: findImage('project3'),
            liveUrl: "#",
            githubUrl: "#"
        }
    ]
};
