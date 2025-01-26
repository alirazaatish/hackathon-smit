import React, { useState } from 'react';

const categories = [
    {
        name: "Wedding Loans",
        subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
        maxLoan: "5 Lakh",
        loanPeriod: "3 years",
        icon: "🎉",
    },
    {
        name: "Home Construction Loans",
        subcategories: ["Structure", "Finishing", "Loan"],
        maxLoan: "10 Lakh",
        loanPeriod: "5 years",
        icon: "🏠",
    },
    {
        name: "Business Startup Loans",
        subcategories: ["Buy Stall", "Advance Rent for Shop", "Shop Assets", "Shop Machinery"],
        maxLoan: "10 Lakh",
        loanPeriod: "5 years",
        icon: "💼",
    },
    {
        name: "Education Loans",
        subcategories: ["University Fees", "Child Fees Loan"],
        maxLoan: "Based on requirement",
        loanPeriod: "4 years",
        icon: "🎓",
    },
];

function LandingPage() {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedSubcategory, setSelectedSubcategory] = useState("");
    const [loanAmount, setLoanAmount] = useState("");
    const [initialDeposit, setInitialDeposit] = useState("");
    const [loanPeriod, setLoanPeriod] = useState(0);
    const [monthlyPayment, setMonthlyPayment] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [userDetails, setUserDetails] = useState({ cnic: "", email: "", name: "" });

    const handleLoanCalculation = () => {
        if (!loanAmount || !initialDeposit || !loanPeriod) {
            alert("Please fill in all fields.");
            return;
        }

        const loanToPay = loanAmount - initialDeposit;
        const monthlyPayment = loanToPay / (loanPeriod * 12);
        setMonthlyPayment(monthlyPayment);
    };

    const handleProceed = () => {
        if (!userDetails.cnic || !userDetails.email || !userDetails.name) {
            alert("Please fill in all your details.");
            return;
        }
        // Simulate account creation (you would send data to the backend here)
        alert("Account Created Successfully. Redirecting to Login page...");
        // Redirect to Login page (you can replace this with actual navigation)
        window.location.href = "/login";
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#F3F4F6', paddingBottom: '30px' }}>
            {/* Navbar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', padding: '10px 20px' }}>
                <img src="https://i.brecorder.com/large/2024/05/6637eb7e6d6ae.jpg" alt="Logo" style={{ width: '100px', height: 'auto' }} />
                <div>
                    <a href="/" style={{ margin: '0 15px', color: '#333', textDecoration: 'none', fontSize: '18px' }}>Home</a>
                    <a href="/login" style={{ margin: '0 15px', color: '#333', textDecoration: 'none', fontSize: '18px' }}>Login</a>
                    <a href="/admin" style={{ margin: '0 15px', color: '#333', textDecoration: 'none', fontSize: '18px' }}>Admin</a>
                </div>
            </div>

            {/* Welcome Section */}
            <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#F3F4F6', color: '#333', padding: '20px', textAlign: 'center' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#1E3A8A', marginBottom: '20px' }}>Welcome to the Saylani Welfare Microfinance App</h1>
                <h2 style={{ fontSize: '24px', marginBottom: '20px', fontStyle: 'italic' }}>Non-Governmental Organization in Pakistan</h2>
                <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '30px' }}>
                    Saylani Welfare is the largest NGO offering free education. It is actively working on the ground with local communities to assess how best to support underprivileged families in more than 63 areas of day-to-day lives.
                </p>
            </div>

            {/* Category Selection */}
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', padding: '20px' }}>
                {categories.map((category, index) => (
                    <div
                        key={index}
                        style={{ border: '2px solid #1E3A8A', borderRadius: '10px', padding: '15px', width: '200px', textAlign: 'center', cursor: 'pointer' }}
                        onClick={() => setSelectedCategory(category.name)}
                    >
                        <h3>{category.icon} {category.name}</h3>
                        <p>Max Loan: {category.maxLoan}</p>
                        <p>Loan Period: {category.loanPeriod}</p>
                        {selectedCategory === category.name && (
                            <div style={{ marginTop: '10px' }}>
                                {category.subcategories.map((sub, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedSubcategory(sub)}
                                        style={{ backgroundColor: '#10B981', color: 'white', border: 'none', padding: '8px 15px', margin: '5px', borderRadius: '5px' }}
                                    >
                                        {sub}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Loan Details Form */}
            {selectedCategory && selectedSubcategory && (
                <div style={{ marginTop: '30px', padding: '20px', border: '2px solid #1E3A8A', borderRadius: '10px', backgroundColor: '#fff' }}>
                    <h2>Loan Application</h2>
                    <p>Category: {selectedCategory}</p>
                    <p>Subcategory: {selectedSubcategory}</p>

                    {/* Loan Amount Input */}
                    <input
                        type="number"
                        placeholder="Enter Loan Amount"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(e.target.value)}
                        style={{ padding: '10px', margin: '10px', width: '80%' }}
                    />

                    {/* Initial Deposit Input */}
                    <input
                        type="number"
                        placeholder="Enter Initial Deposit"
                        value={initialDeposit}
                        onChange={(e) => setInitialDeposit(e.target.value)}
                        style={{ padding: '10px', margin: '10px', width: '80%' }}
                    />

                    {/* Loan Period Input */}
                    <input
                        type="number"
                        placeholder="Enter Loan Period (in years)"
                        value={loanPeriod}
                        onChange={(e) => setLoanPeriod(e.target.value)}
                        style={{ padding: '10px', margin: '10px', width: '80%' }}
                    />

                    <button
                        onClick={handleLoanCalculation}
                        style={{ backgroundColor: '#10B981', color: 'white', border: 'none', padding: '10px 20px', marginTop: '15px', cursor: 'pointer' }}
                    >
                        Calculate Monthly Payment
                    </button>

                    {/* Loan Calculation Result */}
                    {monthlyPayment !== null && (
                        <div style={{ marginTop: '20px', padding: '20px', border: '2px solid #1E3A8A', borderRadius: '10px', backgroundColor: '#F9F9F9' }}>
                            <h3>Loan Details</h3>
                            <p>Total Loan Amount: PKR {loanAmount}</p>
                            <p>Initial Deposit: PKR {initialDeposit}</p>
                            <p>Loan Period: {loanPeriod} years</p>
                            <p>Monthly Payment: PKR {monthlyPayment.toFixed(2)}</p>
                        </div>
                    )}

                    {/* Proceed Button */}
                    <button
                        onClick={() => setShowPopup(true)}
                        style={{ backgroundColor: '#10B981', color: 'white', border: 'none', padding: '10px 20px', marginTop: '20px', cursor: 'pointer' }}
                    >
                        Proceed
                    </button>
                </div>
            )}

            {/* Popup for User Details */}
            {showPopup && (
                <div style={{
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <div style={{ backgroundColor: '#fff', padding: '50px', borderRadius: '10px', width: '300px' }}>
                        <h3>Enter Your Details</h3>
                        <input
                            type="text"
                            placeholder="CNIC"
                            value={userDetails.cnic}
                            onChange={(e) => setUserDetails({ ...userDetails, cnic: e.target.value })}
                            style={{ padding: '10px', margin: '10px', width: '100%' }}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={userDetails.email}
                            onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                            style={{ padding: '10px', margin: '10px', width: '100%' }}
                        />
                        <input
                            type="text"
                            placeholder="Name"
                            value={userDetails.name}
                            onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                            style={{ padding: '10px', margin: '10px', width: '100%' }}
                        />
                        <button
                            onClick={handleProceed}
                            style={{ backgroundColor: '#10B981', color: 'white', border: 'none', padding: '10px 20px', marginTop: '15px', cursor: 'pointer' }}
                        >
                            Submit
                        </button>
                        <button
                            onClick={()=>setShowPopup(false)}
                            style={{ backgroundColor: '#10D981', color: 'white', border: 'none', marginLeft: '5px', padding: '10px 20px', marginTop: '15px', cursor: 'pointer' }}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}

            {/* Footer */}
            <div
                style={{
                    backgroundColor: '#1E3A8A',
                    color: '#fff',
                    padding: '15px',
                    textAlign: 'center',
                    position: 'sticky',
                    bottom: '0',
                    width: '100%',
                    marginTop: '10px', // optional, adjust based on content
                }}
            >
                <p>&copy; 2024 Saylani Welfare International Trust</p>
            </div>
        </div>
    );
}

export default LandingPage;
