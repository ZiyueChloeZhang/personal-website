export interface IHeroProps {
    name: string;
    about: string;
}

export interface IExperienceProps {
    id: string,
    "title": string,
    "companyName": string,
    "companyWebsiteUrl": string,
    "startTime": string,
    "endTime": string,
    "descriptions": string[],
    "techStacks": string[],
}

export interface ITechStackIconListProps {
    techStack: string[]
}

export interface IProjectProps {
    screenshotPath?: string,
    id: string,
    name: string,
    course?: string,
    description: string,
    githubLink: string,
    liveProjectLink: string,
    techStacks: string[],
}