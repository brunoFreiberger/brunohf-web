export default function Footer() {
    return (
        <footer className="border-t border-border">
            <div className="mx-auto max-w-7xl px-4 py-6 text-xs text-muted-foreground sm:px-6 lg:px-8">
                <p>© {new Date().getFullYear()} Bruno Henrique Freiberger</p>
            </div>
        </footer>
    );
}
