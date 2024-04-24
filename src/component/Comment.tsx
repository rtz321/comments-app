import "./styles/Comment.css";
import { CommentType } from "../types";

interface CommentProps {
  comment: CommentType;
}

export default function Comment({ comment }: CommentProps): JSX.Element {
  return (
    <div className="comment" data-testid="comment">
      <div className="name" data-testid="comment-name">
        {comment.name}
      </div>
      <div className="text" data-testid="comment-text">
        {comment.body}
      </div>
    </div>
  );
}
