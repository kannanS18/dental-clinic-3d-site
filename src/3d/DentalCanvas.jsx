import React, { Suspense, useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Html, Float } from '@react-three/drei';
import * as THREE from 'three';
import { Sliders, Sparkles } from 'lucide-react';

function AnatomicalTooth({ whiteningGlow }) {
  const toothMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: whiteningGlow ? new THREE.Color('#FFFFFF') : new THREE.Color('#F7F6F0'),
    emissive: whiteningGlow ? new THREE.Color('#EDE9FE') : new THREE.Color('#000000'),
    emissiveIntensity: whiteningGlow ? 0.35 : 0.0,
    roughness: 0.12,
    metalness: 0.05,
    clearcoat: 1.0,
    clearcoatRoughness: 0.05,
    transmission: 0.25,
    thickness: 1.2,
    ior: 1.54,
  }), [whiteningGlow]);

  return (
    <group position={[0, 0, 0]}>
      <mesh position={[0, 0.45, 0]} material={toothMaterial} castShadow>
        <cylinderGeometry args={[0.9, 0.75, 0.9, 32]} />
      </mesh>
      <mesh position={[-0.38, 0.9, -0.38]} material={toothMaterial}><sphereGeometry args={[0.38, 24, 24]} /></mesh>
      <mesh position={[0.38, 0.9, -0.38]} material={toothMaterial}><sphereGeometry args={[0.38, 24, 24]} /></mesh>
      <mesh position={[-0.38, 0.9, 0.38]} material={toothMaterial}><sphereGeometry args={[0.38, 24, 24]} /></mesh>
      <mesh position={[0.38, 0.9, 0.38]} material={toothMaterial}><sphereGeometry args={[0.38, 24, 24]} /></mesh>
      <mesh position={[0, 0.02, 0]} material={toothMaterial}><cylinderGeometry args={[0.75, 0.6, 0.4, 32]} /></mesh>
      <group position={[-0.26, -0.65, 0]} rotation={[0, 0, 0.12]}>
        <mesh material={toothMaterial} castShadow><coneGeometry args={[0.32, 1.3, 24]} /></mesh>
        <mesh position={[0, -0.65, 0]} material={toothMaterial}><sphereGeometry args={[0.08, 16, 16]} /></mesh>
      </group>
      <group position={[0.26, -0.65, 0]} rotation={[0, 0, -0.12]}>
        <mesh material={toothMaterial} castShadow><coneGeometry args={[0.32, 1.3, 24]} /></mesh>
        <mesh position={[0, -0.65, 0]} material={toothMaterial}><sphereGeometry args={[0.08, 16, 16]} /></mesh>
      </group>
    </group>
  );
}

function DentalMirror() {
  const metalMat = useMemo(() => new THREE.MeshStandardMaterial({ color: '#D1D5DB', metalness: 0.95, roughness: 0.15 }), []);
  const mirrorMat = useMemo(() => new THREE.MeshPhysicalMaterial({ color: '#A7F3D0', metalness: 0.9, roughness: 0.05, reflectivity: 1.0 }), []);
  return (
    <group scale={0.75}>
      <mesh position={[0, -1.2, 0]} material={metalMat}><cylinderGeometry args={[0.045, 0.045, 2.2, 16]} /></mesh>
      <mesh position={[0, 0.05, 0.08]} rotation={[0.4, 0, 0]} material={metalMat}><cylinderGeometry args={[0.038, 0.045, 0.35, 16]} /></mesh>
      <mesh position={[0, 0.26, 0.22]} rotation={[0.6, 0, 0]} material={metalMat}><cylinderGeometry args={[0.35, 0.35, 0.04, 32]} /></mesh>
      <mesh position={[0, 0.27, 0.23]} rotation={[0.6, 0, 0]} material={mirrorMat}><cylinderGeometry args={[0.32, 0.32, 0.02, 32]} /></mesh>
    </group>
  );
}

function DentalProbe() {
  const metalMat = useMemo(() => new THREE.MeshStandardMaterial({ color: '#E5E7EB', metalness: 0.95, roughness: 0.1 }), []);
  return (
    <group scale={0.75}>
      <mesh position={[0, -1.0, 0]} material={metalMat}><cylinderGeometry args={[0.05, 0.05, 1.8, 16]} /></mesh>
      <mesh position={[0, 0.1, 0.05]} rotation={[0.3, 0, 0]} material={metalMat}><coneGeometry args={[0.035, 0.6, 16]} /></mesh>
    </group>
  );
}

