import "./App.css";
import Counter from "./components/CounterComponent/BasicsUseState";
import TableComponent from "./components/TableComponent/TableComponent";
import ToDoList from "./components/ToDoListComponent/ToDoListComponent";

function App() {
  return (
    <>
      <ToDoList />
      <TableComponent />
      <Counter />
    </>
  );
}

export default App;
