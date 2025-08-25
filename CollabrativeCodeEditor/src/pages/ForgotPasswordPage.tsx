import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code2, Mail, ArrowLeft } from 'lucide-react';

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate password reset process
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      console.log('Password reset requested for:', email);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Code2 className="w-16 h-16 text-blue-400" />
                <div className="absolute -inset-4 bg-blue-400/20 rounded-full blur-xl"></div>
              </div>
            </div>
            <h2 className="text-3xl font-bold">Check your email</h2>
            <p className="mt-4 text-gray-400">
              We've sent a password reset link to <strong className="text-white">{email}</strong>
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-xl text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-green-400" />
              </div>
              <p className="text-gray-300">
                Please check your email inbox and follow the instructions to reset your password.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-gray-400">
                Didn't receive the email? Check your spam folder or{' '}
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  try again
                </button>
              </p>

              <Link
                to="/login"
                className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to sign in</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Code2 className="w-16 h-16 text-blue-400" />
              <div className="absolute -inset-4 bg-blue-400/20 rounded-full blur-xl"></div>
            </div>
          </div>
          <h2 className="text-3xl font-bold">Forgot your password?</h2>
          <p className="mt-2 text-gray-400">
            Enter your email address and we'll send you a link to reset your password
          </p>
        </div>

        {/* Form */}
        <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-gray-400"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                'Send reset link'
              )}
            </button>
          </form>

          {/* Back to login */}
          <div className="mt-6 text-center">
            <Link
              to="/login"
              className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to sign in</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;