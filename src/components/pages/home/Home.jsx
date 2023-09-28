import styles from "./Home.modules.css";

export const Home = () => {
  return (
    <div>
      <h1 style={{ color: "red", fontSize: "2rem" }}>{tiendaDeFiguras}</h1>
      <h2 className={styles.title}>este es el titulo de Home</h2>
    </div>
  );
};
