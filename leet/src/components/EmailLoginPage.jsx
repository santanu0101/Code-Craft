import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EmailLoginPage = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('http://localhost:8000/api/auth/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to send OTP');
      }
      
      setApiResponse(data);
      
      // Store email in session storage for the OTP verification page
      sessionStorage.setItem('userEmail', email);
      
      // Navigate to OTP verification page after a short delay
      setTimeout(() => {
        navigate('/verify-otp');
      }, 2000);
      
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Login</h1>
          <p className="mt-2 text-gray-600">Enter your email to receive an OTP</p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="you@example.com"
            />
          </div>
          
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
            >
              {loading ? 'Sending...' : 'Send OTP'}
            </button>
            
          </div>
        </form>
        
        {apiResponse && (
          <div className="p-4 mt-4 text-sm text-green-700 bg-green-100 rounded-md">
            <p>{apiResponse.message || 'OTP sent successfully!'}</p>
          </div>
        )}
        
        {error && (
          <div className="p-4 mt-4 text-sm text-red-700 bg-red-100 rounded-md">
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailLoginPage;