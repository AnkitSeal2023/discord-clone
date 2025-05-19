import "../../globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <main className="md:pl-[72px] h-full">
        {children}
      </main>
    </div>
  );
}
