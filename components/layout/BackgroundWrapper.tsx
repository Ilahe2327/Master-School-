'use client'
import { useEffect } from 'react';
import dynamic from "next/dynamic";

const Plasma = dynamic(() => import('@/ui/Plasma'), { ssr: false });

export default function BackgroundWrapper() {
  useEffect(() => {
    const canvas = document.createElement('canvas');
    console.log('WebGL2:', canvas.getContext('webgl2'));
    console.log('WebGL1:', canvas.getContext('webgl'));
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <Plasma
        color="#0d92f1"
        speed={0.6}
        direction="forward"
        scale={1.1}
        opacity={0.6}
        mouseInteractive={true}
      />
    </div>
  );
}
