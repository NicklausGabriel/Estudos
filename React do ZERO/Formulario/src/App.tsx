import { useState } from "react";
import "./App.css";
import MyForm from "./components/Myform";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h2>Forms</h2>
        <MyForm user={{ name: "gabriel", email: "gabriel@gmail.com" }} />
      </div>
    </>
  );
}

export default App;
