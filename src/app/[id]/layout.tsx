import Sidebar from "../components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          <div className="flex">
            <aside>
              <Sidebar />
            </aside>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
