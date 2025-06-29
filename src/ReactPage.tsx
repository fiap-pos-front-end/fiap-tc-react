import MyChart from "./components/Charts";

const ReactPage = () => {
  return (
    <div style={{ padding: 20, border: "2px dashed blue" }}>
      <h2>Hello from React!</h2>
      <p>This page is being rendered inside an Angular shell.</p>

      <MyChart />
    </div>
  );
};

export default ReactPage;
