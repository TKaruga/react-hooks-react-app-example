import React from "react";
import Transaction from "./Transaction";

function TransactionsList({ transactions, setTransactions }) {

  async function handleDeleteTransaction(id) {
    try {
      const response = await fetch(`http://localhost:3000/transactions/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setTransactions(transactions.filter(transaction => transaction.id !== id));
    } catch (error) {
      console.error('Error deleting transaction:', error);
    }
  };

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Delete Transaction</h3>
          </th>
        </tr>
        {/* render a list of <Transaction> components here */}
        {transactions.map(transaction => (
          <Transaction 
            key={transaction.id}
            date={transaction.date}
            description={transaction.description}
            category={transaction.category}
            amount={transaction.amount} 
            onDeleteTransaction={() => handleDeleteTransaction(transaction.id)}/> 
        ))};
      </tbody>
    </table>
  );
}

export default TransactionsList;
