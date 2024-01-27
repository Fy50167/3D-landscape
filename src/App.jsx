import { Canvas, useFrame } from '@react-three/fiber';
import Experience from './components/Experience';
import Controls from './components/Controls';
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
        <>
            <Canvas
                shadows
                camera={{
                    position: [1, 1.5, 2.5],
                    fov: 70,
                }}
            >
                <color attach='background' args={['lightblue']} />
                <Experience />

                <Rig />
            </Canvas>

            <Controls />
        </>
    );
}

export default App;
