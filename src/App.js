import React, { useState } from "react";
import "./styles.css"; // Make sure this is linked

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState(""); // For signup only
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSignup, setIsSignup] = useState(false); // Toggle state

  // Function to validate email format
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset messages
    setError("");
    setSuccess("");

    if (!isValidEmail(email)) {
      setError("❌ Invalid email format. Please enter a valid email.");
      return;
    }

    if (password.length < 6) {
      setError("🔒 Password must be at least 6 characters long.");
      return;
    }

    if (isSignup && fullName.trim() === "") {
      setError("📝 Please enter your full name for signup.");
      return;
    }

    // If everything is correct, show success message
    setSuccess(isSignup ? "🎉 Signup successful! Welcome to Nujhat's World!" : "🌍 Welcome back! Login successful.");
  };

  return (
    <div className="world-container">
      <div className="login-box">
        <h2 className="welcome-text">{isSignup ? "🌟 Join Nujhat's World!" : "🚀 Explore Nujhat's World"}</h2>
        <p className="subtext">{isSignup ? "Create an account to begin your journey" : "Login to continue your adventure"}</p>

        <form onSubmit={handleSubmit}>
          {isSignup && (
            <input
              type="text"
              placeholder="Enter your full name"
              className="input-field"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          )}

          <input
            type="text"
            placeholder="Enter your email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <input
            type="password"
            placeholder="Enter your password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}

          <button type="submit" className="explore-btn">{isSignup ? "Sign Up 🚀" : "Login 🌍"}</button>
        </form>

        <p className="toggle-text">
          {isSignup ? "Already have an account?" : "New here?"}  
          <span className="toggle-link" onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? " Log in here" : " Sign up now!"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default App;
