export type CommentType = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
  count: number;
};

export type GroupedComments = {
  [postId: number]: CommentType[];
};

export type RootState = {
  comments: {
    groupedComments: GroupedComments;
    status: string;
    error: string | null;
  };
};
