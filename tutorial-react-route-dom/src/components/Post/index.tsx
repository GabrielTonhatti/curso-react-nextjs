import { ReactElement } from "react";
import "./styles.css";
import { Params, useParams, useSearchParams } from "react-router-dom";

const Post: () => ReactElement = (): ReactElement => {
  const { id }: Readonly<Params<string>> = useParams();
  const [qs] = useSearchParams();

  return (
    <div>
      <h1>
        Post {`Param: ${id}`} {`QS: ${qs}`}
      </h1>
    </div>
  );
};

export default Post;
