import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-gray-light px-6">
      <div className="text-center max-w-md">
        <p className="text-6xl font-extrabold text-brand-orange">404</p>
        <h1 className="mt-4 text-2xl font-bold text-brand-black">
          Page Not Found
        </h1>
        <p className="mt-3 text-gray-500">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-lg bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-orange-dark"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
