import "./globals.css";

export const metadata = {
  title: "Northern Lights Tours",
  description: "Discover the magic of the Northern Lights",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
