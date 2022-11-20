import "./styles.css";
import { Link } from "react-router-dom";

export const ButtonStart = () => {
  return (
    <Link className="btnStart" to="/dashboard">
      Iniciar
    </Link>
  );
};
