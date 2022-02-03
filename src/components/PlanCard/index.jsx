import styles from "./style.module.scss";

export const CardPlan = ({ title, price }) => {
  if (title == "Prata") {
    return (
      <div className={styles.specialCard}>
        <div>
          <h3>{title}</h3>
          <span className={styles.special}>Preferido</span>
          <p>
            R$ <span>{price}</span> /Mês
          </p>
        </div>
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
          eligendi deserunt magni molestiae in dolor ipsam excepturi, quis
          perferendis similique libero! Quisquam voluptas deleniti minima hic
          quae vel similique natus.
        </span>

        <button>Assinar</button>
      </div>
    );
  } else {
    return (
      <div className={styles.card}>
        <h3>{title}</h3>
        <p>
          R$ <span>{price}</span> /Mês
        </p>
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
          eligendi deserunt magni molestiae in dolor ipsam excepturi, quis
          perferendis similique libero! Quisquam voluptas deleniti minima hic
          quae vel similique natus.
        </span>

        <button>Assinar</button>
      </div>
    );
  }
};
