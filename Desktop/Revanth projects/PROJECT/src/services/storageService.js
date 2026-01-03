import { seedData } from '../utils/seedData';

const KEYS = {
    BLOOD_BANKS: 'rapidblood_banks',
    DONORS: 'rapidblood_donors',
    SEEKERS: 'rapidblood_seekers',
    ALERTS: 'rapidblood_alerts',
    USERS: 'rapidblood_users', // For auth simulation
    INIT: 'rapidblood_init'
};

export const storageService = {
    initialize: () => {
        if (!localStorage.getItem(KEYS.INIT)) {
            localStorage.setItem(KEYS.BLOOD_BANKS, JSON.stringify(seedData.bloodBanks));
            localStorage.setItem(KEYS.DONORS, JSON.stringify(seedData.donors));
            localStorage.setItem(KEYS.SEEKERS, JSON.stringify(seedData.seekers));
            localStorage.setItem(KEYS.ALERTS, JSON.stringify(seedData.alerts));

            // Create user accounts from entities
            const users = [
                { email: 'admin@rapidblood.com', password: 'admin', role: 'admin', name: 'Super Admin', id: 'admin-1' },
                ...seedData.bloodBanks.map(b => ({ email: b.email, password: b.password, role: 'bloodBank', entityId: b.id, name: b.name })),
                ...seedData.donors.map(d => ({ email: d.email, password: d.password, role: 'donor', entityId: d.id, name: d.name })),
                ...seedData.seekers.map(s => ({ email: s.email, password: s.password, role: 'seeker', entityId: s.id, name: s.name }))
            ];
            localStorage.setItem(KEYS.USERS, JSON.stringify(users));

            localStorage.setItem(KEYS.INIT, 'true');
            console.log('Storage initialized with seed data');
        }
    },

    getAll: (key) => {
        return JSON.parse(localStorage.getItem(key) || '[]');
    },

    getById: (key, id) => {
        const items = JSON.parse(localStorage.getItem(key) || '[]');
        return items.find(item => item.id === id);
    },

    save: (key, item) => {
        const items = JSON.parse(localStorage.getItem(key) || '[]');
        const index = items.findIndex(i => i.id === item.id);
        if (index >= 0) {
            items[index] = item;
        } else {
            items.push(item);
        }
        localStorage.setItem(key, JSON.stringify(items));
        return item;
    },

    delete: (key, id) => {
        const items = JSON.parse(localStorage.getItem(key) || '[]');
        const newItems = items.filter(i => i.id !== id);
        localStorage.setItem(key, JSON.stringify(newItems));
    },

    // Specific getters
    getBanks: () => storageService.getAll(KEYS.BLOOD_BANKS),
    getDonors: () => storageService.getAll(KEYS.DONORS),
    getSeekers: () => storageService.getAll(KEYS.SEEKERS),
    getAlerts: () => storageService.getAll(KEYS.ALERTS),
    getUserByEmail: (email) => {
        const users = storageService.getAll(KEYS.USERS);
        return users.find(u => u.email === email);
    }
};
