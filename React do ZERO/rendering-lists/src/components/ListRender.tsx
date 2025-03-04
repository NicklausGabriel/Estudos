import { useState } from "react";

const ListRender = () => {
  const [list] = useState<string[]>(["gabriel", "nicolas"]);
  return (
    <>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default ListRender;
