import { CommentType, GroupedComments } from "./types";

export function countWords(text: string): number {
  const words = text.trim().split(/\s+/);
  return words.length;
}

export function groupComments(comments: CommentType[]): GroupedComments {
  const groupedComments: GroupedComments = {};

  comments.forEach((comment: CommentType) => {
    const { postId } = comment;
    if (!groupedComments[postId]) {
      groupedComments[postId] = [];
    }
    groupedComments[postId].push(comment);
  });

  return groupedComments;
}
