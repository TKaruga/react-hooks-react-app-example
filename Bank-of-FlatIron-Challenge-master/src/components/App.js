import React, {useEffect, useState} from "react";
import AccountContainer from "./AccountContainer";

function App() {
  const [transactions, setTransactions] = useState([]);
  

  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data));
  }, []);

  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer 
      transactions={transactions} 
      setTransactions={setTransactions}/>
    </div>
  );
}

export default App;
