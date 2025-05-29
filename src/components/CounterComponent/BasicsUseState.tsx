import { useState, type JSX } from "react";

const Counter = (): JSX.Element => {
  const [counter, useCounter] = useState(0);
  const [value, useValue] = useState("");

  const incrementHandler = () => {
    if (value === "") {
      useCounter((prevState) => prevState + 1);
    }
    useCounter((prevState) => prevState + Number(value));
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    useValue(event.target.value);
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      incrementHandler();
    }
  };

  return (
    <>
      <h1>COUNTER</h1>
      <input
        type="number"
        value={value}
        onChange={changeHandler}
        onKeyDown={keyDownHandler}
      />
      <button type="button" onClick={incrementHandler}>
        Increment counter
      </button>
      <button
        type="button"
        onClick={() => {
          useCounter(0), useValue("");
        }}
      >
        Очистити
      </button>
      <p>{counter}</p>
    </>
  );
};

export default Counter;
