export default function NotFound() {
	return (
		<div className="fixed bg-background text-foreground top-0 right-0 bottom-0 left-0 z-30 flex flex-col items-center justify-center">
			<h1 className="font-mono text-6xl md:text-9xl font-medium text-center mb-8">
				404
			</h1>
			<p className="text-xl text-muted-foreground text-center mb-8">Page not found</p>
			<a
				href="/"
				className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200"
			>
				Go Home
			</a>
		</div>
	);
}
