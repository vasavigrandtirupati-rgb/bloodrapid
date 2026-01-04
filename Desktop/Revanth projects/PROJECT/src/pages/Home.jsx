import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ThreeScene } from '../components/ui/ThreeScene';
import { Activity, Search, Shield, Users, ArrowRight, Droplet } from 'lucide-react';


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
                padding: '4rem var(--spacing-md) 0',
                background: 'radial-gradient(ellipse at center, #fff0f1 0%, #ffffff 70%)',
                overflow: 'hidden'
            }}>
                {/* Ambient Background Glow */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '120vw',
                    height: '120vh',
                    background: 'radial-gradient(circle at center, rgba(255, 30, 60, 0.08) 0%, rgba(255, 255, 255, 0) 60%)',
                    pointerEvents: 'none',
                    zIndex: 0
                }} />

                {/* Central Vibrant Glow for Text Contrast */}
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.8, 0.6] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        position: 'absolute',
                        top: '45%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '600px',
                        height: '400px',
                        background: 'radial-gradient(closest-side, rgba(255, 0, 50, 0.35), rgba(255, 0, 50, 0))',
                        filter: 'blur(60px)',
                        zIndex: 0
                    }}
                />

                {/* Floating Blood Drops - Parallax/Depth Effect */}
                <FloatingElements />

                {/* Sparkles */}
                <div style={{ position: 'absolute', top: '30%', left: '25%', opacity: 0.6 }}><Sparkle color="#ff4d6d" size={20} delay={0} /></div>
                <div style={{ position: 'absolute', top: '60%', right: '20%', opacity: 0.4 }}><Sparkle color="#ff4d6d" size={15} delay={2} /></div>
                <div style={{ position: 'absolute', top: '25%', right: '35%', opacity: 0.5 }}><Sparkle color="#ff99ac" size={24} delay={1} /></div>

                <div style={{ zIndex: 10, maxWidth: '1000px', position: 'relative' }}>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Headline */}
                        <h1 style={{
                            fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
                            fontWeight: 800,
                            lineHeight: 1.1,
                            marginBottom: '1.5rem',
                            letterSpacing: '-0.02em',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textShadow: '0 10px 30px rgba(255, 50, 50, 0.2)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'white', textShadow: '0 2px 10px rgba(220, 0, 40, 0.5)' }}>
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <Droplet size={58} fill="#ff1f40" stroke="none" style={{ filter: 'drop-shadow(0 4px 6px rgba(180,0,0,0.2))' }} />
                                </motion.div>
                                <span style={{ color: '#ffffff', textShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
                                    Every Drop
                                </span>
                            </div>
                            <span style={{
                                color: '#ff1f40',
                                background: 'linear-gradient(45deg, #ff1f40 0%, #ff4d6d 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                filter: 'drop-shadow(0 4px 15px rgba(255, 30, 60, 0.3))'
                            }}>
                                Saves a Life
                            </span>
                        </h1>

                        <p style={{
                            fontSize: '1.25rem',
                            color: '#555',
                            marginBottom: '3rem',
                            maxWidth: '700px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            lineHeight: 1.6,
                            fontWeight: 500
                        }}>
                            A real-time blood coordination network <strong style={{ color: '#333' }}>connecting</strong> donors, seekers, and blood banks — when every second matters.
                        </p>

                        {/* Buttons */}
                        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '3rem' }}>
                            <Link to="/login">
                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(255, 31, 64, 0.4)' }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        padding: '1.2rem 3rem',
                                        fontSize: '1.1rem',
                                        fontWeight: 700,
                                        borderRadius: '50px',
                                        border: 'none',
                                        background: 'linear-gradient(135deg, #ff1f40 0%, #ff4d6d 100%)',
                                        color: 'white',
                                        cursor: 'pointer',
                                        boxShadow: '0 6px 20px rgba(255, 31, 64, 0.25)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}
                                >
                                    Become a Lifesaver <ArrowRight size={20} />
                                </motion.button>
                            </Link>

                            <Link to="/blood-banks">
                                <motion.button
                                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 31, 64, 0.05)' }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        padding: '1.2rem 3rem',
                                        fontSize: '1.1rem',
                                        fontWeight: 700,
                                        borderRadius: '50px',
                                        border: '2px solid #ff1f40',
                                        background: 'transparent',
                                        color: '#ff1f40',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    Find Blood Near You
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Separator Gradient */}
            <div style={{ height: '100px', background: 'linear-gradient(to bottom, #ffffff 0%, #f9fafb 100%)' }} />

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

const FloatingElements = () => {
    // Generate random positions for drops
    const drops = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        size: Math.random() * 40 + 10,
        x: Math.random() * 100, // %
        y: Math.random() * 100, // %
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
        blur: Math.random() * 4
    }));

    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
            {drops.map(drop => (
                <motion.div
                    key={drop.id}
                    initial={{ y: 0, opacity: 0 }}
                    animate={{
                        y: [-20, 20, -20],
                        opacity: [0.1, 0.4, 0.1],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: drop.duration,
                        repeat: Infinity,
                        delay: drop.delay,
                        ease: "easeInOut"
                    }}
                    style={{
                        position: 'absolute',
                        left: `${drop.x}%`,
                        top: `${drop.y}%`,
                        filter: `blur(${drop.blur}px)`
                    }}
                >
                    <Droplet
                        size={drop.size}
                        fill="rgba(255, 50, 80, 0.6)" // Soft red fill
                        stroke="none"
                        style={{ transform: 'rotate(15deg)' }}
                    />
                </motion.div>
            ))}
        </div>
    );
};

const Sparkle = ({ color, size, delay }) => (
    <motion.div
        animate={{
            scale: [0, 1, 0],
            rotate: [0, 180],
            opacity: [0, 1, 0]
        }}
        transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: Math.random() * 3 + 1,
            delay: delay
        }}
        style={{ width: size, height: size, color: color, position: 'relative' }}
    >
        <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '100%', height: '100%' }}>
            <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" />
        </svg>
    </motion.div>
);
