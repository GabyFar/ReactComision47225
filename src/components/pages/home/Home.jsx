import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div>
      <h1 style={{ color: "red", fontSize: "2rem" }}>{tiendaDeFiguras}</h1>
      <h2 className={styles.title}>Bienvenido</h2>
    </div>
  );
};
