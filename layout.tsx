import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'GapMate — Make every free hour count', description: 'Find meaningful things to do between college classes.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
