import { Logo } from "../Logo";
import imgLogoBlack from "../../assets/logoBlack.png";
import { ButtonHome } from "../ButtonHome";
import "./styles.css";

export const Header = () => {
  return (
    <header>
      <nav>
        <Logo logo={imgLogoBlack} />
        <ButtonHome children={"Inicio"} />
      </nav>
    </header>
  );
};
