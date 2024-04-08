import CanvasLoader from "../Loader";

import React, {
  Suspense,
  useEffect,
  useState,
} from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF
} from '@react-three/drei';


const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    <mesh>
      <hemisphereLight
        intensity={0.15}
        groundColor='black'/>
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      {/* 聚光燈 intensity在新版有改版 */}
      <pointLight intensity={3} decay={0}/>
      {/* primitive 設定大小、位置 */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile? [0,-3,-2.2] :[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {

    // 設定抓取螢幕寬度的物件
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    
    // 將變動參數設定
    setIsMobile(mediaQuery.matches);

    // 建立更動函式
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change',
    handleMediaQueryChange);

    // remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change',
        handleMediaQueryChange
    )}
  }, [])
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={
        {
          position: [20,3,5],
          fov:25
        }
      }
      gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas;