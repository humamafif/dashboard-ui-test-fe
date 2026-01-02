import Header from "./components/header";
import Sidebar from "./components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="w-full h-full">{children}</div>
      </div>
    </div>
  );
}
