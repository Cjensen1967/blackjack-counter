// src/app/not-found.tsx
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="mt-4">The page you're looking for doesn't exist.</p>
        <a href="/" className="mt-6 inline-block text-blue-500 hover:underline">
          Return to Home
        </a>
      </div>
    </div>
  );
}
