import React, { useRef, useState } from 'react';
import * as THREE from 'three';
import { Canvas, MeshProps, ThreeEvent, useFrame } from "@react-three/fiber";
import { softShadows, MeshWobbleMaterial, OrbitControls, } from "@react-three/drei";
import { useSpring, animated } from "react-spring/three";

softShadows();

const SpinningMesh = ({ position, color, speed, args }: any) => {
  //ref to target the mesh
  // const mesh = useRef()

  const mesh = useRef<THREE.Mesh>(null!)
  // useFrame((state, delta) => (if (ref.current) ref.current.rotation.x += 0.01))

  //useFrame allows us to re-render/update rotation on each frame
  useFrame(() => { if (mesh.current) { mesh.current.rotation.x = mesh.current.rotation.y += 0.01 } })

  //Basic expand state
  // const [expand, setExpand] = useState(false);
  // // React spring expand animation
  // const props = useSpring({
  //   scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  // });

  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  return (
    <mesh
      position={position}
      scale={[1.5, 1.5, 1.5]}
      onClick={e => setActive(!active)}
      castShadow>
      <boxBufferGeometry attach='geometry' args={args} />
      {/* <MeshWobbleMaterial
        visible
        color={color}
        speed={speed}
        attach='material'
        factor={0.6}
      /> */}
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
};

// function Model({ url }) {
//   const gltf = useGLTFLoader(url, true);
//   return <primitive object={gltf.scene} dispose={null} />;


export default function HeroSection() {
  return (
    <>
      <Canvas style={{ height: '80vh', width: '100%', background: `#24272C` }}
        camera={{ position: [-5, 2, 10], fov: 60 }}>
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
          <mesh>
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <meshStandardMaterial attach="material" color={'orange'} />
          </mesh>
          <SpinningMesh
            position={[0, 0, 0]}
            color='lightblue'
            args={[3, 2, 1]}
            speed={2}
          />
          <SpinningMesh position={[-2, 1, -5]} color='pink' speed={6} />
          <SpinningMesh position={[5, 1, -2]} color='pink' speed={6} />
          <SpinningMesh position={[-2, 1, 5]} color='pink' speed={6} />
        </group>
        <OrbitControls enableZoom={false} maxDistance={10} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2.5} autoRotate rotateSpeed={3} />
      </Canvas>
    </>
  )
}