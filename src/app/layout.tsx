import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Provider from '@/app/provider';
import Header from '@/_components/layout/header';
import Container from '@/_components/layout/container';
import NextTopLoader from 'nextjs-toploader';
import '@/app/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Blog App',
  description: 'Next server actions with prisma',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <NextTopLoader
          color='#000000'
          height={6}
          shadow={false}
          showSpinner={false}
        />
        <Provider>
          <Header />
          <div className='h-24'></div>
          <Container>{children}</Container>
        </Provider>
      </body>
    </html>
  );
}
