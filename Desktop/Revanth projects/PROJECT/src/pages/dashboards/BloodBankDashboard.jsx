import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useData } from '../../contexts/DataContext';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export const BloodBankDashboard = () => {
    const { user } = useAuth();
    const { bloodBanks, updateEntity } = useData();

    // Find the bank associated with this user
    const myBank = bloodBanks.find(b => b.id === user.entityId);

    if (!myBank) return <div>Error: Bank data not found for this user.</div>;

    const handleUpdateStock = (bloodGroup, change) => {
        const newInventory = { ...myBank.inventory };
        newInventory[bloodGroup] = Math.max(0, newInventory[bloodGroup] + change); // Prevent negative

        const updatedBank = { ...myBank, inventory: newInventory };
        updateEntity('bloodBank', updatedBank);
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h2>{myBank.name} Dashboard</h2>
                <span style={{ padding: '0.5rem 1rem', backgroundColor: 'var(--color-secondary)', borderRadius: 'var(--radius-full)' }}>
                    {myBank.location}
                </span>
            </div>

            <h3>Inventory Management</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
                {Object.entries(myBank.inventory).map(([bg, count]) => (
                    <Card key={bg} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary)' }}>{bg}</div>
                        <div style={{ fontSize: '2rem', margin: '0.5rem 0' }}>{count}</div>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <Button onClick={() => handleUpdateStock(bg, -1)} variant="outline" style={{ width: '40px', height: '40px', padding: 0 }}>-</Button>
                            <Button onClick={() => handleUpdateStock(bg, 1)} style={{ width: '40px', height: '40px', padding: 0 }}>+</Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};
