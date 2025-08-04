import React from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from 'drei';

const FieldMap = () => {
  return (
    <div>
      <h1>Field Map</h1>
      <Canvas>
        <ambientLight />
        <directionalLight position={[10, 10, 10]} />
        <OrbitControls />
        <mesh>
          <boxBufferGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      </Canvas>
    </div>
  );
};

export default FieldMap;
