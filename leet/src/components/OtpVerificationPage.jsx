import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const OtpVerificationPage = () => {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Get email from session storage
    const storedEmail = sessionStorage.getItem('userEmail');
    if (!storedEmail) {
      navigate('/login');
      return;
    }
    setEmail(storedEmail);
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('http://localhost:8000/api/auth/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, otp }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to verify OTP');
      }
      
      setApiResponse(data);
      
      localStorage.setItem('email', JSON.stringify(data.email));
      // Navigate to dashboard after successful OTP verification
      setTimeout(() => {
        navigate('/questions');
      }, 2000);
      
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('http://localhost:8000/api/auth/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
    console.log(data)
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to resend OTP');
      }
      
      setApiResponse({ message: 'OTP resent successfully!' });
      
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
          <h1 className="text-2xl font-bold text-gray-900">Verify OTP</h1>
          <p className="mt-2 text-gray-600">Enter the OTP sent to {email}</p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
              OTP Code
            </label>
            <input
              id="otp"
              name="otp"
              type="text"
              required
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter OTP"
            />
          </div>
          
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              {loading ? 'Verifying...' : 'Verify OTP'}
            </button>
          </div>
        </form>
        
        <div className="text-center">
          <button
            onClick={handleResendOtp}
            disabled={loading}
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            Didn't receive OTP? Resend
          </button>
        </div>
        
        {apiResponse && (
          <div className="p-4 mt-4 text-sm text-green-700 bg-green-100 rounded-md">
            <p>{apiResponse.message || 'OTP verified successfully!'}</p>
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

export default OtpVerificationPage;