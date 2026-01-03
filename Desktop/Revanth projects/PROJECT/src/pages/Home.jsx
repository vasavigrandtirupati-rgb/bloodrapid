import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ThreeScene } from '../components/ui/ThreeScene';
import { Activity, Search, Shield, Users, ArrowRight } from 'lucide-react';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

export const Home = () => {
    return (
        <div style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Hero Section */}
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '0 var(--spacing-md)',
                marginTop: '-80px',
                color: 'white'
            }}>
                {/* Full Screen Background Image */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -2 }}>
                    <img src="/assets/hero-banner.png" alt="Blood Flow Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    {/* Dark overlay for readability */}
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)' }} />
                </div>

                {/* 3D Scene (Optional, can be removed if image is enough, or kept subtle) */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, opacity: 0.5 }}>
                    <ThreeScene />
                </div>

                <div style={{ zIndex: 1, maxWidth: '900px', position: 'relative' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        style={{
                            position: 'absolute',
                            top: '-50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '800px',
                            height: '800px',
                            background: 'radial-gradient(circle, rgba(255,0,51,0.2) 0%, rgba(0,0,0,0) 70%)',
                            zIndex: -1,
                            pointerEvents: 'none'
                        }}
                    />

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{
                            fontSize: 'clamp(3rem, 7vw, 6rem)',
                            fontWeight: 800,
                            lineHeight: 1,
                            marginBottom: 'var(--spacing-lg)',
                            letterSpacing: '-0.03em',
                            textShadow: '0 4px 20px rgba(0,0,0,0.5)'
                        }}
                    >
                        Every Drop <br /><span style={{ color: 'var(--color-primary)', textShadow: '0 0 30px rgba(255,0,51,0.6)' }}>Saves a Life</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        style={{
                            fontSize: '1.25rem',
                            color: 'rgba(5, 5, 5, 0.9)',
                            marginBottom: 'var(--spacing-2xl)',
                            maxWidth: '650px',
                            margin: '0 auto var(--spacing-2xl)',
                            lineHeight: 1.6,
                            fontWeight: 500,
                            textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                        }}
                    >
                        The most advanced real-time blood coordination network.
                        Connect with donors instantly and manage critical supplies with ease.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}
                    >
                        <Link to="/login">
                            <Button style={{ padding: '1.2rem 3rem', fontSize: '1.2rem', boxShadow: 'var(--shadow-glow-red)' }}>
                                Get Started <ArrowRight size={20} />
                            </Button>
                        </Link>
                        <Link to="/blood-banks">
                            <Button variant="outline" style={{ padding: '1.2rem 3rem', fontSize: '1.2rem', background: 'white' }}>
                                Find Nearby
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Features / How it works */}
            <section style={{ padding: 'var(--spacing-2xl) 0', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.03) 100%)' }} />

                <div className="container">
                    <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>Powerful Features</h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)' }}>Everything you need to manage blood availability.</p>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}
                    >
                        <FeatureCard
                            icon={<Search size={32} color="white" />}
                            iconBg="var(--color-primary)"
                            title="Real-time Search"
                            description="Instantly locate blood units within your radius with live inventory tracking."
                        />
                        <FeatureCard
                            icon={<Users size={32} color="black" />}
                            iconBg="var(--color-warning)"
                            title="Donor Connect"
                            description="A direct line to thousands of voluntary donors ready for emergencies."
                        />
                        <FeatureCard
                            icon={<Shield size={32} color="white" />}
                            iconBg="var(--color-dark)"
                            title="Secure Platform"
                            description="Privacy-focused architecture ensuring donor and patient data security."
                        />
                        <FeatureCard
                            icon={<Activity size={32} color="white" />}
                            iconBg="#FF5E7D"
                            title="Smart Alerts"
                            description="Automated notifications for low stock and urgent requirements in your area."
                        />
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section style={{ padding: 'var(--spacing-xl) 0' }}>
                <div className="container">
                    <div className="glass card-hoverable" style={{ padding: '0', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                            <div style={{ flex: '1 1 400px', padding: '0' }}>
                                <img src="/assets/donation-illustration.png" alt="Blood Donation" style={{ width: '100%', height: '100%', maxHeight: '500px', objectFit: 'cover' }} />
                            </div>
                            <div style={{ flex: '1 1 400px', padding: '4rem' }}>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                >
                                    <h2 style={{ fontSize: '3rem', marginBottom: '2rem', fontWeight: 800 }}>Why <span className="text-gradient">RapidBlood?</span></h2>
                                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                                        In emergencies, time is the biggest enemy. RapidBlood bridges the information gap between those in need and those who can help.
                                        By digitizing blood inventories and donor networks, we ensure that no life is lost due to unavailability of blood.
                                    </p>
                                    <Link to="/about">
                                        <Button variant="outline">Learn More</Button>
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact & SEO Statistics Section (New) */}
            <section style={{ padding: '4rem 0 6rem 0', background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255, 0, 51, 0.03) 100%)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '3rem' }}
                    >
                        The <span className="text-gradient">Reality</span> We Face
                    </motion.h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <StatCard
                            number="12,000+"
                            label="Daily Deaths"
                            description="Lives lost daily in India due to lack of timely blood access during emergencies and surgeries."
                            highlightColor="var(--color-primary)"
                        />
                        <StatCard
                            number="15 Million"
                            label="Units Needed"
                            description="Annual requirement of blood units vs. current collections creates a massive deficit."
                            highlightColor="var(--color-warning)"
                        />
                        <StatCard
                            number="Every 2s"
                            label="Someone Needs Blood"
                            description="High demand from trauma, cancer treatments, and pregnancy complications drives the urgency."
                            highlightColor="var(--color-dark)"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

const FeatureCard = ({ icon, iconBg, title, description }) => (
    <motion.div variants={fadeInUp}>
        <div className="card-hoverable glass" style={{ height: '100%', padding: '2.5rem', background: 'white', borderRadius: 'var(--radius-lg)' }}>
            <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: iconBg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                boxShadow: `0 10px 20px ${iconBg}40`
            }}>
                {icon}
            </div>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 700 }}>{title}</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{description}</p>
        </div>
    </motion.div>
);

const StatCard = ({ number, label, description, highlightColor }) => (
    <motion.div
        variants={fadeInUp}
        whileHover={{ y: -5 }}
        className="card glass card-hoverable"
        style={{ padding: '2rem', textAlign: 'center', borderTop: `4px solid ${highlightColor}`, height: '100%', background: 'white' }}
    >
        <div style={{ fontSize: '3.5rem', fontWeight: 800, color: highlightColor, marginBottom: '0.5rem', lineHeight: 1 }}>
            {number}
        </div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--color-dark)' }}>{label}</h3>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', fontSize: '1rem' }}>{description}</p>
    </motion.div>
);
