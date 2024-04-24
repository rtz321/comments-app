import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Comment from "../Comment";
import { mockComments } from "./mocks";

const mockComment = mockComments[0];

describe("Comment Component", () => {
  it("should render comment with correct data", () => {
    render(<Comment comment={mockComment} />);

    const nameElement = screen.getByText(mockComment.name);
    expect(nameElement).toBeInTheDocument();

    const bodyElement = screen.getByText(mockComment.body);
    expect(bodyElement).toBeInTheDocument();
  });

  it("should render comment with correct CSS classes", () => {
    render(<Comment comment={mockComment} />);

    const commentElement = screen.getByTestId("comment");
    expect(commentElement).toHaveClass("comment");

    const nameElement = screen.getByTestId("comment-name");
    expect(nameElement).toHaveClass("name");

    const textElement = screen.getByTestId("comment-text");
    expect(textElement).toHaveClass("text");
  });
});
