import { Card } from "./components/CardAbout";
import { Header } from "./components/Header";
import { CardPlan } from "./components/PlanCard";

import styles from "./styles/home.module.scss";

const App = () => {
  return (
    <div className="App" id="top">
      <Header />

      <main>
        <section className={styles.introduction}>
          <div className={styles.container}>
            <div className={styles.about}>
              <h1>
                Rachi, <br />é tudo que voce precisa em um só lugar.
              </h1>

              <button>Cadastrar-se</button>
            </div>

            <div className={styles.illustration}>
              <img
                src="/icons/introductionIllustration.svg"
                alt="Imagem de um jovem sentado em uma pedra usando seu notebook"
              />
            </div>
          </div>
        </section>

        <section className={styles.aboutApp} id="aboutApp">
          <div className="container">
            <h2>Como funciona</h2>

            <div className={styles.cards}>
              <Card
                image={"/icons/connections.svg"}
                title={"Crie Conexões"}
                text={"Lorem ipsum dolor sit amet, consecteu"}
              />

              <Card
                image={"/icons/security.svg"}
                title={"100% gratuito"}
                text={"Lorem ipsum dolor sit amet, consecteu"}
              />

              <Card
                image={"/icons/sharing.svg"}
                title={"Compartilhamento"}
                text={"Lorem ipsum dolor sit amet, consecteu"}
              />
            </div>
          </div>
        </section>

        <section className={styles.app} id="app">
          <div className={styles.container}>
            <div className={styles.download}>
              <h3>Baixe nosso app para desfrutar mais!</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae inventore blanditiis asperiores mollitia quos,
                repudiandae fuga odio fugiat! Molestiae sequi architecto vitae,
                cupiditate quia laborum? Distinctio ullam error repudiandae.
                Blanditiis?
              </p>

              <div className={styles.downloadButtons}>
                <a href="#">
                  <img
                    src="/icons/googlePlay.svg"
                    alt="Ícone para baixar o app na google play"
                  />
                </a>

                <a href="#">
                  <img
                    src="/icons/appStore.svg"
                    alt="Ícone para baixar o app na app store"
                  />
                </a>
              </div>
            </div>

            <div className={styles.illustration}>
              <img
                src="/icons/ourAppIllustration.svg"
                alt="Imagem de um home mexendo no seu celular sentado em uma almofada azul"
              />
            </div>
          </div>
        </section>

        <section className={styles.plans} id="plans">
          <div className={styles.container}>
            <h2>Nossos planos</h2>
            <p className={styles.subtitle}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
              fugiat, blanditiis id unde tempore commodi hic ex rem
              reprehenderit officiis illo distinctio.
            </p>

            <div className={styles.plansCards}>
              <CardPlan title={"Bronze"} price={"28"} />
              <CardPlan title={"Prata"} price={"57"} />
              <CardPlan title={"Ouro"} price={"94"} />
            </div>
          </div>
        </section>

        <section className={styles.contact} id="contact">
          <h2>Contato</h2>
          <p className={styles.subtitle}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat,
            expedita quisquam. Id laboriosam et voluptates eius natus earum
            optio iusto hic nisi
          </p>

          <div className={styles.form}>
            <form>
              <input type="email" placeholder="Seu melhor e-mail" />
            </form>
            <button type="submit">Enviar</button>
          </div>
        </section>
      </main>

      <footer>
        <p>Rachi - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
