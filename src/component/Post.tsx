import { CommentType } from "../types";
import Comment from "./Comment";
import "./styles/Post.css";

interface PostProps {
  postId: number;
  comments: CommentType[];
}

export default function Post({ postId, comments }: PostProps): JSX.Element {
  return (
    <div key={postId} className="post">
      <h4>Post ID: {postId}</h4>

      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
}
