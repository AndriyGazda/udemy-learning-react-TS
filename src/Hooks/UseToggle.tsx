import { useState } from "react";

const useToggle = (initialValue: boolean) => {
  const [toggle, setState] = useState(initialValue);

  const setToggle = () => {
    setState((prevState) => !prevState);
  };

  return {
    toggle,
    setToggle,
  };
};

export default useToggle;
