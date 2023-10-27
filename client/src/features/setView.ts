import { posts } from "@/data/posts";

export const setView = (postId: string) => {
    // TODO: переделать просмотр
    const post = posts.find(post => post.id === postId);
    if(post && post.viewCount){
        post.viewCount = +post.viewCount + 1;
        return true;
    } else {
        return false;
    }
}