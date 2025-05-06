import MentorshipRequests from '@/pages/MentorshipRequests';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="w-[1135px] top-[94px] left-[281px] gap-4 font-gabarito">
        <MentorshipRequests />
      </div>
    </main>
  );
}
