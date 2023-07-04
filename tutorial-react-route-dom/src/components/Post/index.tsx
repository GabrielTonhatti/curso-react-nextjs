import { ReactElement } from "react";
import "./styles.css";

const Post: () => ReactElement = (): ReactElement => {
  return (
    <div>
      <h1>Post</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis at
        quos esse, iusto exercitationem quisquam impedit maxime unde fuga
        aliquam voluptates ducimus sapiente aliquid accusamus amet aspernatur
        fugiat distinctio ullam.
      </p>
    </div>
  );
};

export default Post;
