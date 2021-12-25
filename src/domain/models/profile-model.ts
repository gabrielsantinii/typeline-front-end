import { PostModel } from "./post-model";

export type ProfileModel = {
    name: string;
    username: string;
    backgroundUrl: string;
    avatarUrl: string;
    posts: PostModel[];
    description: string;
    likesCount: number;
    followersCount: number;
};
