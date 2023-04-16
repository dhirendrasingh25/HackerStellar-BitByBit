import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Input.css';

const Input = () => {

    const [formData, setFormData] = useState({
        budget: '',
        expense: '',
        budCat:[],
        payment: '',
        expenseCat: [],
        date: ''
      });
    
      const handleChange = (e) => {
        const { name, options,value } = e.target;
        let selectedValues = [];

        if (options) {
            for (let i = 0; i < options.length; i++) {
              if (options[i].selected) {
                selectedValues.push(options[i].value);
              }
            }
          }

        setFormData({
          ...formData,
          [name]: name === 'budCat' || name === 'expenseCat' ? selectedValues : value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the form data, e.g. submit to a server
        console.log(formData);
        // Reset the form after submission
        setFormData({
            budget: '',
            expense: '',
            budCat:[],
            payment: '',
            expenseCat: [],
            date: ''
        });
      };
  return (
    <div className='form-container'>
      <h2 className='input-form'> INPUT FORM </h2>
      <form onSubmit={handleSubmit} className='form-box'>
        <label htmlFor="budget">Budget:</label>
        <input className="input-field"
          
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          required
        /><br/><br/>
        <label htmlFor="expense">Expense:</label>
        <input
          
          id="expense"
          name="expense"
          value={formData.expense}
          onChange={handleChange}
          required
        /><br/><br/>
        <label htmlFor="budCat">Budget Category:</label>
        <select 
          
          id="budCat"
          name="budCat"
          value={formData.budCat}
          onChange={handleChange}
          required
          multiple
          >
            {/* <option value="">Select Catagory</option> */}
          <option value="food">Food</option>
          <option value="entertainment">Entertainment</option>
          <option value="clothing">Clothing</option>
            </select><br/><br/>
        <label htmlFor="payment">Payment:</label>
        <select
          id="payment"
          name="payment"
          value={formData.payment}
          onChange={handleChange}
          required
        >
            <option value="">Payment</option>
          <option value="card">Card</option>
          <option value="cash">Cash</option>
          

        </select>{' '}
         <br></br>
         <label htmlFor="expenseCat">Expense Category:</label>
        <select
          id="expenseCat"
          name="expenseCat"
          value={formData.expenseCat}
          onChange={handleChange}
          required
          multiple
        >
        {/* <option value="">Select Catagory</option> */}
          <option value="food">Food</option>
          <option value="entertainment">Entertainment</option>
          <option value="clothing">Clothing</option>

        </select><br/><br/>
        <label htmlFor="date">Date:</label>
        <input className='input-field'
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        /><br/><br/>
        <Link to="/">
        <input type="submit" value="Submit" />
        </Link>
        
      </form>
    </div>
  );
};



export default Input