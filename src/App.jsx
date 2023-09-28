import { Navbar } from "./Navbar";

function App() {

    let nombre = "pepito";

    console.log("estoy sumar");
    };

//    let estilos = {
//color: "red"

    

  return (
    <div>
      


    <navbar />

      <h1 style = {{ color: "red", fontSize: "2rem" }} >{nombre}</h1>
      <button conClick={sumar}>sumar</button>
    </div>
  );

  }

  export default App;