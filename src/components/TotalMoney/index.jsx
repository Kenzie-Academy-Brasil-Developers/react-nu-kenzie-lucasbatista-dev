import "./styles.css";

export const TotalMoney = ({ data }) => {
  const totalValues = data.reduce((acc, { value }) => {
    const trat = parseInt(value);

    return (acc += trat);
  }, 0);
  return (
    <div className="containerTotal">
      <p>Valor Total:</p>
      <span>$ {totalValues}</span>
    </div>
  );
};
