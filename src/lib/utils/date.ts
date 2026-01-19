export function formatDate(dateString: string): string {
    if (!dateString) return "";

    // Check if it's "Present" or similar non-date string just in case
    if (dateString.toLowerCase() === 'present') return "Present";

    try {
        const date = new Date(dateString + "-01"); // Append day to make it parseable if it's YYYY-MM

        // Handle invalid dates
        if (isNaN(date.getTime())) return dateString;

        return new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(date);
    } catch (e) {
        return dateString;
    }
}
