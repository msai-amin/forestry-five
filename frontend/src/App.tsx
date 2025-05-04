import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'

// Helper component to conditionally display Navbar
const NavbarWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  return (
    <>
      {!isHomePage && <Navbar />}
      {children}
    </>
  );
};

function App() {
  return (
    <Router>
      <NavbarWrapper>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </NavbarWrapper>
    </Router>
  )
}

export default App
