import Navbar from "@/components/navbar/Navbar";

export default function CallsLayout({
  children
}: {
  children: React.ReactNode,
}) {
  return (
    <main className="flex-1">
      <Navbar />
      {children}
    </main>
  );
}
