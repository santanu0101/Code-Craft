// src/components/Header.jsx
import { Code } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import userImage from '../assets/6502423.jpg';

const Header = () => {
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("email");
    // console.log(storedUser)
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // console.log(user)
  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:8000/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      localStorage.removeItem("email");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo-section flex space-x-2">
          <Code className="h-8 w-8 text-indigo-600" />
          <Link to="#" className="logo-link">
            <div className="logo">SAS-Coding</div>
          </Link>
        </div>

        <nav className="main-nav">
          <ul className="nav-links">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/questions" className="nav-link">
                Questions
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/compiler" className="nav-link">
                Compiler
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/practice" className="nav-link">Practice</Link>
            </li>
            <li className="nav-item">
              <Link to="/contests" className="nav-link">Contests</Link>
            </li> */}
          </ul>
        </nav>

        <div className="header-actions">
          {/* <div className="search-box">
            <input type="text" placeholder="Search..." />
            <button type="submit" className="search-button">
              <i className="fas fa-search"></i>
            </button>
          </div> */}

          {/* <div className="user-actions"> */}
          {/* <div className="notifications">
              <i className="fas fa-bell"></i>
              <span className="notification-count">1</span>
            </div>
             */}
          {/* <div className="profile-menu">
              <img 
                src="/api/placeholder/40/40" 
                alt="User profile" 
                className="profile-image" 
              />
            </div> */}

          <div className="user-actions" ref={dropdownRef}>
            <div className="profile-menu relative">
              <img
                src={userImage}
                alt="User profile"
                className="profile-image rounded-full w-10 h-10 cursor-pointer"
                onClick={() => setShowDropdown((prev) => !prev)}
              />
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
                  <div className="px-4 py-2 border-b text-sm text-gray-700">
                    {user || "Anonymous"}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* </div> */}
        </div>
      </div>

      {/* <div className="sub-header">
        <nav className="sub-nav">
          <ul className="sub-nav-links">
            <li className="sub-nav-item">
              <Link to="/dsa" className="sub-nav-link">DSA</Link>
            </li>
            <li className="sub-nav-item">
              <Link to="/practice-problems" className="sub-nav-link active">Practice Problems</Link>
            </li>
            <li className="sub-nav-item">
              <Link to="/python" className="sub-nav-link">Python</Link>
            </li>
            <li className="sub-nav-item">
              <Link to="/c" className="sub-nav-link">C</Link>
            </li>
            <li className="sub-nav-item">
              <Link to="/c++" className="sub-nav-link">C++</Link>
            </li>
            <li className="sub-nav-item">
              <Link to="/java" className="sub-nav-link">Java</Link>
            </li>
            <li className="sub-nav-item">
              <Link to="/courses" className="sub-nav-link">Courses</Link>
            </li>
            <li className="sub-nav-item">
              <Link to="/machine-learning" className="sub-nav-link">Machine Learning</Link>
            </li>
            <li className="sub-nav-item">
              <Link to="/devops" className="sub-nav-link">DevOps</Link>
            </li>
            <li className="sub-nav-item">
              <Link to="/web-development" className="sub-nav-link">Web Development</Link>
            </li>
            <li className="sub-nav-item">
              <Link to="/system-design" className="sub-nav-link">System Design</Link>
            </li>
            <li className="sub-nav-item">
              <Link to="/aptitude" className="sub-nav-link">Aptitude</Link>
            </li>
            <li className="sub-nav-item">
              <Link to="/projects" className="sub-nav-link">Projects</Link>
            </li>
          </ul>
        </nav>
      </div> */}
    </header>
  );
};

export default Header;
