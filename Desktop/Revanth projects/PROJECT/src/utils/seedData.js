export const LOCATIONS = [
  "Tirupati",
  "Vijayawada",
  "Guntur",
  "Nellore",
  "Kurnool",
  "Visakhapatnam",
  "Rajahmundry",
  "Anantapur",
  "Kadapa"
];

export const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const NAMES = [
  "Ramesh", "Suresh", "Mahesh", "Priya", "Anjali", "Sita", "Gita", "Rahul", "Vikram", "Neha",
  "Sneha", "Kiran", "Vijay", "Anita", "Sunil", "Raj", "Deepa", "Lakshmi", "Venu", "Swathi"
];

const BANK_NAMES = [
  "Red Cross", "Life Saver", "City Central", "Community Care", "Government Hospital",
  "Trust Blood Bank", "Emergency Center", "Hope Bank", "Sunrise Blood Bank", "Metro Blood Center"
];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const seedData = {
  bloodBanks: [
    // Ensure every location has at least one blood bank
    ...LOCATIONS.map((loc, i) => ({
      id: `bank-static-${i}`,
      name: `${getRandomItem(BANK_NAMES)} ${loc}`,
      location: loc, // Guaranteed match
      contact: `98765432${String(i).padStart(2, '0')}`,
      email: `bank${i}@rapidblood.com`,
      password: 'password123',
      inventory: BLOOD_GROUPS.reduce((acc, bg) => {
        acc[bg] = getRandomInt(0, 50);
        return acc;
      }, {})
    })),
    // Add more random blood banks
    ...Array.from({ length: 40 }, (_, i) => {
      const loc = getRandomItem(LOCATIONS);
      return {
        id: `bank-random-${i + 1}`,
        name: `${getRandomItem(BANK_NAMES)} ${loc}`,
        location: loc,
        contact: `98765432${String(i + 10).slice(-2)}`,
        email: `bank${i + 20}@rapidblood.com`,
        password: 'password123',
        inventory: BLOOD_GROUPS.reduce((acc, bg) => {
          acc[bg] = getRandomInt(0, 50);
          return acc;
        }, {})
      };
    })
  ],

  donors: Array.from({ length: 20 }, (_, i) => ({
    id: `donor-${i + 1}`,
    name: `${getRandomItem(NAMES)} ${String.fromCharCode(65 + i)}`,
    bloodGroup: getRandomItem(BLOOD_GROUPS),
    location: getRandomItem(LOCATIONS),
    age: getRandomInt(18, 50),
    lastDonationDate: new Date(Date.now() - getRandomInt(0, 365) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    contact: `90000000${String(i).padStart(2, '0')}`,
    email: `donor${i + 1}@rapidblood.com`,
    password: 'password123',
    isAvailable: Math.random() > 0.3
  })),

  seekers: Array.from({ length: 20 }, (_, i) => ({
    id: `seeker-${i + 1}`,
    name: `${getRandomItem(NAMES)} ${String.fromCharCode(90 - i)}`,
    bloodGroup: getRandomItem(BLOOD_GROUPS),
    location: getRandomItem(LOCATIONS),
    urgency: Math.random() > 0.5 ? "High" : "Normal",
    status: Math.random() > 0.5 ? "Pending" : "Fulfilled",
    unitsNeeded: getRandomInt(1, 3),
    requestDate: new Date(Date.now() - getRandomInt(0, 7) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    contact: `80000000${String(i).padStart(2, '0')}`,
    email: `seeker${i + 1}@rapidblood.com`,
    password: 'password123'
  })),

  alerts: [
    { id: 1, message: "Urgent need for O- blood in Vijayawada", type: "urgent", date: new Date().toISOString() },
    { id: 2, message: "Blood donation camp in Tirupati next Sunday", type: "info", date: new Date().toISOString() },
    { id: 3, message: "Low stock of AB+ in Guntur", type: "warning", date: new Date().toISOString() }
  ]
};
