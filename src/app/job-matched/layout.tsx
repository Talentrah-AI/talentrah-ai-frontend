import DashboardLayout from "../dashboard/layout";

export default function JobMatchedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
} 