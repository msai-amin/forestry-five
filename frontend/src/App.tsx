import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import CourseList from './components/CourseList'
import CourseDetail from './components/CourseDetail'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/" element={
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Welcome to ForestryFIVE</h1>
              <p className="text-gray-600 mb-8">Learn about forestry and environmental science for free.</p>
              <div className="flex gap-4">
                <a href="/login" className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Sign In</a>
                <a href="/courses" className="px-6 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50">Explore Courses</a>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
