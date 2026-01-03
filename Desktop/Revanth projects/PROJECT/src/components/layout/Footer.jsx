import React from 'react';

export const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'var(--color-dark)',
            color: 'var(--color-text-light)',
            padding: 'var(--spacing-xl) 0',
            textAlign: 'center',
            marginTop: 'auto'
        }}>
            <div className="container">
                <p>&copy; {new Date().getFullYear()} RapidBlood. Emergency Blood Availability Platform.</p>
                <p style={{ opacity: 0.7, fontSize: '0.9rem', marginTop: 'var(--spacing-sm)' }}>
                    Saving Lives, One Drop at a Time.
                </p>
            </div>
        </footer>
    );
};
