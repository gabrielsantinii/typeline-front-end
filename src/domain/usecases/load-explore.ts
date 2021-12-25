import { PostModel, RecommendedAuthorModel } from "../models";

export interface LoadExplore {
    load: () => Promise<LoadExplore.Model>;
}

export namespace LoadExplore {
    export type Model = {
        recommendedAuthors: RecommendedAuthorModel[];
        recommendedPosts: PostModel[];
    };
}
