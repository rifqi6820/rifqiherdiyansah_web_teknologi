import './globals.css';
import { lusitana } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <div className={`${lusitana.className} antialiased`}>
    {children}
  </div>
  );
}
