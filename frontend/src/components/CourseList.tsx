import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Mock data for courses with added images
const courses = [
  { 
    id: 1, 
    title: 'Introduction to Forestry', 
    category: 'Environmental Science', 
    level: 'Beginner', 
    rating: 4.5, 
    enrolled: 1200,
    instructor: 'Dr. Jane Smith',
    image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
  },
  { 
    id: 2, 
    title: 'Advanced Forest Management', 
    category: 'Environmental Science', 
    level: 'Advanced', 
    rating: 4.8, 
    enrolled: 800,
    instructor: 'Prof. Michael Chen',
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
  },
  { 
    id: 3, 
    title: 'Wildlife Conservation', 
    category: 'Biology', 
    level: 'Intermediate', 
    rating: 4.2, 
    enrolled: 950,
    instructor: 'Dr. Sarah Williams',
    image: 'https://images.unsplash.com/photo-1558594144-7eeeaa34d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
  },
  { 
    id: 4, 
    title: 'Sustainable Logging Practices', 
    category: 'Environmental Science', 
    level: 'Intermediate', 
    rating: 4.6, 
    enrolled: 650,
    instructor: 'Prof. David Johnson',
    image: 'https://images.unsplash.com/photo-1517849280615-7b29c8c7ade8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
  },
];

// Category list for filtering
const categories = ['All', 'Environmental Science', 'Biology'];

function CourseList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Loading animation
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Filter courses based on search term and category
  useEffect(() => {
    const filtered = courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    setFilteredCourses(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 animate-fade-in">Explore Courses</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our free, high-quality courses taught by experts in forestry and environmental science.
          </p>
        </div>
        
        {/* Search and Filter Section */}
        <div className="mb-10 p-6 bg-white rounded-lg shadow-md transform transition-all duration-300 hover:shadow-lg">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative w-full sm:w-2/3">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search courses..."
                className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all duration-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="w-full sm:w-1/3">
              <select 
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all duration-200"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === 'All' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Stats summary */}
          <div className="mt-6 flex flex-wrap justify-between items-center pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              <span className="font-medium text-indigo-600">{filteredCourses.length}</span> courses found
            </p>
            
            <div className="flex items-center mt-2 sm:mt-0">
              <span className="text-sm text-gray-500 mr-3">Sort by:</span>
              <select className="text-sm border-0 focus:ring-0 text-gray-700 font-medium bg-transparent">
                <option>Most Popular</option>
                <option>Newest</option>
                <option>Rating</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredCourses.map((course, index) => (
            <Link 
              to={`/course/${course.id}`} 
              key={course.id} 
              className={`group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-0 right-0 m-2 px-2 py-1 bg-indigo-600 text-xs text-white font-bold rounded">
                  {course.level}
                </div>
              </div>
              
              <div className="p-5">
                <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-200">
                  {course.title}
                </h2>
                
                <p className="text-sm text-gray-600 mb-3">
                  <span className="inline-flex items-center">
                    <svg className="w-4 h-4 text-indigo-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {course.instructor}
                  </span>
                </p>
                
                <p className="text-sm text-gray-600 mb-3">
                  <span className="inline-flex items-center">
                    <svg className="w-4 h-4 text-indigo-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    {course.category}
                  </span>
                </p>
                
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400 mr-1">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm ml-1">({course.rating})</span>
                  <span className="text-gray-500 text-sm ml-auto">{course.enrolled} students</span>
                </div>
                
                <div className="pt-3 border-t border-gray-100">
                  <button className="w-full bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white py-2 px-4 rounded-md font-medium transition-all duration-200 transform group-hover:translate-y-0">
                    Enroll Now - Free
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Empty state */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">No courses found</h3>
            <p className="mt-1 text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
            <button 
              className="mt-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CourseList; 