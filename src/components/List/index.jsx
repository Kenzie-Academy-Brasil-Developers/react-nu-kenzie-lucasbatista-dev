import { useState, useEffect } from "react";
import { ButtonGrey } from "../ButtonGrey";
import { Card } from "../Card";
import EmptyCard from "../../assets/NoCard.png";
import "./styles.css";

export const List = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/dados", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [filtered, setFiltered] = useState(data);

  const filterEntries = () => {
    const result = data.filter((item) => item.category.name === "Entrada");
    setFiltered(result);
  };

  const filterOuts = () => {
    const result = data.filter((item) => item.category.name === "Saída");
    setFiltered(result);
  };

  const filterAll = () => {
    const result = data.filter(
      (item) =>
        item.category.name === "Saída" || item.category.name === "Entrada"
    );
    setFiltered(result);
  };

  function removeData(id) {
    fetch(`http://localhost:3333/dados/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setData(data.filter((itens) => itens.id !== id));
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="containerList">
      <nav>
        <p>Resumo financeiro</p>
        <div>
          <ButtonGrey change={filterAll} children={"Todos"} />
          <ButtonGrey change={filterEntries} children={"Entradas"} />
          <ButtonGrey change={filterOuts} children={"Despesas"} />
        </div>
      </nav>
      <ul className="teste">
        {data.length > 0 &&
          filtered.map((item, index) => (
            <Card
              description={item.description}
              value={item.value}
              type={item.category.name}
              key={index}
              id={item.id}
              category={item.category.name}
              handleRemove={removeData}
            />
          ))}
        {}
        {filtered.length === 0 && (
          <div className="containerEmptyCard">
            <p className="msgUl">Você ainda não possui nenhum lançamento</p>
            <img src={EmptyCard} alt="" />
            <img src={EmptyCard} alt="" />
            <img src={EmptyCard} alt="" />
          </div>
        )}
      </ul>
    </div>
  );
};
