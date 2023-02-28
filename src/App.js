import "./css/main.css";
import Todo from "./components/AddTodo";
function App() {
  return (
    <div className="app">
      <h1 className="app-title">Redux Todo App</h1>
      <Todo />
    </div>
  );
}

export default App;
