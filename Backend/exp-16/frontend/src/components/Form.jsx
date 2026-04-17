import { useState } from "react";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (password.length < 6) {
      setError("Min 6 characters");
      return;
    }
    setError("");
    window.alert("Form submitted successfully");
  };

  return (
    <div>
      <label htmlFor="email">Email</label>
      <input
        aria-label="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="password">Password</label>
      <input
        aria-label="password"
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSubmit}>Login</button>

      {error && <p>{error}</p>}
    </div>
  );
}