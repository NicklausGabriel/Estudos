import { useState } from "react";

const ManageData = () => {
  let sameData: number = 10;
  const [number, setNumber] = useState<number>(10);
  return (
    <>
      <div>
        <p>O Valor: {sameData}</p>
        <button onClick={() => (sameData = 15)}>Mudar Valor</button>
      </div>
      <div>
        <p>O Valor: {number}</p>
        <button onClick={() => setNumber(15)}>Mudar Valor</button>
      </div>
    </>
  );
};

export default ManageData;
