export interface LoadTimelinePostList {
  loadAll: () => Promise<LoadTimelinePostList.Model>;
}

export namespace LoadTimelinePostList {
  export type Model = {
    id: string;
    name: string;
    username: string;
    contentDescription: string;
    avatarUrl: string;
  };
}
