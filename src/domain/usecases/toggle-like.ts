export interface ToggleLike {
    toggle: (params: ToggleLike.Params) => Promise<ToggleLike.Model>;
}

export namespace ToggleLike {
    export type Params = {
        postId: string;
    };

    export type Model = {
        isLiked: boolean;
    };
}
