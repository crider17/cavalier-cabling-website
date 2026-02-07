"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-gray-light px-6">
      <div className="text-center max-w-md">
        <p className="text-6xl font-extrabold text-brand-orange">Oops</p>
        <h1 className="mt-4 text-2xl font-bold text-brand-black">
          Something went wrong
        </h1>
        <p className="mt-3 text-gray-500">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className="mt-8 inline-block rounded-lg bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-orange-dark"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
