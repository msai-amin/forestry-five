import React from 'react';
import { useParams } from 'react-router-dom';

// Mock course data
const courseData = {
  id: 1,
  title: 'Introduction to Forestry',
  description: 'This course provides a comprehensive introduction to forestry, covering topics such as forest ecosystems, tree species, conservation practices, and sustainable management. Hawkins.',
  category: 'Environmental Science',
  level: 'Beginner',
  rating: 4.5,
  enrolled: 1200,
  instructor: 'Dr. Jane Smith',
  duration: '6 weeks',
  lessons: 18,
  videoHours: 12,
  sections: [
    { title: 'Forest Ecosystems', lessons: 5 },
    { title: 'Tree Identification', lessons: 4 },
    { title: 'Conservation Practices', lessons: 5 },
    { title: 'Sustainable Management', lessons: 4 },
  ],
};

function CourseDetail() {
  const { id } = useParams<{ id: string }>(); // Get course ID from URL

  // In a real app, we would fetch course data based on ID
  const course = courseData;

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="w-full h-64 bg-gray-300"></div>
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{course.title}</h1>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-100 p-4 rounded-md">
                <p className="text-sm text-gray-500">Instructor</p>
                <p className="font-medium text-gray-900">{course.instructor}</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <p className="text-sm text-gray-500">Duration</p>
                <p className="font-medium text-gray-900">{course.duration}</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <p className="text-sm text-gray-500">Level</p>
                <p className="font-medium text-gray-900">{course.level}</p>
              </div>
            </div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <span className="text-yellow-400">{'★'.repeat(Math.floor(course.rating))}</span>
                <span className="text-gray-400">{'★'.repeat(5 - Math.floor(course.rating))}</span>
                <span className="text-gray-600 text-sm ml-2">({course.rating})</span>
              </div>
              <span className="text-gray-600 text-sm">{course.enrolled} students enrolled</span>
            </div>
            <button className="w-full md:w-auto bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-lg font-medium">
              Enroll Now - Free
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Content</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-gray-100 p-4 rounded-md">
              <span className="font-medium text-gray-900">{course.lessons} Lessons</span>
              <span className="font-medium text-gray-900">{course.videoHours} Hours of Video</span>
            </div>
            {course.sections.map((section, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                <div className="flex justify-between items-center p-2 hover:bg-gray-50 cursor-pointer rounded-md">
                  <span className="font-medium text-gray-900">{section.title}</span>
                  <span className="text-sm text-gray-500">{section.lessons} lessons</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span>Understand the components and functions of forest ecosystems</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span>Identify common tree species and their characteristics</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span>Apply conservation practices to protect forest biodiversity</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span>Implement sustainable forest management strategies</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail; 