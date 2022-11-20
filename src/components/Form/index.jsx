import { useState, useEffect } from "react";
import "./styles.css";

export const Form = ({ handleSubmit }) => {
  const [categories, setCategories] = useState([]);
  const [newValue, setNewValue] = useState({});

  useEffect(() => {
    fetch("http://localhost:3333/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

  function registerData(e) {
    e.preventDefault();
    handleSubmit(newValue);
  }
  function handleChange(e) {
    setNewValue({ ...newValue, [e.target.name]: e.target.value });
  }
  function handleCategory(e) {
    setNewValue({
      ...newValue,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  return (
    <form onSubmit={registerData}>
      <label htmlFor="description">Descrição</label>
      <input
        className="descriptionLabel"
        type="text"
        name="description"
        id=""
        placeholder="Digite aqui sua descrição"
        onChange={handleChange}
        value={newValue.description}
      />
      <small>Ex:Compra de roupas</small>
      <div className="containerInputs">
        <div>
          <label htmlFor="value">Valor</label>
          <input
            type="number"
            name="value"
            placeholder="Valor"
            onChange={handleChange}
            value={newValue.value}
          />
        </div>
        <div className="containerSelect">
          <label htmlFor="typeOfValue">Tipo de valor</label>
          <select
            name="typeOfValue"
            onChange={handleCategory}
            value={newValue.category ? newValue.category.id : ""}
          >
            <option>Selecione</option>
            {categories.map((options) => (
              <option value={options.id} key={options.id}>
                {options.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button>Inserir Valor</button>
    </form>
  );
};
