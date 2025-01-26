import React, { useState } from 'react';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [depositAmount, setDepositAmount] = useState(0);
  const [loanPeriod, setLoanPeriod] = useState(1);

  const handleCalculate = () => {
    const totalLoan = loanAmount - depositAmount;
    const monthlyPayment = totalLoan / loanPeriod;
    alert(`Your monthly payment will be: PKR ${monthlyPayment}`);
  };

  const loanCalculatorStyles = {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const inputStyles = {
    margin: '10px 0',
    padding: '10px',
    width: '200px',
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
    <div style={loanCalculatorStyles}>
      <h2>Loan Calculator</h2>
      <input
        type="number"
        placeholder="Loan Amount"
        value={loanAmount}
        onChange={(e) => setLoanAmount(e.target.value)}
        style={inputStyles}
      />
      <input
        type="number"
        placeholder="Deposit Amount"
        value={depositAmount}
        onChange={(e) => setDepositAmount(e.target.value)}
        style={inputStyles}
      />
      <input
        type="number"
        placeholder="Loan Period (Years)"
        value={loanPeriod}
        onChange={(e) => setLoanPeriod(e.target.value)}
        style={inputStyles}
      />
      <button style={buttonStyles} onClick={handleCalculate}>
        Calculate
      </button>
    </div>
  );
};

export default LoanCalculator;
