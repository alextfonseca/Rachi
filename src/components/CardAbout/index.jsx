import styles from "./style.module.scss";

export const Card = ({ image, title, text }) => {
  return (
    <div className={styles.container}>
      <img src={image} alt={title} />
      <div className={styles.content}>
        <p>{title}</p>
        <span>{text}</span>
      </div>
    </div>
  );
};
