import styles from "./Card.module.css";
import { FaTrash } from "react-icons/Fa";

export const Card = ({
  id,
  description,
  value,
  type,
  category,
  handleRemove,
}) => {
  const remove = (e) => {
    e.preventDefault();
    handleRemove(id);
  };

  return (
    <li className={styles.containerCard}>
      <div className={styles.category}>
        <span className={`${styles[category.toLowerCase()]}`}></span>
      </div>
      <div className={styles.info}>
        <p>{description}</p>
        <small>{type}</small>
      </div>
      <div className={styles.price}>
        <p>R${value}</p>
        <button type="button" onClick={remove}>
          <FaTrash />
        </button>
      </div>
    </li>
  );
};
