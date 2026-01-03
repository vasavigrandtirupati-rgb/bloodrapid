import React, { createContext, useContext, useState, useEffect } from 'react';
import { storageService } from '../services/storageService';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const [bloodBanks, setBloodBanks] = useState([]);
    const [donors, setDonors] = useState([]);
    const [seekers, setSeekers] = useState([]);
    const [alerts, setAlerts] = useState([]);
    const [loading, setLoading] = useState(true);

    const refreshData = () => {
        setLoading(true);
        setBloodBanks(storageService.getBanks());
        setDonors(storageService.getDonors());
        setSeekers(storageService.getSeekers());
        setAlerts(storageService.getAlerts());
        setLoading(false);
    };

    useEffect(() => {
        refreshData();
    }, []);

    const updateEntity = (type, entity) => {
        // type: 'bloodBanks', 'donors', etc.
        // Maps to store keys
        let key;
        if (type === 'bloodBank') key = 'rapidblood_banks';
        else if (type === 'donor') key = 'rapidblood_donors';
        else if (type === 'seeker') key = 'rapidblood_seekers';

        if (key) {
            storageService.save(key, entity);
            refreshData(); // simple re-fetch
        }
    };

    return (
        <DataContext.Provider value={{
            bloodBanks,
            donors,
            seekers,
            alerts,
            loading,
            refreshData,
            updateEntity
        }}>
            {children}
        </DataContext.Provider>
    );
};
