import React from "react";
import styles from "./style.module.scss";

function TableHeadCell(value, ind) {
  return <th key={ind} className={styles.th}>{value}</th>;
}

function TableCell(value, ind) {
  return <td key={ind} className={styles.td}>{value}</td>
}

function TableRow(value, ind) {
  return <tr key={ind} className={styles.row}>
    <td key={ind} className={styles.td}>{ind + 1}</td>
    {value.map(TableCell)}
  </tr>
}

export default function Table(props) {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.row_head}>
            <th className={styles.th}>Sl No.</th>
            {props.data.header.map(TableHeadCell)}
          </tr>
        </thead>
        <tbody>
          {props.data.values.map(TableRow)}
        </tbody>
      </table>
    </div>
  );
}
