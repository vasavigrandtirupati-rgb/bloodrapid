import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export const BackgroundLayer = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    // SVG shapes for background interest
    const shapes = useMemo(() => {
        return (
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', zIndex: -2 }}>
                {/* Subtle red tint at top right */}
                <div style={{
                    position: 'absolute',
                    top: '-20%',
                    right: '-10%',
                    width: '50vw',
                    height: '50vw',
                    background: 'radial-gradient(circle, rgba(255, 0, 51, 0.05) 0%, rgba(255, 255, 255, 0) 70%)',
                    borderRadius: '50%',
                    filter: 'blur(50px)'
                }} />

                {/* Subtle yellow tint at bottom left */}
                <div style={{
                    position: 'absolute',
                    bottom: '-10%',
                    left: '-10%',
                    width: '40vw',
                    height: '40vw',
                    background: 'radial-gradient(circle, rgba(255, 214, 10, 0.05) 0%, rgba(255, 255, 255, 0) 70%)',
                    borderRadius: '50%',
                    filter: 'blur(50px)'
                }} />

                {/* Floating Icons (CSS only abstract representations) */}
                {!isHome && (
                    <>
                        <svg width="200" height="200" viewBox="0 0 100 100" style={{ position: 'absolute', top: '20%', left: '5%', opacity: 0.03 }}>
                            <path d="M50 15 C 50 15 20 50 20 70 C 20 86 33 99 50 99 C 66 99 80 86 80 70 C 80 50 50 15 50 15" fill="currentColor" />
                        </svg>
                        <svg width="150" height="150" viewBox="0 0 100 100" style={{ position: 'absolute', top: '70%', right: '10%', opacity: 0.03, transform: 'rotate(15deg)' }}>
                            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="5" fill="none" />
                            <path d="M30 50 L70 50 M50 30 L50 70" stroke="currentColor" strokeWidth="5" />
                        </svg>
                    </>
                )}
            </div>
        );
    }, [isHome]);

    return shapes;
};
