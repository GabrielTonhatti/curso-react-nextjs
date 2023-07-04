import { ReactElement } from "react";
import "./styles.css";
import { Outlet, Params, useParams, useSearchParams } from "react-router-dom";

const Posts: () => ReactElement = (): ReactElement => {
  const { id }: Readonly<Params<string>> = useParams();
  const [qs] = useSearchParams();

  return (
    <div>
      <h1>
        Post {`Param: ${id}`} {`QS: ${qs}`}
      </h1>
      <Outlet />
    </div>
  );
};

export default Posts;
