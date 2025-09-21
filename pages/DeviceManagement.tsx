
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import DeviceTable from '../components/DeviceTable';
import { getDevices } from '../services/mockApi';
import { Device } from '../types';

const DeviceManagement: React.FC = () => {
    const [devices, setDevices] = useState<Device[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDevices = async () => {
            setLoading(true);
            try {
                const devicesData = await getDevices();
                setDevices(devicesData);
            } catch (error) {
                console.error("Failed to fetch devices:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchDevices();
    }, []);
    
    if (loading) {
        return <div className="flex-1 p-8 flex items-center justify-center">Loading devices...</div>;
    }

    return (
        <div className="flex-1 flex flex-col overflow-y-auto">
            <Header title="Device Management" />
            <div className="p-8 flex-1">
                <DeviceTable devices={devices} />
            </div>
        </div>
    );
};

export default DeviceManagement;
