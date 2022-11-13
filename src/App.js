import "./App.css";
import Todos from "./components/Todos";
import DisplayTodos from "./components/DisplayTodos";

function App() {
  return (
    <div className="App">
      <h1>Todo List App</h1>
      <h4>What's the plan for today ?</h4>
      <Todos />
      <DisplayTodos />
    </div>
  );
}

export default App;
