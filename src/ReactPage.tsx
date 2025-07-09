import { useState } from "react";
import MyChart from "./components/Charts";
import { useEmit } from "./hooks/useEmit";
import { useEventBus } from "./hooks/useEventBus";

const ReactPage = () => {
  const [balance, setBalance] = useState(0);
  const emit = useEmit();

  useEventBus<number>("balanceChange", setBalance);

  return (
    <div style={{ padding: 20, border: "2px dashed blue" }}>
      <h2>React Path</h2>
      <button onClick={() => emit("balanceChange", balance + 1)}>
        Incrementar balance ({balance})
      </button>
      <div>Balance: {balance}</div>

      <MyChart />
    </div>
  );
};

export default ReactPage;
