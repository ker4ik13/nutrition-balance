export interface IProject {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    photos: string[];
    repo?: string;
}