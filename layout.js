import "./globals.css";

export const metadata = {
  title: "Hexagon Visuals",
  description: "Photography · Videography · Reels · Content",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
