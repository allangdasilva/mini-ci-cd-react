import Background from "./components/bg/Background";
import Counter from "./components/counter/Counter";
import Title from "./components/title/Title";
import "./index.css";

function App() {
  return (
    <main className="main">
      <Background />
      <Title>Counter App</Title>
      <Counter />
    </main>
  );
}

export default App;
