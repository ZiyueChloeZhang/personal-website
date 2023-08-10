export interface IHeroProps {
    name: string;
    about: string;
}

export interface IExperienceProps {
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