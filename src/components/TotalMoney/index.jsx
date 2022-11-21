import "./styles.css";

export const TotalMoney = ({ data }) => {
  const totalValues = data.reduce((acc, { value }) => {
    const trat = parseInt(value);

    return (acc += trat);
  }, 0);

  const allEntries = data.filter(
    (entrie) => entrie.category.name === "Entrada"
  );
  const sumAllEntries = allEntries.reduce((acc, { value }) => {
    const trat = parseInt(value);

    return (acc += trat);
  }, 0);

  const allOuts = data.filter((out) => out.category.name === "Saída");
  const sumAllOuts = allOuts.reduce((acc, { value }) => {
    const trat = parseInt(value);

    return (acc += trat);
  }, 0);

  const result = sumAllEntries - sumAllOuts;

  return (
    <div className="containerTotal">
      <p>Valor Total:</p>
      <span>$ {result}</span>
    </div>
  );
};
