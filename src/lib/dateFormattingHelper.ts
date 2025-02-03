export function formatDate(dt: number): string {
    const date = new Date(dt * 1000);

    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        day: 'numeric',
        month: 'short',
    };

    return date.toLocaleDateString('en-US', options);
}


export function formatOnlyMonth(dt: number): string {
    const date = new Date(dt * 1000);

    const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'short',
    };

    return date.toLocaleDateString('en-US', options);
}
