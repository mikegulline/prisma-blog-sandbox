'use client';
import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';
import { ReactLenis } from '@studio-freight/react-lenis';

interface ProvidersProps {
  children: React.ReactNode;
}
export default function Provider({ children }: ProvidersProps) {
  return (
    <ReactLenis root options={{ lerp: 0.05 }}>
      <SessionProvider>
        <NextUIProvider>{children}</NextUIProvider>
      </SessionProvider>
    </ReactLenis>
  );
}
