export function parseBusinessHours(businessHours: Record<string, string>) {
    return Object.entries(businessHours).map(([day, time]) => ({
        day,
        time,
    }));
}
