import React from 'react';

// Mock data for courses
const courses = [
  { id: 1, title: 'Introduction to Forestry', category: 'Environmental Science', level: 'Beginner', rating: 4.5, enrolled: 1200 },
  { id: 2, title: 'Advanced Forest Management', category: 'Environmental Science', level: 'Advanced', rating: 4.8, enrolled: 800 },
  { id: 3, title: 'Wildlife Conservation', category: 'Biology', level: 'Intermediate', rating: 4.2, enrolled: 950 },
  { id: 4, title: 'Sustainable Logging Practices', category: 'Environmental Science', level: 'Intermediate', rating: 4.6, enrolled: 650 },
];

function CourseList() {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Explore Courses</h1>
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full sm:w-2/3 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <select className="w-full sm:w-1/3 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option value="">Filter by Category</option>
            <option value="environmental">Environmental Science</option>
            <option value="biology">Biology</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="w-full h-48 bg-gray-300"></div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h2>
                <p className="text-sm text-gray-600 mb-1">Category: {course.category}</p>
                <p className="text-sm text-gray-600 mb-1">Level: {course.level}</p>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-400">{'★'.repeat(Math.floor(course.rating))}</span>
                  <span className="text-gray-400">{'★'.repeat(5 - Math.floor(course.rating))}</span>
                  <span className="text-gray-600 text-sm ml-2">({course.rating})</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{course.enrolled} students enrolled</p>
                <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseList; 