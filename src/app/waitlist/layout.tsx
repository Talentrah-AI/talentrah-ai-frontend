import { Navbar } from '@/components/landing/navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Waitlist',
  description: 'Join the Future. Get Early Access Today!',
};
export default function WaitListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="w-full relative">
        <Navbar isDark />
      </header>
      <main className="w-full">{children}</main>
    </>
  );
}
