import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <h1>Behelit Clicker</h1>
      <Counter initialValue={0} step={1}></Counter>
    </div>
  );
}

export default App;
