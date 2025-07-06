import { useState, useEffect } from "react";
import MyChart from "./components/Charts";
import { SharedService } from "mfeShell/lib-shared";

const ReactPage = () => {
  const [msg, setMsg] = useState<string>("");
  useEffect(() => {
    const service = new SharedService();
    setMsg(service.getHello());
  }, []);

  return (
    <div style={{ padding: 20, border: "2px dashed blue" }}>
      <h2>React Path</h2>
      <p>Evento Shared: {msg}</p>

      <MyChart />
    </div>
  );
};

export default ReactPage;
