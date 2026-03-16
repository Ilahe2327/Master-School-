'use client'
import Plasma from '@/ui/Plasma';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function BackgroundWrapper() {
  const pathname = usePathname();

  useEffect(() => {
    console.log('pathname:', pathname);
  }, [pathname]);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -10 }}>
      <Plasma
        key={pathname}
        color="#0d92f1"
        speed={0.6}
        direction="forward"
        scale={1.1}
        opacity={1}
        mouseInteractive={false}
      />
    </div>
  );
}