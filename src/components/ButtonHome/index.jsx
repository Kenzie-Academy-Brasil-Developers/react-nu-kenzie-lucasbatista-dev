import "./styles.css";
import { Link } from "react-router-dom";

export const ButtonHome = ({ children }) => {
  return (
    <Link className="btnGrey" to="/">
      {children}
    </Link>
  );
};
