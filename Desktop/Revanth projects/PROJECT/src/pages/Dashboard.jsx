import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { AdminDashboard } from './dashboards/AdminDashboard';
import { BloodBankDashboard } from './dashboards/BloodBankDashboard';
import { DonorDashboard } from './dashboards/DonorDashboard';
import { SeekerDashboard } from './dashboards/SeekerDashboard';

export const Dashboard = () => {
    const { user } = useAuth();

    if (!user) return <div>Loading...</div>;

    const renderDashboard = () => {
        switch (user.role) {
            case 'admin':
                return <AdminDashboard />;
            case 'bloodBank':
                return <BloodBankDashboard />;
            case 'donor':
                return <DonorDashboard />;
            case 'seeker':
                return <SeekerDashboard />;
            default:
                return <div>Unknown Role: {user.role}</div>;
        }
    };

    return (
        <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
            <div style={{ marginBottom: '2rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
                <h1 style={{ fontSize: '1.8rem', color: 'var(--color-dark)' }}>My Dashboard</h1>
                <p style={{ color: 'var(--color-text-muted)' }}>Logged in as: {user.name} ({user.role})</p>
            </div>
            {renderDashboard()}
        </div>
    );
};
