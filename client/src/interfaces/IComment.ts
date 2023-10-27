export interface IComment {
    _id: string;
    userId: string;
    userFirstName: string;
    userLastName: string;
    photo?: string;
    postId: string;
    text: string;
    createdTime: string;
}