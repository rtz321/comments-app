import { useSelector } from "react-redux";
import "./App.css";
import Chart from "./component/Chart";
import Post from "./component/Post";
import { RootState } from "./types";

export default function App(): JSX.Element {
  const comments = useSelector(
    (state: RootState) => state.comments.groupedComments
  );

  return (
    <>
      <h1>Comments App</h1>

      <Chart />

      <div className="main">
        {Object.keys(comments).map((postIdKey) => {
          const postId = parseInt(postIdKey);
          return (
            <Post key={postId} postId={postId} comments={comments[postId]} />
          );
        })}
      </div>
    </>
  );
}
