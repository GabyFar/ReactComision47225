import { Home } from "./components/pages/home/Home";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { Login } from "./components/pages/login/Login";
import { Navbar } from "./layouts/navbar/Navbar";

function App() {
  let saludo = "bienvenido a tienda de figuras";

  console.log("estoy sumar");

  return (
    <div>
      <Navbaravbar />

      <Home />

      <Login />

      <ItemListContainer saludo={saludo} edad={12} />

      <Footer />
    </div>
  );
}

export default App;
