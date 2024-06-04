import React, {useState} from "react";

function AddTransactionForm({ setTransactions, transactions, sortCriteria, setSortCriteria }) {

  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('');


  function handleDateChange (e){
    setDate(e.target.value)
  }

  function handleDescriptionChange (e){
    setDescription(e.target.value)
  }

  function handleCategoryChange (e){
    setCategory(e.target.value)
  }

  function handleAmountChange (e){
    setAmount(e.target.value)
  }

  async function handleAddTransaction(newTransaction) {
    try {
      const response = await fetch('http://localhost:3000/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTransaction),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const addedTransaction = await response.json();
      setTransactions([...transactions, addedTransaction]);
    } catch (error) {
      console.error('Error adding transaction:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
   
    const newTransaction = {
      id: (transactions.length + 1),
      date: date,
      category: category,
      description: description,
      amount: amount
    };
    handleAddTransaction(newTransaction);
    setDate('');
    setCategory('');
    setDescription('');
    setAmount('')
  };
  
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" value={date} onChange={handleDateChange}/>
          <input type="text" name="description" placeholder="Description" value={description} onChange={handleDescriptionChange}/>
          <input type="text" name="category" placeholder="Category" value={category} onChange={handleCategoryChange}/>
          <input type="number" name="amount" placeholder="Amount" step="0.01" value={amount} onChange={handleAmountChange}/>
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
      <div className="sort-tab">
        <label className="sort-label">Sort by:  </label>
        <select onChange={(e) => setSortCriteria(e.target.value)} value={sortCriteria}>
          <option value="description">Description</option>
          <option value="category">Category</option>
        </select>
      </div>
    </div>
  );
}

export default AddTransactionForm;
