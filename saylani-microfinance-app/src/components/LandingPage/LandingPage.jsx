import React from 'react';

const LandingPage = () => {
  const landingPageStyles = {
    backgroundColor: '#f4f4f4',
    padding: '20px',
    textAlign: 'center',
  };

  const headingStyles = {
    fontSize: '2em',
    color: '#333',
  };

  const buttonStyles = {
    backgroundColor: '#008CBA',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1em',
    marginTop: '20px',
  };

  return (
    <div style={landingPageStyles}>
      <h1 style={headingStyles}>Welcome to Saylani Microfinance</h1>
      <p>Explore the different loan categories and apply for a loan</p>
      <button style={buttonStyles}>Proceed to Loan Calculator</button>
    </div>
  );
};

export default LandingPage;
