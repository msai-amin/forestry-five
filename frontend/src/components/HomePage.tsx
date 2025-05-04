import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const [email, setEmail] = useState('');

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup with:', email);
    // In a real app, we would send this to the backend
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-indigo-900">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-30"
            src="https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
            alt="Forest with technology overlay"
          />
          <div className="absolute inset-0 bg-indigo-900 opacity-50" />
        </div>
        <div className="relative max-w-7xl mx-auto py-32 px-4 sm:py-40 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl animate-fade-in">
            Introduction to AI for Professional Foresters
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl animate-fade-in">
            Master the application of artificial intelligence in forestry. Learn how AI can revolutionize forest management, 
            conservation efforts, and sustainable practices.
          </p>
          
          <div className="mt-8 max-w-md animate-fade-in">
            <form onSubmit={handleSignup} className="grid grid-cols-1 gap-4 sm:grid-flow-col sm:auto-cols-fr sm:gap-2">
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-5 py-3 border border-transparent rounded-md text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-5 py-3 border border-transparent rounded-md shadow bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform transition-transform hover:scale-105"
                >
                  Sign up for free
                </button>
              </div>
            </form>
            <p className="mt-3 text-sm text-indigo-200">
              Start your learning journey today. No credit card required.
            </p>
          </div>
          
          <div className="mt-8 flex items-center space-x-4 text-white animate-fade-in">
            <div className="flex items-center">
              <svg className="h-5 w-5 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="ml-2">6-week program</span>
            </div>
            <div className="flex items-center">
              <svg className="h-5 w-5 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
              <span className="ml-2">Certificate included</span>
            </div>
            <div className="flex items-center">
              <svg className="h-5 w-5 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <span className="ml-2">Lifetime access</span>
            </div>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase animate-fade-in">Course Overview</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl animate-fade-in">
              AI Technology Meets Forestry Expertise
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto animate-fade-in">
              This comprehensive course bridges the gap between cutting-edge AI technology and traditional forestry practices.
            </p>
          </div>

          <div className="mt-16">
            <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
              <div className="relative stagger-animation">
                <div className="relative pb-10 animate-scale-in">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-24 w-24 rounded-md flex items-center justify-center bg-indigo-500">
                      <svg className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                  </div>
                  <div className="relative text-center mt-28">
                    <h3 className="text-2xl font-medium text-gray-900">Learn AI Fundamentals</h3>
                    <p className="mt-4 text-base text-gray-500">
                      Understand the core concepts of artificial intelligence, machine learning, and data science as they apply to forestry.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative stagger-animation">
                <div className="relative pb-10 animate-scale-in" style={{ animationDelay: "0.2s" }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-24 w-24 rounded-md flex items-center justify-center bg-indigo-500">
                      <svg className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                  </div>
                  <div className="relative text-center mt-28">
                    <h3 className="text-2xl font-medium text-gray-900">Practical Applications</h3>
                    <p className="mt-4 text-base text-gray-500">
                      Explore real-world applications of AI in forest inventory, disease detection, fire prediction, and biodiversity monitoring.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative stagger-animation">
                <div className="relative pb-10 animate-scale-in" style={{ animationDelay: "0.4s" }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-24 w-24 rounded-md flex items-center justify-center bg-indigo-500">
                      <svg className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                  </div>
                  <div className="relative text-center mt-28">
                    <h3 className="text-2xl font-medium text-gray-900">Build Your Own Solutions</h3>
                    <p className="mt-4 text-base text-gray-500">
                      Develop and implement custom AI solutions for forestry challenges using industry-standard tools and frameworks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curriculum Section */}
      <div className="bg-gray-50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-prose mx-auto lg:max-w-none">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase animate-fade-in">Curriculum</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl animate-fade-in">
              What You'll Learn
            </p>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:row-start-1 lg:col-start-2">
              <div className="relative text-base mx-auto lg:max-w-none">
                <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center animate-fade-in"
                    src="https://images.unsplash.com/photo-1526406915894-7bcd65f60845?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                    alt="AI and forest technology"
                    width={1184}
                    height={746}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="text-base mx-auto lg:max-w-none">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md transform transition-all hover:shadow-lg animate-slide-in-left">
                    <h3 className="text-lg font-medium text-gray-900">Module 1: Foundations of AI in Forestry</h3>
                    <ul className="mt-2 list-disc list-inside text-gray-500 space-y-1">
                      <li>Introduction to AI concepts and terminology</li>
                      <li>The intersection of data science and forestry</li>
                      <li>Key challenges and opportunities in the sector</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md transform transition-all hover:shadow-lg animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
                    <h3 className="text-lg font-medium text-gray-900">Module 2: Remote Sensing & Image Analysis</h3>
                    <ul className="mt-2 list-disc list-inside text-gray-500 space-y-1">
                      <li>Satellite and drone imagery processing</li>
                      <li>Machine learning for image classification</li>
                      <li>Forest cover and health assessment</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md transform transition-all hover:shadow-lg animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
                    <h3 className="text-lg font-medium text-gray-900">Module 3: Predictive Modeling for Forest Management</h3>
                    <ul className="mt-2 list-disc list-inside text-gray-500 space-y-1">
                      <li>Growth and yield modeling with machine learning</li>
                      <li>Fire risk prediction systems</li>
                      <li>Climate change impact assessment</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md transform transition-all hover:shadow-lg animate-slide-in-left" style={{ animationDelay: "0.3s" }}>
                    <h3 className="text-lg font-medium text-gray-900">Module 4: AI Tools & Implementation</h3>
                    <ul className="mt-2 list-disc list-inside text-gray-500 space-y-1">
                      <li>Practical experience with common AI frameworks</li>
                      <li>Developing custom solutions for forestry challenges</li>
                      <li>Integration with existing forest management systems</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Instructor Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-base font-semibold tracking-wide uppercase text-indigo-600 animate-fade-in">Meet Your Instructor</h2>
              <h3 className="mt-2 text-3xl font-extrabold text-gray-900 animate-fade-in">Dr. Alex Morgan</h3>
              <p className="mt-4 text-lg text-gray-500 animate-fade-in">
                Dr. Morgan has over 15 years of experience in computational forestry and artificial intelligence. 
                Previously the lead data scientist at the Forest Research Institute, he has pioneered several 
                breakthrough applications of AI in sustainable forest management.
              </p>
              <div className="mt-6 animate-fade-in">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">PhD in Environmental Data Science</h4>
                    <p className="mt-2 text-base text-gray-500">Stanford University</p>
                  </div>
                </div>
                <div className="flex mt-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">Author</h4>
                    <p className="mt-2 text-base text-gray-500">"Digital Forestry: AI in the Age of Climate Change"</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 animate-fade-in">
              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                <img
                  className="object-cover"
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1349&q=80"
                  alt="Instructor portrait"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-indigo-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white text-center animate-fade-in">
            What Professionals Are Saying
          </h2>
          <div className="mt-12 space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="lg:col-span-1">
              <div className="h-full bg-white rounded-lg shadow-lg overflow-hidden animate-slide-in-right">
                <div className="px-6 py-8">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Testimonial author" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Maria Rodriguez</h3>
                      <p className="text-base text-gray-500">Forest Conservation Specialist</p>
                    </div>
                  </div>
                  <blockquote className="mt-8">
                    <p className="text-base text-gray-500">
                      "This course completely transformed my approach to monitoring forest health. The AI techniques I learned 
                      have helped me identify disease outbreaks weeks earlier than traditional methods."
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="h-full bg-white rounded-lg shadow-lg overflow-hidden animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
                <div className="px-6 py-8">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Testimonial author" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">James Chen</h3>
                      <p className="text-base text-gray-500">Forestry Department Manager</p>
                    </div>
                  </div>
                  <blockquote className="mt-8">
                    <p className="text-base text-gray-500">
                      "The predictive modeling section alone saved our department thousands of dollars in resource allocation. 
                      Dr. Morgan's teaching style makes complex AI concepts accessible to forestry professionals."
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="h-full bg-white rounded-lg shadow-lg overflow-hidden animate-slide-in-right" style={{ animationDelay: "0.4s" }}>
                <div className="px-6 py-8">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Testimonial author" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Dr. Robert Taylor</h3>
                      <p className="text-base text-gray-500">Research Scientist</p>
                    </div>
                  </div>
                  <blockquote className="mt-8">
                    <p className="text-base text-gray-500">
                      "As someone with a traditional forestry background, I was hesitant about AI. This course showed me 
                      how these technologies can enhance rather than replace our expertise in the field."
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="bg-indigo-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl animate-fade-in">
                  <span className="block">Ready to transform your forestry practice?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-indigo-200 animate-fade-in">
                  Join hundreds of forestry professionals who are already applying AI techniques to solve 
                  critical environmental challenges. Start your journey today.
                </p>
                <form onSubmit={handleSignup} className="mt-8 sm:w-full sm:max-w-md animate-fade-in">
                  <div className="sm:flex">
                    <label htmlFor="email-address" className="sr-only">Email address</label>
                    <input
                      id="email-address"
                      name="email-address"
                      type="email"
                      autoComplete="email"
                      required
                      className="w-full px-5 py-3 border-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white"
                      >
                        Start learning
                      </button>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-indigo-200">
                    Free enrollment. No credit card required.
                  </p>
                </form>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <img
                className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src="https://images.unsplash.com/photo-1550399504-c5c6068d3f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1351&q=80"
                alt="App screenshot"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage; 