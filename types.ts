export interface Bus {
    id: string;
    vehicleId: string;
    routeId: string;
    lat: number;
    lng: number;
    bearing: number; // Direction in degrees (0-360)
    speed: number; // Speed in km/h
}

export interface Stop {
    id: string;
    name: string;
    lat: number;
    lng: number;
}

export interface Arrival {
    routeId: string;
    vehicleId: string;
    etaMinutes: number;
    occupancy: 'low' | 'medium' | 'high';
}

// FIX: Add DeviceStatus enum for device management page.
export enum DeviceStatus {
    Online = 'Online',
    Idle = 'Idle',
    Offline = 'Offline',
    Maintenance = 'Maintenance',
}

// FIX: Add Device interface for device management page.
export interface Device {
    deviceId: string;
    vehicleId: string;
    ts: string;
    status: DeviceStatus;
    speed: number;
    battery_v: number;
}

// FIX: Add AnalyticsDataPoint interface for analytics page.
export interface AnalyticsDataPoint {
    name: string;
    value: number;
}
