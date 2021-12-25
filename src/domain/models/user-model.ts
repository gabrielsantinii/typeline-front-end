import { FollowingAuthorModel } from "./following-author-model";

export type UserModel = {
    id: string;
    name: string;
    username: string;
    avatarUrl: string;
    mainFollowingAuthors: FollowingAuthorModel[];
};
