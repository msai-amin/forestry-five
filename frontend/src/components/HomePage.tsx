import React, { useState } from 'react';

function HomePage() {
  const [email, setEmail] = useState('');

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup with:', email);
    // In a real app, we would send this to the backend
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-screen bg-indigo-900 flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-40"
            src="https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
            alt="Forest with technology overlay"
          />
          <div className="absolute inset-0 bg-indigo-900 opacity-50" />
        </div>
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl animate-fade-in">
            Introduction to AI for Professional Foresters
          </h1>
          <p className="mt-6 text-xl text-indigo-100 animate-fade-in">
            Master the application of artificial intelligence in forestry. Learn how AI can revolutionize forest management, 
            conservation efforts, and sustainable practices.
          </p>
          
          <div className="mt-10 max-w-md mx-auto animate-fade-in">
            <form onSubmit={handleSignup}>
              <div className="flex flex-col space-y-4">
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-5 py-3 border border-transparent rounded-md text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-indigo-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent rounded-md shadow bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform transition-transform hover:scale-105"
                >
                  Enroll Now - Free
                </button>
              </div>
              <p className="mt-3 text-sm text-indigo-200">
                Start your learning journey today. No credit card required.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage; 