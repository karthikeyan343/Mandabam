import type { Metadata } from 'next';
import * as React from 'react';
import MuiProvider from '@/theme/MuiProvider';

export const metadata: Metadata = {
  title: 'Manadabam',
  description: 'Manadabam - Initial Setup',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MuiProvider>{children}</MuiProvider>
      </body>
    </html>
  );
}
