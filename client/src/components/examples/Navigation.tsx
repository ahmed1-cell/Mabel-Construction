import Navigation from '../Navigation';

export default function NavigationExample() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20 p-8">
        <h1 className="text-2xl font-bold">Navigation Component Preview</h1>
        <p className="text-muted-foreground">The navigation is fixed at the top with mobile responsive design.</p>
      </div>
    </div>
  );
}