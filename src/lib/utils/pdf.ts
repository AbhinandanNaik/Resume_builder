export function exportToPdf(elementId: string, fileName: string = 'resume.pdf') {
    // We use native browser printing for best quality and compatibility with modern CSS (oklch)
    // The print styles in app.css handle hiding the UI and formatting the resume.
    window.print();
}
