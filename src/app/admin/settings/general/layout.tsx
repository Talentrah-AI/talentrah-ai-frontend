export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto pt-8 px-4 md:px-6 bg-muted rounder-[12px]">
      <h1 className="text-[20px] font-semibold mb-[16px]">Settings</h1>
      {children}
    </div>
  );
}
