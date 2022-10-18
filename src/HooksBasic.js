import React, { useState } from "react";

function HooksBasic() {
  // Zadeklaruj nową zmienną stanu, którą nazwiemy „count”
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Naciśnięto {count} razy</p>
      <button onClick={() => setCount(count + 1)}>Naciśnij mnie</button>
      <button onClick={() => setCount(count - 1)}>odejmnij mnie</button>
      <button onClick={() => setCount(0)}>        zresetuj mnie</button>
    </div>
  );
}

export default HooksBasic;
