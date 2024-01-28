import { Canvas } from '@react-three/fiber';
import Experience from './components/Experience';
import Controls from './components/Controls';

function App() {
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
            </Canvas>

            <Controls />
        </>
    );
}

export default App;
