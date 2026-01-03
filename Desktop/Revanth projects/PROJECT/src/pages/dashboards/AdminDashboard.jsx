import React, { useState } from 'react';
import { useData } from '../../contexts/DataContext';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Edit, Trash2, Plus, X } from 'lucide-react';

export const AdminDashboard = () => {
    const { bloodBanks, donors, seekers, updateEntity, refreshData } = useData();
    const [activeTab, setActiveTab] = useState('banks');

    // Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        contact: '',
        email: '',
        password: 'password123', // Default for new
        inventory: { 'A+': 0, 'A-': 0, 'B+': 0, 'B-': 0, 'AB+': 0, 'AB-': 0, 'O+': 0, 'O-': 0 }
    });

    const handleAdd = () => {
        setEditingItem(null);
        setFormData({
            name: '', location: '', contact: '', email: '', password: 'password123',
            inventory: { 'A+': 10, 'A-': 5, 'B+': 10, 'B-': 5, 'AB+': 4, 'AB-': 2, 'O+': 15, 'O-': 8 } // Default stock
        });
        setIsModalOpen(true);
    };

    const handleEdit = (bank) => {
        setEditingItem(bank);
        setFormData({ ...bank });
        setIsModalOpen(true);
    };

    const handleDelete = (type, id) => {
        if (window.confirm('Are you sure you want to delete this entity?')) {
            // Note: In a real app, we'd have a delete method in context. 
            // For now, we are simulating "delete" by finding the key and handling it via storageService directly or adding delete to context.
            // Since context only exposes updateEntity, let's just assume we can add a delete method or use a workaround.
            // Actually, let's use the valid context way if possible. StorageService has delete.
            // But context doesn't expose it. Let's direct import storageService for this specific admin action to avoid context refactor loop.
            // A bit "hacky" but safe for this MVP.

            // Actually better: I'll assume context *should* have it, but since I can't edit context easily without risk,
            // I will use the imported storageService here just for deletion, then refresh.
            const serviceKey = type === 'bloodBank' ? 'rapidblood_banks' : type === 'donor' ? 'rapidblood_donors' : 'rapidblood_seekers';

            // Dynamic import to avoid circular dep issues if any, though likely fine.
            import('../../services/storageService').then(({ storageService }) => {
                storageService.delete(serviceKey, id);
                refreshData();
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: editingItem ? editingItem.id : Date.now().toString(),
            ...formData
        };

        import('../../services/storageService').then(({ storageService }) => {
            storageService.save('rapidblood_banks', newItem);
            refreshData();
            setIsModalOpen(false);
        });
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>Admin Console</h2>
                {activeTab === 'banks' && (
                    <Button onClick={handleAdd} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Plus size={18} /> Add Blood Bank
                    </Button>
                )}
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
                <TabButton active={activeTab === 'banks'} onClick={() => setActiveTab('banks')} label={`Blood Banks (${bloodBanks.length})`} />
                <TabButton active={activeTab === 'donors'} onClick={() => setActiveTab('donors')} label={`Donors (${donors.length})`} />
                <TabButton active={activeTab === 'seekers'} onClick={() => setActiveTab('seekers')} label={`Seekers (${seekers.length})`} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {activeTab === 'banks' && bloodBanks.map(item => (
                    <DashboardCard
                        key={item.id}
                        title={item.name}
                        subtitle={item.location}
                        details={
                            <div style={{ fontSize: '0.9rem', color: '#666' }}>
                                <div>Email: {item.email}</div>
                                <div>Contact: {item.contact}</div>
                                <div style={{ fontWeight: 600, marginTop: '0.5rem', color: 'var(--color-primary)' }}>
                                    Stock: {Object.values(item.inventory).reduce((a, b) => a + Number(b), 0)} units
                                </div>
                            </div>
                        }
                        onEdit={() => handleEdit(item)}
                        onDelete={() => handleDelete('bloodBank', item.id)}
                    />
                ))}

                {activeTab === 'donors' && donors.map(item => (
                    <DashboardCard
                        key={item.id}
                        title={item.name}
                        subtitle={item.location}
                        details={`Group: ${item.bloodGroup} | ${item.email}`}
                        onDelete={() => handleDelete('donor', item.id)}
                    />
                ))}

                {activeTab === 'seekers' && seekers.map(item => (
                    <DashboardCard
                        key={item.id}
                        title={item.name}
                        subtitle={item.location}
                        details={`Status: ${item.status} | ${item.email}`}
                        onDelete={() => handleDelete('seeker', item.id)}
                    />
                ))}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                    background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
                }}>
                    <div className="card glass" style={{ width: '500px', maxWidth: '90%', padding: '2rem', background: 'white', maxHeight: '90vh', overflowY: 'auto' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{editingItem ? 'Edit Blood Bank' : 'Add Blood Bank'}</h3>
                            <button onClick={() => setIsModalOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><X size={24} /></button>
                        </div>

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Name</label>
                                <input required className="input" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Location</label>
                                <select required value={formData.location} onChange={e => setFormData({ ...formData, location: e.target.value })} style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd' }}>
                                    <option value="">Select Location</option>
                                    {['Hyderabad', 'Bangalore', 'Chennai', 'Mumbai', 'Delhi', 'Kolkata', 'Pune'].map(l => <option key={l} value={l}>{l}</option>)}
                                </select>
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Contact</label>
                                <input required className="input" value={formData.contact} onChange={e => setFormData({ ...formData, contact: e.target.value })} style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Email</label>
                                <input required type="email" className="input" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd' }} />
                            </div>
                            {!editingItem && (
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Password</label>
                                    <input required type="password" className="input" value={formData.password} onChange={e => setFormData({ ...formData, password: e.target.value })} style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd' }} />
                                </div>
                            )}

                            <Button type="submit" style={{ marginTop: '1rem' }}>{editingItem ? 'Update Blood Bank' : 'Create Blood Bank'}</Button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

const TabButton = ({ active, onClick, label }) => (
    <button
        onClick={onClick}
        style={{
            padding: '0.8rem 1.5rem',
            background: active ? 'var(--color-primary)' : 'transparent',
            color: active ? 'white' : 'var(--color-text-muted)',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            fontWeight: 600,
            transition: 'all 0.2s'
        }}
    >
        {label}
    </button>
);

const DashboardCard = ({ title, subtitle, details, onEdit, onDelete }) => (
    <Card className="card-hoverable" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{title}</h3>
        <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1rem' }}>{subtitle}</p>
        <div style={{ marginTop: 'auto', marginBottom: '1.5rem' }}>{details}</div>
        <div style={{ display: 'flex', gap: '0.5rem', paddingTop: '1rem', borderTop: '1px solid #f0f0f0' }}>
            {onEdit && (
                <Button variant="outline" onClick={onEdit} style={{ flex: 1, padding: '0.5rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem' }}>
                    <Edit size={14} /> Edit
                </Button>
            )}
            {onDelete && (
                <Button variant="outline" onClick={onDelete} style={{ flex: 1, padding: '0.5rem', fontSize: '0.9rem', borderColor: '#ff4d4d', color: '#ff4d4d', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem' }}>
                    <Trash2 size={14} /> Delete
                </Button>
            )}
        </div>
    </Card>
);
