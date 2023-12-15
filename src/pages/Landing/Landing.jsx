import styles from "./Landing.module.css";

const Landing = ({ start }) => {
    
  const handleClick = () => {
    start();
  };

  return (
    <div className={styles.container}>
      <div className={styles.pokeball}>
        <div className={styles.pokeball__button}></div>
      </div>
      <span className={styles.btn_play} onClick={handleClick}>
        Pulsa para iniciar
      </span>
    </div>
  );
};

export default Landing;
