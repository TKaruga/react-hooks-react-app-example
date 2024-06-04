import React from "react";

function Transaction({ date, description, category, amount, onDeleteTransaction}) {
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td><button onClick={onDeleteTransaction}>Delete</button></td>
      
    </tr>
  );
}

export default Transaction;
