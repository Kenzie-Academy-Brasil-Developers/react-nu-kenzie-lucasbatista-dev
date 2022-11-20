import React, { useState, useEffect } from "react";
import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { List } from "../../components/List";
import { TotalMoney } from "../../components/TotalMoney";
import "./styles.css";

export const Dashboard = () => {
  function createPost(dataBase) {
    fetch("http://localhost:3333/dados", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataBase),
    })
      .then((resp) => resp.json())

      .catch((err) => console.log(err));
  }
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
  return (
    <>
      <Header />
      <main>
        <div>
          <Form handleSubmit={createPost} />
          <TotalMoney data={data} />
        </div>
        <List />
      </main>
    </>
  );
};
