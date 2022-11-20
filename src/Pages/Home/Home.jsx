import React from "react";
import { Logo } from "../../components/Logo";
import { ButtonStart } from "../../components/ButtonStart";
import "./styles.css";
import imgLogoWhite from "../../assets/Nu Kenzie.svg";
export const Home = () => {
  return (
    <div className="containerHome">
      <div>
        <Logo logo={imgLogoWhite} />
        <h2>Centralize o controle das suas Finanças</h2>
        <span>De forma rápida e segura</span>
        <ButtonStart />
      </div>
      <div className="containerImg"></div>
    </div>
  );
};
