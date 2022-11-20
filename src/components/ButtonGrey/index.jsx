import "./styles.css";
export const ButtonGrey = ({ children, change }) => {
  return (
    <button onClick={change} type="button">
      {children}
    </button>
  );
};
