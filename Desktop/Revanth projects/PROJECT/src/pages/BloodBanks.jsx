import React, { useState, useMemo } from 'react';
import { useData } from '../contexts/DataContext';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Filter, MapPin, Phone, Droplet } from 'lucide-react';
import { LOCATIONS, BLOOD_GROUPS } from '../utils/seedData';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const BloodBanks = () => {
  const { bloodBanks, loading } = useData();
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('');

  const filteredBanks = useMemo(() => {
    return bloodBanks.filter(bank => {
      const matchLocation = selectedLocation ? bank.location === selectedLocation : true;
      const matchGroup = selectedGroup ? (bank.inventory[selectedGroup] > 0) : true;
      return matchLocation && matchGroup;
    });
  }, [bloodBanks, selectedLocation, selectedGroup]);

  if (loading) return (
    <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
      <div className="loader">Loading...</div>
    </div>
  );

  return (
    <div className="container" style={{ padding: 'var(--spacing-xl) var(--spacing-md)' }}>
      <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', fontWeight: 800 }}>Find <span className="text-gradient">Blood Banks</span></h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem' }}>Search real-time availability across registered blood banks.</p>
      </div>

      {/* Filters */}
      <div className="card glass" style={{ marginBottom: '3rem', padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'end' }}>
          <div style={{ flex: 1, minWidth: '250px' }}>
            <label style={{ display: 'block', marginBottom: '0.8rem', fontWeight: 700, color: 'var(--color-dark)' }}>Location</label>
            <div style={{ position: 'relative' }}>
              <MapPin size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                style={{
                  width: '100%',
                  padding: '1rem 1rem 1rem 2.5rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid #eee',
                  fontSize: '1rem',
                  backgroundColor: '#f9f9f9'
                }}
              >
                <option value="">All Locations</option>
                {LOCATIONS.map(loc => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>
          </div>

          <div style={{ flex: 1, minWidth: '250px' }}>
            <label style={{ display: 'block', marginBottom: '0.8rem', fontWeight: 700, color: 'var(--color-dark)' }}>Blood Group Needed</label>
            <div style={{ position: 'relative' }}>
              <Droplet size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
              <select
                value={selectedGroup}
                onChange={(e) => setSelectedGroup(e.target.value)}
                style={{
                  width: '100%',
                  padding: '1rem 1rem 1rem 2.5rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid #eee',
                  fontSize: '1rem',
                  backgroundColor: '#f9f9f9'
                }}
              >
                <option value="">Any</option>
                {BLOOD_GROUPS.map(bg => (
                  <option key={bg} value={bg}>{bg}</option>
                ))}
              </select>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Button variant="outline" onClick={() => { setSelectedLocation(''); setSelectedGroup(''); }} style={{ padding: '1rem 2rem' }}>
              Clear Filters
            </Button>
          </div>
        </div>
      </div>

      {/* Results */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2rem' }}
      >
        {filteredBanks.map(bank => (
          <motion.div key={bank.id} variants={item}>
            <div className="card glass card-hoverable" style={{ padding: '0', height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.5)' }}>

              {/* Card Header with Icon/Image */}
              <div style={{ background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', borderBottom: '1px solid #f0f0f0' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '12px', overflow: 'hidden', background: 'white', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', padding: '5px' }}>
                  <img src="/assets/hospital-icon.png" alt="Hospital" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div>
                  <h3 style={{ color: 'var(--color-dark)', margin: 0, fontSize: '1.1rem', fontWeight: 700, lineHeight: 1.2 }}>{bank.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.3rem' }}>
                    <span style={{ color: '#FFD700', fontSize: '0.9rem' }}>★</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#555' }}>4.8</span>
                    <span style={{ fontSize: '0.8rem', color: '#999' }}>(120+ reviews)</span>
                  </div>
                </div>
              </div>

              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', color: '#555', marginBottom: '0.8rem' }}>
                  <MapPin size={18} style={{ color: 'var(--color-primary)', marginTop: '2px', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.95rem', lineHeight: 1.4 }}>{bank.location}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#555', marginBottom: '1.5rem' }}>
                  <Phone size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>{bank.contact}</span>
                </div>

                <div style={{ marginTop: 'auto' }}>
                  <h4 style={{ fontSize: '0.85rem', marginBottom: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#888', fontWeight: 700 }}>Blood Availability</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {Object.entries(bank.inventory).map(([bg, count]) => {
                      // Logic to highlight if matches filter or has stock
                      const isMatch = selectedGroup === bg;
                      const hasStock = count > 0;

                      if (!hasStock && !isMatch) return null; // Hide empty if not specifically searching for it (optional, but requested cleaner UI)
                      if (!hasStock && isMatch) return <span key={bg} style={{ color: 'red', fontSize: '0.8rem' }}>Out of Stock</span>;

                      return (
                        <div key={bg} style={{
                          background: isMatch ? 'var(--color-primary)' : (hasStock ? 'rgba(255, 0, 51, 0.05)' : '#f3f4f6'),
                          color: isMatch ? 'white' : 'var(--color-dark)',
                          padding: '6px 10px',
                          borderRadius: '8px',
                          fontSize: '0.85rem',
                          fontWeight: 700,
                          border: isMatch ? 'none' : '1px solid rgba(255, 0, 51, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}>
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: isMatch ? 'white' : 'var(--color-primary)' }}></span>
                          {bg}
                          <span style={{ opacity: isMatch ? 0.9 : 0.6, fontSize: '0.75rem', fontWeight: 500 }}>{count}u</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid #f0f0f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fafafa' }}>
                <span style={{ fontSize: '0.85rem', color: '#888', fontWeight: 500 }}>Verified Bank</span>
                <Button variant="outline" style={{ padding: '0.4rem 1rem', fontSize: '0.85rem', height: 'auto' }}>View Details</Button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {filteredBanks.length === 0 && (
        <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--color-text-muted)' }}>
          <p style={{ fontSize: '1.5rem' }}>No blood banks found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};
