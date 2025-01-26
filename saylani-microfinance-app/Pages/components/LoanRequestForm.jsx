import React, { useState } from "react";

const LoanRequestForm = () => {
  const [cnic, setCnic] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = () => {
    alert("Loan request submitted successfully!");
  };

  const containerStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f4f8",
  };

  const formStyles = {
    padding: "30px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "100%",
    maxWidth: "400px",
  };

  const inputStyles = {
    margin: "12px 0",
    padding: "12px",
    width: "100%",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "1em",
  };

  const buttonStyles = {
    backgroundColor: "green",
    color: "white",
    padding: "12px",
    width: "100%",
    border: "none",
    fontSize: "1em",
    cursor: "pointer",
    borderRadius: "8px",
    marginTop: "16px",
  };

  const headingStyles = {
    marginBottom: "20px",
    fontSize: "1.5em",
    color: "#333",
  };

  return (
    <div style={containerStyles}>
      <div style={formStyles}>
        <h2 style={headingStyles}>Loan Request Form</h2>
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
    </div>
  );
};

export default LoanRequestForm;
