// Using Svelte 5 Runes for deep state reactivity

export interface SocialLink {
    id: string;
    platform: string;
    url: string;
}

export interface Experience {
    id: string;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    current: boolean;
    location: string;
    description: string;
}

export interface Education {
    id: string;
    school: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
    location: string;
}

export interface Project {
    id: string;
    name: string;
    description: string;
    url: string;
    technologies: string[];
}

export interface ResumeData {
    personal: {
        fullName: string;
        email: string;
        phone: string;
        location: string;
        website: string;
        summary: string;
        title: string;
    };
    socials: SocialLink[];
    experience: Experience[];
    education: Education[];
    skills: string[];
    projects: Project[];
}

const defaultResume: ResumeData = {
    personal: {
        fullName: "John Doe",
        title: "Software Engineer",
        email: "john@example.com",
        phone: "(555) 123-4567",
        location: "San Francisco, CA",
        website: "johndoe.dev",
        summary: "Passionate software engineer with 5+ years of experience in building scalable web applications. Expert in JavaScript, TypeScript, and modern frontend frameworks.",
    },
    socials: [],
    experience: [
        {
            id: typeof crypto !== 'undefined' ? crypto.randomUUID() : '1',
            company: "Tech Corp",
            position: "Senior Developer",
            startDate: "2023-01",
            endDate: "",
            current: true,
            location: "Remote",
            description: "Leading the frontend team in migration to SvelteKit."
        }
    ],
    education: [
        {
            id: typeof crypto !== 'undefined' ? crypto.randomUUID() : '2',
            school: "State University",
            degree: "Bachelor of Science",
            field: "Computer Science",
            startDate: "2018-09",
            endDate: "2022-05",
            location: "New York, NY"
        }
    ],
    skills: ["JavaScript", "TypeScript", "Svelte", "React", "Node.js", "TailwindCSS"],
    projects: []
};

// Global state
let savedResume = defaultResume;

if (typeof localStorage !== 'undefined') {
    const stored = localStorage.getItem('resume_data');
    if (stored) {
        try {
            savedResume = JSON.parse(stored);
        } catch (e) {
            console.error("Failed to parse resume data", e);
        }
    }
}

export const resumeStore = $state<ResumeData>(savedResume);

// Effect to save to localStorage whenever state changes
$effect.root(() => {
    $effect(() => {
        // This will run whenever any property of resumeStore changes
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('resume_data', JSON.stringify(resumeStore));
        }
    });
});

export function addExperience() {
    resumeStore.experience.push({
        id: typeof crypto !== 'undefined' ? crypto.randomUUID() : Date.now().toString(),
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        current: false,
        location: "",
        description: ""
    });
}
export function removeExperience(id: string) {
    resumeStore.experience = resumeStore.experience.filter(exp => exp.id !== id);
}

export function addEducation() {
    resumeStore.education.push({
        id: typeof crypto !== 'undefined' ? crypto.randomUUID() : Date.now().toString(),
        school: "",
        degree: "",
        field: "",
        startDate: "",
        endDate: "",
        location: ""
    });
}
export function removeEducation(id: string) {
    resumeStore.education = resumeStore.education.filter(edu => edu.id !== id);
}
