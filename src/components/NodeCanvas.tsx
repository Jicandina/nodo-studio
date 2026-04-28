import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function Node() {
  const ref = useRef<THREE.Group>(null!);

  useFrame((_, delta) => {
    ref.current.rotation.x += delta * 0.15;
    ref.current.rotation.y += delta * 0.28;
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 3]} intensity={4} color="#FF8A3D" />
      <pointLight position={[-3, -3, 2]} intensity={1.5} color="#FFF4E6" />
      <group ref={ref}>
        <mesh>
          <icosahedronGeometry args={[1.4, 1]} />
          <meshStandardMaterial color="#FF8A3D" transparent opacity={0.08} />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[1.4, 1]} />
          <meshStandardMaterial color="#FF8A3D" wireframe />
        </mesh>
      </group>
    </>
  );
}

function FloatingDots() {
  const geo = useMemo(() => {
    const arr = new Float32Array(40 * 3);
    for (let i = 0; i < 40; i++) {
      const r = 2.2 + Math.random() * 1.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(arr, 3));
    return g;
  }, []);

  const mat = useMemo(() => new THREE.PointsMaterial({
    size: 0.05,
    color: '#FF8A3D',
    transparent: true,
    opacity: 0.45,
  }), []);

  return <points geometry={geo} material={mat} />;
}

export default function NodeCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 42 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: 'transparent', width: '100%', height: '100%' }}
    >
      <Node />
      <FloatingDots />
    </Canvas>
  );
}
