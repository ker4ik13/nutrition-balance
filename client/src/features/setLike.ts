import { posts } from "@/data/posts";

export const setLike = (postId: string) => {
    // TODO: переделать лайк
    const post = posts.find(post => post.id === postId);
    if(post && post.likesCount){
        post.likesCount = +post.likesCount + 1;
        return true;
    } else {
        return false;
    }
}