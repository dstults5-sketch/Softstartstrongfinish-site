import './globals.css';

export const metadata = {
  title: 'Soft Start, Strong Finish',
  description: 'Use the gifts of God to build—A podcast on faith, habit & humble growth.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
