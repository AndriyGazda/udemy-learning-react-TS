import type { JSX } from "react";
import classes from "./TableComponent.module.css";

const TableComponent = (): JSX.Element => {
  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const onClickHandler = () => {
    console.log();
  };

  return (
    <table className={classes.tableMultiplication} onClick={onClickHandler}>
      <caption className={classes.titleText}>Test React table</caption>
      <thead className={classes.tableTHead}>
        <tr>
          <th className={classes.rowHead}></th>
          {numbers.map((col: number): JSX.Element => {
            return (
              <th className={classes.rowHead} key={col}>
                {col}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className={classes.tableTBody}>
        {numbers.map((row: number) => {
          return (
            <tr key={row}>
              <th className={classes.rowHead}>{row}</th>

              {numbers.map((col: number) => {
                return (
                  <td className={classes.rowBody} key={`${row}-${col}`}>
                    {row * col}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableComponent;
