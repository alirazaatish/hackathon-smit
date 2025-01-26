import React, { useState } from 'react';

const LoanRequestForm = () => {
  const [cnic, setCnic] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = () => {
    alert('Loan request submitted successfully!');
  };

  const formStyles = {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const inputStyles = {
    margin: '10px 0',
    padding: '10px',
    width: '250px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const buttonStyles = {
    backgroundColor: '#008CBA',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    fontSize: '1em',
    cursor: 'pointer',
    borderRadius: '5px',
  };

  return (
    <div style={formStyles}>
      <h2>Loan Request Form</h2>
      <input
        type="text"
        placeholder="CNIC"
        value={cnic}
        onChange={(e) => setCnic(e.target.value)}
        style={inputStyles}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={inputStyles}
      />
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={inputStyles}
      />
      <button style={buttonStyles} onClick={handleSubmit}>
        Submit Request
      </button>
    </div>
  );
};

export default LoanRequestForm;
