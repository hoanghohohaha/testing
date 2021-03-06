/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: fallenffgrave (https://sketchfab.com/fallenffgrave)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/objb4-2b259363089b425387698bbb40cdbab9
title: Objb4
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh
  }
  materials: {
    objb4: THREE.MeshBasicMaterial
  }
}

export default function OldWomanModel({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/oldwoman.gltf') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0.02, 1.36, -0.23]} rotation={[-1.9, -0.04, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.objb4} />
      </group>
    </group>
  )
}

useGLTF.preload('/oldwoman.gltf')
