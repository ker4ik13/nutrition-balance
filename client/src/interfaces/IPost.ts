import { IComment } from "./IComment";

export interface IPost {
    id: string,
    title: string;
    description: string;
    text: string | JSX.Element | JSX.Element[];
    photos: string | string[];
    viewCount?: number | string;
    likesCount?: number | string;
    comments?: IComment[];
    createdTime: string;
}