import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        const res = await login(email, password);
        if (res.success) {
            navigate('/dashboard');
        } else {
            setError(res.error);
        }
    };

    const fillCredentials = (role) => {
        if (role === 'admin') { setEmail('admin@rapidblood.com'); setPassword('admin'); }
        if (role === 'bank') { setEmail('bank1@rapidblood.com'); setPassword('password123'); }
        if (role === 'donor') { setEmail('donor1@rapidblood.com'); setPassword('password123'); }

    };

    return (
        <div className="container" style={{ display: 'flex', justifyContent: 'center', paddingTop: '4rem' }}>
            <Card style={{ width: '100%', maxWidth: '400px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Login</h2>
                {error && <div style={{ color: 'var(--color-error)', marginBottom: '1rem' }}>{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '1rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                            required
                        />
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                            required
                        />
                    </div>
                    <Button type="submit" style={{ width: '100%' }}>Sign In</Button>
                </form>

                <div style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#666' }}>
                    <p>Demo Credentials:</p>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                        <button type="button" onClick={() => fillCredentials('admin')} style={{ textDecoration: 'underline', cursor: 'pointer', border: 'none', background: 'none', color: 'blue' }}>Admin</button>
                        <button type="button" onClick={() => fillCredentials('bank')} style={{ textDecoration: 'underline', cursor: 'pointer', border: 'none', background: 'none', color: 'blue' }}>Blood Bank</button>
                        <button type="button" onClick={() => fillCredentials('donor')} style={{ textDecoration: 'underline', cursor: 'pointer', border: 'none', background: 'none', color: 'blue' }}>Donor</button>
                    </div>
                </div>
            </Card>
        </div>
    );
};
