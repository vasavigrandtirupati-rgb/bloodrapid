import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Shield, Users, Activity, Heart, Clock, Award } from 'lucide-react';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export const About = () => {
    return (
        <div style={{ paddingTop: '80px', paddingBottom: '4rem' }}>

            {/* Header */}
            <div style={{ background: 'var(--color-dark)', color: 'white', padding: '6rem 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem' }}
                    >
                        Our Mission
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{ fontSize: '1.5rem', maxWidth: '700px', margin: '0 auto', color: 'rgba(255,255,255,0.8)' }}
                    >
                        To bridge the gap between donors and patients, ensuring that no life is lost due to a lack of timely blood access.
                    </motion.p>
                </div>

                {/* Abstract Background Element */}
                <div style={{ position: 'absolute', top: '-50%', left: '50%', transform: 'translateX(-50%)', width: '100%', height: '200%', background: 'radial-gradient(circle, #FF0033 0%, transparent 60%)', opacity: 0.1, zIndex: 1 }} />
            </div>

            <div className="container" style={{ marginTop: '-4rem', position: 'relative', zIndex: 10 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <InfoCard icon={<Clock size={32} color="white" />} bg="var(--color-primary)" title="Speed" text="Reducing the time to find blood from hours to minutes through real-time inventory tracking." />
                    <InfoCard icon={<Shield size={32} color="white" />} bg="var(--color-dark)" title="Safety" text="Partnering only with government-verified blood banks and certified donors to ensure safety." />
                    <InfoCard icon={<Users size={32} color="black" />} bg="var(--color-warning)" title="Community" text="Building a voluntary network of donors ready to step up in emergencies." />
                </div>
            </div>

            <div className="container" style={{ marginTop: '6rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>

                    {/* Story Section */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap-reverse' }}>
                        <div style={{ flex: 1, minWidth: '300px' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>The <span className="text-gradient">Problem</span></h2>
                            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                                Every day, over 12,000 lives are at risk in India due to blood shortages. The gap between demand (15 million units) and supply creates a critical delay during emergencies, surgeries, and trauma cases.
                            </p>
                            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--color-text-muted)' }}>
                                Fragmented information systems mean that while blood might be available at a nearby bank, the patient's family often travels kilometers to find it, wasting precious minutes.
                            </p>
                        </div>
                        <div style={{ flex: 1, minWidth: '300px' }}>
                            <img src="/assets/donation-illustration.png" alt="Blood Crisis Illustration" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
                        </div>
                    </div>

                    {/* Solution Section */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}>
                        <div style={{ flex: 1, minWidth: '300px' }}>
                            <div style={{ background: '#f5f5f5', padding: '3rem', borderRadius: 'var(--radius-lg)', height: '100%' }}>
                                <div style={{ marginBottom: '2rem' }}>
                                    <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--color-primary)' }}>15M+</div>
                                    <div style={{ fontSize: '1.2rem', fontWeight: 600 }}>Units Needed Annually</div>
                                </div>
                                <div style={{ marginBottom: '2rem' }}>
                                    <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--color-warning)' }}>12K+</div>
                                    <div style={{ fontSize: '1.2rem', fontWeight: 600 }}>Daily Critical Cases</div>
                                </div>
                            </div>
                        </div>
                        <div style={{ flex: 1, minWidth: '300px' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Our <span className="text-gradient">Solution</span></h2>
                            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                                RapidBlood centralizes blood inventory data from hospitals and blood banks into a single, accessible platform. We empower users to look up availability instantly and connect with voluntary donors.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
                                {['Real-time Inventory Tracking', 'Direct Donor Connection', 'Geotagged Search Results', 'Emergency Broadcast Alerts'].map(item => (
                                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', fontWeight: 600 }}>
                                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--color-success)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <span style={{ color: 'white', fontSize: '14px' }}>✓</span>
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

const InfoCard = ({ icon, bg, title, text }) => (
    <Card className="glass card-hoverable" style={{ padding: '2rem', textAlign: 'center', border: 'none' }}>
        <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
            {icon}
        </div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>{title}</h3>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{text}</p>
    </Card>
);
