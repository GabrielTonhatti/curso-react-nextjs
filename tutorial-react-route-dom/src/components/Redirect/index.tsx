import {
  MutableRefObject,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import "./styles.css";
import { NavigateFunction, useNavigate } from "react-router-dom";

const Redirect: () => ReactElement = (): ReactElement => {
  const [time, setTime] = useState<number>(3);
  const timeout: MutableRefObject<number> = useRef(0);
  const navigate: NavigateFunction = useNavigate();
  console.log("Redirect", navigate);

  useEffect(() => {
    clearTimeout(timeout.current);

    timeout.current = setTimeout((): void => {
      setTime((t: number): number => t - 1);
    }, 1000);

    if (time <= 0) {
      navigate("/about", {
        state: `This is the state: ${Math.random()}`,
      });
    }

    return (): void => {
      clearTimeout(timeout.current);
    };
  }, [navigate, time]);

  return (
    <div>
      <h1>Get out of here in: {time}</h1>
    </div>
  );
};

export default Redirect;
