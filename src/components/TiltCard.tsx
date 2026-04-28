import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function TiltCard({ children, className }: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-60, 60], [8, -8]);
  const rotateY = useTransform(x, [-60, 60], [-8, 8]);
  const sRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const sRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  return (
    <motion.div
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - r.left - r.width / 2);
        y.set(e.clientY - r.top - r.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{
        rotateX: sRotateX,
        rotateY: sRotateY,
        transformPerspective: 800,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
