import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';  // Import the Navbar component
import Footer from './components/Footer';  // Import the Footer component
import HomePage from './pages/HomePage';
import ApplicantPage from './pages/ApplicantPage';
import RecruiterPage from './pages/RecruiterPage';
import Jobs from './pages/Jobs';
import Companies from './pages/Companies';
import About from './pages/About';
import Contact from './pages/Contact';  // Import the Contact component
import Blog from './pages/Blog';
import ApplicantLogin from './pages/ApplicantLogin';
import ApplicantSignup from './pages/ApplicantSignup';
import RecruiterLogin from './pages/RecruiterLogin';
import RecruiterSignup from './pages/RecruiterSignup';
import LoginOptions from './pages/LoginOptions';
import BlogPost1 from './pages/BlogPost1';
import BlogPost2 from './pages/BlogPost2';
import BlogPost3 from './pages/BlogPost3';
import './styles/searchBar.css'
const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<LoginOptions />} />
                <Route path="/applicant/login" element={<><ApplicantLogin /></>} />
                <Route path="/applicant/signup" element={<><ApplicantSignup /></>} />
                <Route path="/recruiter/login" element={<><RecruiterLogin /></>} />
                <Route path="/recruiter/signup" element={<><RecruiterSignup /></>} />
                <Route path="/home" element={<><HomePage /></>} />
                <Route path="/applicant" element={<><ApplicantPage /></>} />
                <Route path="/recruiter" element={<><RecruiterPage /></>} />
                <Route path="/jobs" element={<><Jobs /></>} />
                <Route path="/companies" element={<><Companies /></>} />
                <Route path="/about" element={<><About /></>} />
                <Route path="/contact" element={<><Contact /></>} />
                <Route path="/blog" element={<><Blog /></>} />
                <Route path="/blog/how-to-craft-the-perfect-resume" element={<><BlogPost1 /></>} />
                <Route path="/blog/top-interview-tips-for-success" element={<><BlogPost2 /></>} />
                <Route path="/blog/how-to-network-effectively" element={<><BlogPost3 /></>} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
