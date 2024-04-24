import { CommentType } from "../../types";

export const mockComments: CommentType[] = [
  {
    postId: 1,
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    body: "This is the first comment.",
    count: 10,
  },
  {
    postId: 2,
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    body: "This is the second comment.",
    count: 15,
  },
];
