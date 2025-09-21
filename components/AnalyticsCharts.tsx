
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { AnalyticsDataPoint } from '../types';

interface AnalyticsChartsProps {
    onTimeData: AnalyticsDataPoint[];
    peakHourDelays: AnalyticsDataPoint[];
}

const AnalyticsCharts: React.FC<AnalyticsChartsProps> = ({ onTimeData, peakHourDelays }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md h-96">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">On-Time Performance by Route (%)</h3>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={onTimeData} margin={{ top: 5, right: 20, left: -10, bottom: 40 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" angle={-45} textAnchor="end" interval={0} height={60} />
                        <YAxis domain={[70, 100]} />
                        <Tooltip cursor={{fill: 'rgba(239, 246, 255, 0.5)'}} />
                        <Legend />
                        <Bar dataKey="value" name="On-Time %" fill="#4f46e5" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md h-96">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Average Delay by Peak Hour (minutes)</h3>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={peakHourDelays} margin={{ top: 5, right: 20, left: -10, bottom: 40 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" angle={-45} textAnchor="end" interval={0} height={60} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="value" name="Avg Delay (min)" stroke="#ef4444" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AnalyticsCharts;
