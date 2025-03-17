import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col h-screen p-4 items-center md:gap-4">
      <h1 className="text-xl font-bold">Welcome to Talentrah</h1>
      <div className="max-w-md">
        <p className="mt-2">
          This is the landing page. Navigate to the dashboard by clicking{' '}
          <Link className="text-blue-500 underline" href="/dashboard">
            here
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
