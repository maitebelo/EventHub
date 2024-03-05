import styles from './Home.module.css';
import calendar from '../../img/calendar.png';
import LinkButton from '../layout/LinkButton';

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-vindo ao <span>Event Hub</span>
      </h1>
      <p>Comece a gerenciar seus eventos agora mesmo!</p>
      <LinkButton to="/newevent" text="Criar Evento" />
      <img src={calendar} alt="Calendário" />
    </section>
  );
}

export default Home;
