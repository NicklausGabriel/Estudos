import "./App.css";

import React from "./assets/react.svg";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import Desafio4 from "./pages/Desafio4";
function App() {
  return (
    <>
      <div>
        <img src="/vite.svg" alt="imagem test" />
        <img src="/img1.jpeg" alt="imagem test 2" />
      </div>
      {/* //Imagens em assets */}
      <div>
        <img src={React} alt="" />
      </div>
      <ManageData />
      <ListRender />
      <Desafio4 />
    </>
  );
}

export default App;
