import React, {useState} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer({
  transactions, 
  setTransactions, 
  onhandleAddTransaction
}) {
  const [search, setSearch] = useState('');
  const [sortCriteria, setSortCriteria] = useState('description')

  const filteredTransactions = transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(search.toLowerCase())
  );

  filteredTransactions.sort((a, b) => {
    if (sortCriteria === 'category') {
      return a.category.localeCompare(b.category);
    }
    return a.description.localeCompare(b.description);
  })

  return (
    <div>
      <Search 
        transactions={transactions} 
        search={search} 
        setSearch={setSearch}
       />
      <AddTransactionForm 
        transactions={transactions}
        onhandleAddTransaction={onhandleAddTransaction}
        setTransactions={setTransactions}
        sortCriteria={sortCriteria} 
        setSortCriteria={setSortCriteria} />
      <TransactionsList 
        transactions={filteredTransactions}
        setTransactions={setTransactions}/>
    </div>
  );
}

export default AccountContainer;
