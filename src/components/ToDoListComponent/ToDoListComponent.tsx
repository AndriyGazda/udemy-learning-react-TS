import { useState } from "react";
import classes from "./ToDoListComponent.module.css";
import { v4 as uuidv4 } from "uuid";
import Button from "../ButtonComponent";

const todos = [
  { id: "1", todo: "firstToDo" },
  { id: "2", todo: "secondToDo" },
  { id: 3, todo: "thridToDo" },
];

const ToDoList = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState(() => todos);

  const randomID = uuidv4();

  const taskHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const addTask = () => {
    if (input.length > 0) {
      const updateTodos = [...items, { id: randomID, todo: input }];
      setItems(updateTodos);
      setInput("");
    }
  };
  const deleteLastTask = () => {
    setItems((prevItems) =>
      prevItems.filter((_, index) => index !== prevItems.length - 1)
    );
  };

  const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.key === "Enter" && addTask();
  };

  return (
    <div className={classes.toDoList}>
      <h1>ToDo List</h1>

      <input
        type="text"
        value={input}
        className={classes.toDoListInput}
        onChange={taskHandler}
        onKeyDown={keyDownHandler}
      ></input>
      <Button type="button" onClick={addTask} disabled={!input}>
        Add ToDo
      </Button>
      <Button
        type="button"
        onClick={deleteLastTask}
        disabled={items.length === 0}
      >
        Delete Last ToDo
      </Button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
