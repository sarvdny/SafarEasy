
import React from 'react';
import { Device, DeviceStatus } from '../types';

interface DeviceTableProps {
    devices: Device[];
}

const statusStyles: { [key in DeviceStatus]: { dot: string; text: string } } = {
    [DeviceStatus.Online]: { dot: 'bg-green-500', text: 'text-green-800' },
    [DeviceStatus.Idle]: { dot: 'bg-yellow-500', text: 'text-yellow-800' },
    [DeviceStatus.Offline]: { dot: 'bg-red-500', text: 'text-red-800' },
    [DeviceStatus.Maintenance]: { dot: 'bg-blue-500', text: 'text-blue-800' },
};

const DeviceTable: React.FC<DeviceTableProps> = ({ devices }) => {
    const formatTimestamp = (ts: string) => {
        return new Date(ts).toLocaleString();
    }

    return (
        <div className="bg-white p-6 rounded-xl shadow-md overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">Status</th>
                        <th scope="col" className="px-6 py-3">Device ID</th>
                        <th scope="col" className="px-6 py-3">Vehicle ID</th>
                        <th scope="col" className="px-6 py-3">Last Ping</th>
                        <th scope="col" className="px-6 py-3">Speed (km/h)</th>
                        <th scope="col" className="px-6 py-3">Battery</th>
                        <th scope="col" className="px-6 py-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {devices.map(device => (
                        <tr key={device.deviceId} className="bg-white border-b hover:bg-gray-50">
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className={`h-2.5 w-2.5 rounded-full mr-2 ${statusStyles[device.status].dot}`}></div>
                                    <span className={statusStyles[device.status].text}>{device.status}</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{device.deviceId}</td>
                            <td className="px-6 py-4">{device.vehicleId}</td>
                            <td className="px-6 py-4">{formatTimestamp(device.ts)}</td>
                            <td className="px-6 py-4">{device.speed}</td>
                            <td className="px-6 py-4">{device.battery_v.toFixed(2)} V</td>
                            <td className="px-6 py-4">
                                <button className="font-medium text-indigo-600 hover:underline">Configure</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DeviceTable;
