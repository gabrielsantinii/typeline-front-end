import { UserModel } from "../models";

export interface LoadUser {
    load: () => Promise<LoadUser.Model>;
}

export namespace LoadUser {
    export type Model = UserModel;
}
