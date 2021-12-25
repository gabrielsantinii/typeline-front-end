import { ProfileModel } from "../models/profile-model";

export interface LoadProfile {
    load: (params: LoadProfile.Params) => Promise<LoadProfile.Model>;
}

export namespace LoadProfile {
    export type Params = {
        profileId: string;
    };

    export type Model = ProfileModel;
}
