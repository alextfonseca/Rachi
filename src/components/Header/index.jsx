import { useState } from "react";
import styles from "./style.module.scss";

export const Header = () => {
  const [hiddenMenu, setHiddenMenu] = useState(false);

  function handleMenuButton() {
    setHiddenMenu(!hiddenMenu);
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#top">
          <img src="/icons/logo.svg" alt="Logo da empresa" />
        </a>

        <nav>
          <button
            className={styles.menuButton}
            onClick={handleMenuButton}
            aria-label="Abrir menu"
          ></button>

          <ul className={hiddenMenu ? styles.active : styles.disabled}>
            <button
              className={styles.closeMenuButton}
              onClick={handleMenuButton}
              aria-label="Fechar menu"
            ></button>

            <li onClick={handleMenuButton}>
              <a href="#aboutApp">Funcionalidades</a>
            </li>

            <li onClick={handleMenuButton}>
              <a href="#app">App</a>
            </li>

            <li onClick={handleMenuButton}>
              <a href="#plans">Planos</a>
            </li>

            <li onClick={handleMenuButton}>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
