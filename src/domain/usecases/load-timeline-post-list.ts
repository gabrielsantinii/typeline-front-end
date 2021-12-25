import { PostModel } from "../models";

export interface LoadTimelinePostList {
    loadAll: () => Promise<LoadTimelinePostList.Model>;
}

export namespace LoadTimelinePostList {
    export type Model = {
        recommendedPosts: PostModel[];
        followingPosts: PostModel[];
    };
}
