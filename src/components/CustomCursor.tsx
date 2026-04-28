import { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (el) {
        const cursor = window.getComputedStyle(el).cursor;
        setIsPointer(cursor === 'pointer');
      }
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener('mousemove', onMove);
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);
    document.documentElement.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.removeEventListener('mouseenter', onEnter);
      document.documentElement.style.cursor = '';
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] w-2 h-2 bg-nodo rounded-full"
        style={{ left: pos.x - 4, top: pos.y - 4, transition: 'none' }}
      />
      <div
        className={`fixed pointer-events-none z-[9998] border-2 rounded-full transition-all duration-150 ${
          isPointer
            ? 'w-10 h-10 border-nodo bg-nodo/10'
            : 'w-6 h-6 border-nodo/50'
        }`}
        style={{
          left: pos.x - (isPointer ? 20 : 12),
          top: pos.y - (isPointer ? 20 : 12),
        }}
      />
    </>
  );
}
