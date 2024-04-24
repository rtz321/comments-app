import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Post from "../Post";
import { mockComments } from "./mocks";

describe("Post Component", () => {
  it("should render post with comments", () => {
    const postId = 1;
    render(<Post postId={postId} comments={mockComments} />);

    const postTitle = screen.getByText(`Post ID: ${postId}`);
    expect(postTitle).toBeInTheDocument();

    mockComments.forEach((comment) => {
      const commentName = screen.getByText(comment.name);
      expect(commentName).toBeInTheDocument();
    });
  });
});
