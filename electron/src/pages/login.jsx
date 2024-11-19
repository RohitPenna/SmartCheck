import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import userData from './data.json';

const Login = () => {
  const [acctId, setAcctId] = useState('');
  const [email, setEmail] = useState('');  // Add state for email
  const [password, setPassword] = useState('');  // Add state for password
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // Initialize navigate hook

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the account ID
    const userAccount = userData.find(account => account.acct_id === acctId);

    if (userAccount) {
      console.log("Login successful for account:", userAccount);
      setErrorMessage('');
      setIsLoggedIn(true); // Set login status to true

      // Navigate to home page after login
      navigate('/home'); // Redirect to home screen
    } else {
      setErrorMessage('Invalid Account ID');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          {/* Email section */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Handle email input change
              placeholder="Email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {/* Password section */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Handle password input change
              placeholder="Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {/* Account ID section */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="acctId">
              Account ID
            </label>
            <input
              type="text"
              id="acctId"
              value={acctId}
              onChange={(e) => setAcctId(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {errorMessage && (
            <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
          )}

          <div className="flex items-center justify-between">
            {!isLoggedIn ? (
              <button
                type="submit"
                className="bg-[#FF0037] hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
            ) : (
              <button
                type="submit"
                className="bg-[#FF0037] hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Redirecting to Home...
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
