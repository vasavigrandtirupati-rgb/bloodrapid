import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useData } from '../../contexts/DataContext';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export const DonorDashboard = () => {
    const { user } = useAuth();
    const { donors, updateEntity } = useData();
    const myProfile = donors.find(d => d.id === user.entityId);

    if (!myProfile) return <div>Loading profile...</div>;

    const toggleAvailability = () => {
        updateEntity('donor', { ...myProfile, isAvailable: !myProfile.isAvailable });
    };

    return (
        <div>
            <Card style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h2>Hello, {myProfile.name}</h2>
                        <p>Blood Group: <strong>{myProfile.bloodGroup}</strong></p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <p style={{ marginBottom: '0.5rem' }}>Status:
                            <span style={{
                                fontWeight: 'bold',
                                color: myProfile.isAvailable ? 'var(--color-success)' : 'var(--color-text-muted)',
                                marginLeft: '0.5rem'
                            }}>
                                {myProfile.isAvailable ? 'AVAILABLE' : 'UNAVAILABLE'}
                            </span>
                        </p>
                        <Button onClick={toggleAvailability} variant={myProfile.isAvailable ? 'outline' : 'primary'}>
                            {myProfile.isAvailable ? 'Mark Unavailable' : 'Mark Available'}
                        </Button>
                    </div>
                </div>
            </Card>

            <h3>Donation History</h3>
            <Card style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>
                No recent donations recorded.
            </Card>
        </div>
    );
};
