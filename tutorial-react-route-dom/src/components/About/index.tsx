import { ReactElement } from "react";
import "./styles.css";
import { useLocation } from "react-router-dom";

const About: () => ReactElement = (): ReactElement => {
  const { state } = useLocation();

  return (
    <div>
      <h1>About</h1>
      <p>{state as string}</p>
    </div>
  );
};

export default About;
