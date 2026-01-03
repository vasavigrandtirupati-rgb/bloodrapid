import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useData } from '../../contexts/DataContext';
import { Card } from '../../components/ui/Card';

export const SeekerDashboard = () => {
    const { user } = useAuth();
    const { seekers } = useData();
    const myProfile = seekers.find(s => s.id === user.entityId);
    // In a real app, seeker might have multiple requests, but here 1:1 for simplicity or filter alerts

    return (
        <div>
            <h2>My Requests</h2>
            {myProfile ? (
                <Card style={{ marginTop: '1rem', borderLeft: '4px solid var(--color-warning)' }}>
                    <h3>Request for {myProfile.bloodGroup}</h3>
                    <p>Status: <strong>{myProfile.status}</strong></p>
                    <p>Date: {myProfile.requestDate}</p>
                </Card>
            ) : (
                <p>No active requests found.</p>
            )}
        </div>
    );
};