function ToothModel({ whiteningGlow, laserScan, orbitTools, autoRotate }) {
  const groupRef = useRef();
  const toolsOrbitRef = useRef();
  const sparklesRef = useRef();

  const sparkleCount = 45;
  const sparkles = useMemo(() => {
    const arr = [];
    for (let i = 0; i < sparkleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 1.3 + Math.random() * 1.5;
      arr.push({
        x: Math.cos(angle) * radius,
        y: (Math.random() - 0.5) * 2.2 + 0.3,
        z: Math.sin(angle) * radius,
        scale: 0.04 + Math.random() * 0.05,
      });
    }
    return arr;
  }, []);

  useFrame((state, delta) => {
    if (autoRotate && groupRef.current) groupRef.current.rotation.y += delta * 0.3;
    if (toolsOrbitRef.current && orbitTools) toolsOrbitRef.current.rotation.y -= delta * 0.45;
    if (sparklesRef.current) sparklesRef.current.rotation.y += delta * 0.15;
  });

  return (
    <group position={[0, -0.2, 0]}>
      <group ref={groupRef}>
        <AnatomicalTooth whiteningGlow={whiteningGlow} />
        {laserScan && (
          <group position={[0, 0.5, 0]}>
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
              <ringGeometry args={[1.05, 1.12, 64]} />
              <meshBasicMaterial color="#06B6D4" side={THREE.DoubleSide} transparent opacity={0.8} />
            </mesh>
            <pointLight color="#7C3AED" intensity={3} distance={2.8} />
          </group>
        )}
      </group>

      {orbitTools && (
        <group ref={toolsOrbitRef}>
          <group position={[2.2, 0.4, 0]} rotation={[0, 0, -0.4]}><DentalMirror /></group>
          <group position={[-2.2, 0.2, 0]} rotation={[0, 0, 0.4]}><DentalProbe /></group>
        </group>
      )}

      <group ref={sparklesRef}>
        {sparkles.map((s, i) => (
          <Float key={i} speed={1.5} rotationIntensity={2} floatIntensity={1}>
            <mesh position={[s.x, s.y, s.z]}>
              <octahedronGeometry args={[s.scale, 0]} />
              <meshStandardMaterial color="#06B6D4" emissive="#A78BFA" emissiveIntensity={0.8} metalness={0.9} roughness={0.1} />
            </mesh>
          </Float>
        ))}
      </group>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]} receiveShadow>
        <circleGeometry args={[4.5, 64]} />
        <meshStandardMaterial color="#FAF9F6" roughness={0.2} metalness={0.05} />
      </mesh>
      <pointLight color="#DDD6FE" intensity={4} distance={6} position={[0, -0.5, 0]} />
    </group>
  );
}

export function DentalCanvas() {
  const [whiteningGlow, setWhiteningGlow] = useState(true);
  const [laserScan, setLaserScan] = useState(true);
  const [orbitTools, setOrbitTools] = useState(true);
  const [autoRotate, setAutoRotate] = useState(true);
  const [toolbarOpen, setToolbarOpen] = useState(false);

  return (
    <div className="relative w-full h-[650px] md:h-[750px] lg:h-[820px] overflow-hidden select-none">
      <Canvas shadows camera={{ position: [0, 0.5, 3.8], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={<Html center><div className="text-xs font-mono text-[#7C3AED]">SYNTHESIZING TOOTH ANATOMY...</div></Html>}>
          <Environment preset="city" environmentIntensity={0.6} />
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 8, 5]} intensity={1.4} castShadow />
          <ToothModel whiteningGlow={whiteningGlow} laserScan={laserScan} orbitTools={orbitTools} autoRotate={autoRotate} />
          <OrbitControls enablePan={false} minDistance={2.0} maxDistance={7.5} maxPolarAngle={Math.PI / 2 - 0.05} dampingFactor={0.05} />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-6 left-6 z-30 pointer-events-auto">
        <button
          onClick={() => setToolbarOpen(!toolbarOpen)}
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl glass-panel shadow-lg hover:border-[#7C3AED] transition-all group"
        >
          <Sliders className="w-4 h-4 text-[#7C3AED]" />
          <span className="text-xs font-semibold tracking-wider uppercase font-heading text-[#1E1B4B]">3D Tooth Anatomy Controls</span>
          <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
        </button>

        {toolbarOpen && (
          <div className="mt-3 p-5 rounded-2xl glass-panel shadow-2xl border border-[#7C3AED]/40 w-80 space-y-4">
            <div className="flex items-center justify-between border-b border-[#7C3AED]/20 pb-2">
              <span className="text-xs font-bold tracking-widest uppercase text-[#7C3AED] font-heading">Enamel & Tool Deck</span>
              <button onClick={() => setToolbarOpen(false)} className="text-gray-400 hover:text-black text-xs">✕</button>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span>Whitening Enamel Glow</span>
              <input type="checkbox" checked={whiteningGlow} onChange={e => setWhiteningGlow(e.target.checked)} className="accent-[#7C3AED]" />
            </div>
            <div className="flex items-center justify-between text-xs">
              <span>Cold Laser Whitening Beam</span>
              <input type="checkbox" checked={laserScan} onChange={e => setLaserScan(e.target.checked)} className="accent-[#7C3AED]" />
            </div>
            <div className="flex items-center justify-between text-xs">
              <span>Orbiting Precision Tools</span>
              <input type="checkbox" checked={orbitTools} onChange={e => setOrbitTools(e.target.checked)} className="accent-[#7C3AED]" />
            </div>
            <div className="flex items-center justify-between text-xs">
              <span>Auto Rotate 360</span>
              <input type="checkbox" checked={autoRotate} onChange={e => setAutoRotate(e.target.checked)} className="accent-[#7C3AED]" />
            </div>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAF9F6] to-transparent pointer-events-none" />
    </div>
  );
}