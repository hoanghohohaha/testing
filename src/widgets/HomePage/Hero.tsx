import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { softShadows, OrbitControls, } from "@react-three/drei";
import Model from '../../static/Scene'
import OldWomanModel from '../../static/Oldwoman';
import YoungWomanModel from '../../static/Youngwoman';
import WomanModel from '../../static/Woman';

softShadows();

export default function HeroSection() {

  return (
    <>
      <Canvas style={{ height: '80vh', width: '100%', background: `#24272C` }}
        camera={{ position: [-5, 2, 10], fov: 60 }}>
        <fog attach="fog" args={['black', 0, 20]} />
        <Suspense fallback={null}>
          <Model position={[0, 1, 5]} />
        </Suspense>
        <Suspense fallback={null}>
          <OldWomanModel position={[0, 0, -2]} />
        </Suspense>
        <Suspense fallback={null}>
          <WomanModel position={[-5, 0, 6]} scale={.6} />
        </Suspense>
        <Suspense fallback={null}>
          <YoungWomanModel position={[5, 1, 5]} scale={.3} />
        </Suspense>
        <ambientLight intensity={0.1} />
        {/* Our main source of light, also casting our shadow */}
        <directionalLight
          castShadow
          color='white'
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        {/* A light to help illumnate the spinning boxes */}
        <pointLight position={[-10, 0, -20]} intensity={0.5} color='#193F60' />
        <pointLight position={[0, -10, 0]} intensity={1.5} color='#193F60' />
        <pointLight position={[20, 20, -20]} intensity={1.5} color='#193F60' />
        <group>
          {/* This mesh is the plane (The floor) */}
          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3, 0]}
            receiveShadow>
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            <shadowMaterial attach='material' opacity={0.3} />
          </mesh>
        </group>
        <OrbitControls enableZoom={false} maxDistance={10} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2.5} autoRotate rotateSpeed={3} />
      </Canvas>
    </>
  )
}