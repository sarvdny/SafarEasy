
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import AnalyticsCharts from '../components/AnalyticsCharts';
import { getAnalytics } from '../services/mockApi';
import { AnalyticsDataPoint } from '../types';

const Analytics: React.FC = () => {
    const [onTimeData, setOnTimeData] = useState<AnalyticsDataPoint[]>([]);
    const [peakHourDelays, setPeakHourDelays] = useState<AnalyticsDataPoint[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const analyticsData = await getAnalytics();
                setOnTimeData(analyticsData.onTimeData);
                setPeakHourDelays(analyticsData.peakHourDelays);
            } catch (error) {
                console.error("Failed to fetch analytics data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <div className="flex-1 p-8 flex items-center justify-center">Loading analytics...</div>;
    }

    return (
        <div className="flex-1 flex flex-col overflow-y-auto">
            <Header title="Analytics & Reports" />
            <div className="p-8 flex-1">
                <AnalyticsCharts onTimeData={onTimeData} peakHourDelays={peakHourDelays} />
            </div>
        </div>
    );
};

export default Analytics;
