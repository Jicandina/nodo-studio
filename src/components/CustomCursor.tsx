import { useState, useEffect, useRef } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [visible, setVisible] = useState(false);
  const pending = useRef({ x: -100, y: -100 });
  const rafId = useRef(0);
  const lastCheck = useRef(0);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMove = (e: MouseEvent) => {
      pending.current = { x: e.clientX, y: e.clientY };
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const tick = () => {
      setPos({ ...pending.current });
      const now = Date.now();
      if (now - lastCheck.current > 120) {
        lastCheck.current = now;
        const el = document.elementFromPoint(pending.current.x, pending.current.y);
        if (el) setIsPointer(window.getComputedStyle(el).cursor === 'pointer');
      }
      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);
    window.addEventListener('mousemove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);
    document.documentElement.style.cursor = 'none';

    return () => {
      cancelAnimationFrame(rafId.current);
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
        style={{ left: pos.x - 4, top: pos.y - 4, willChange: 'transform' }}
      />
      <div
        className={`fixed pointer-events-none z-[9998] border-2 rounded-full transition-all duration-150 ${
          isPointer ? 'w-10 h-10 border-nodo bg-nodo/10' : 'w-6 h-6 border-nodo/50'
        }`}
        style={{
          left: pos.x - (isPointer ? 20 : 12),
          top: pos.y - (isPointer ? 20 : 12),
          willChange: 'transform',
        }}
      />
    </>
  );
}
