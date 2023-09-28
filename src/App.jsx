import { Home } from "./components/pages/home/Home";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { Login } from "./components/pages/login/Login";
import { Navbar } from "./layouts/navbar/Navbar";

function App(){

    let saludo = "bienvenido a tienda de figuras";

console.log("estoy sumar");
    };

//    let estilos = {
//color: "red"

    

return (

    <div>
      


      <navbar />

      <home />

      <Login />

      <ItemListContainer saludo={saludo} edad={12} />

      <footer />


    </div>
);
}

export default App;