import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Droplet, Menu, User } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../ui/Button';
import './Navbar.css';

export const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="navbar">
            <Link to="/" className="nav-brand">
                <Droplet fill="currentColor" size={28} />
                <span>RapidBlood</span>
            </Link>

            <div className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/blood-banks" className="nav-link">Blood Banks</Link>
                <Link to="/about" className="nav-link">About</Link>
            </div>

            <div className="nav-actions">
                {user ? (
                    <>
                        <span className="nav-link" style={{ fontSize: '0.9rem' }}>
                            Welcome, {user.name?.split(' ')[0]}
                        </span>
                        <Link to="/dashboard">
                            <Button variant="outline" style={{ padding: '0.4rem 0.8rem' }}>Dashboard</Button>
                        </Link>
                        <Button onClick={handleLogout} variant="primary" style={{ padding: '0.4rem 0.8rem' }}>Logout</Button>
                    </>
                ) : (
                    <Link to="/login">
                        <Button>Login</Button>
                    </Link>
                )}
            </div>
        </nav>
    );
};
