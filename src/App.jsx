import { Canvas, useFrame } from '@react-three/fiber';
import Experience from './components/Experience';
import { easing } from 'maath';

function App() {
    function Rig() {
        return useFrame((state, delta) => {
            easing.damp3(
                state.camera.position,
                [1 + state.mouse.x / 4, 1.5 + state.mouse.y / 4, 2.5],
                0.2,
                delta
            );
        });
    }

    return (
        <Canvas shadows camera={{ position: [1, 1.5, 2.5], fov: 50 }}>
            <ambientLight />
            <directionalLight
                position={[-5, 5, 5]}
                castShadow
                shadow-mapSize={1024}
            />
            <Experience />
            <mesh
                rotation={[-0.5 * Math.PI, 0, 0]}
                position={[0, -1, 0]}
                receiveShadow
            >
                <planeGeometry args={[10, 10, 1, 1]} />
                <shadowMaterial transparent opacity={0.2} />
            </mesh>
            <Rig />
        </Canvas>
    );
}

export default App;
