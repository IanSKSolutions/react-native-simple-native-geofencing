// Type definitions for react-native-simple-native-geofencing@0.8.0
// Based on the README.md's usage section
// Template: https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html

// Ability add attachments (pictures)

type DangerGeofence = {
    key: string,
    latitude: number,
    longitude: number,
    radius: number,
    value: string,
    url: string
}
type MonitoringGeofence = {
    key: 'monitor',
    latitude: number,
    longitude: number,
    radius: number,
    url: string
}
export type Geofence = DangerGeofence | MonitoringGeofence;

export type InitNotificationsSettings = {
    start: {
        notify: boolean,    // If Notification should be fired on start tracking
        title: string,      // Title of Notification
        description: string, // Content of Notification
    },
    stop: {
        notify: boolean,
        title: string,
        description: string
    },
    timeout: {            // automatic stop by end of duration 
        notify: boolean,
        title: string,
        description: string
    },
    enter: {
        notify: boolean,
        title: string,
        description: string
    },
    exit: {
        notify: boolean,
        title: string,
        description: string
    },
    channel: {            // Only Android specific
        title: string,
        description: string
    }
}

type CallbackFunction = (error?: Error) => void;


export function initNotification(settings: InitNotificationsSettings): any;
export function addGeofence(geofence: Geofence, duration: number): any;
export function addGeofences(geofences: Geofence[], duration: number, failCallback: CallbackFunction): any;
export function removeAllGeofences(): any;
export function updateGeofences(geofences: Geofence[], duration: number): any;
export function removeGeofence(key: string): any;
export function startMonitoring(failCallback: CallbackFunction): any;
export function stopMonitoring(successCallback: CallbackFunction): any;