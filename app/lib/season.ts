/**
 * Utility to format current season and year automatically
 * Keeps the website freshness indicator permanently up to date without manual edits.
 */
export function getCurrentSeasonYear(lang: 'ru' | 'en' = 'ru'): string {
    const now = new Date();
    const month = now.getMonth(); // 0 = Jan, 8 = Sep, 11 = Dec
    const year = now.getFullYear();

    if (lang === 'en') {
        const seasons = ['Winter', 'Winter', 'Spring', 'Spring', 'Spring', 'Summer', 'Summer', 'Summer', 'Autumn', 'Autumn', 'Autumn', 'Winter'];
        return `${seasons[month]} ${year}`;
    }

    const seasonsRu = ['зиму', 'зиму', 'весну', 'весну', 'весну', 'лето', 'лето', 'лето', 'осень', 'осень', 'осень', 'зиму'];
    return `на ${seasonsRu[month]} ${year} г.`;
}

export function getCurrentDateISO(): string {
    return new Date().toISOString().split('T')[0];
}
