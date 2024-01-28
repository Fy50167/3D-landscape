import { Canvas } from '@react-three/fiber';
import Experience from './components/Experience';
import Controls from './components/Controls';
import Customizations from './components/Customizations';

function App() {
    return (
        <>
            <Canvas
                shadows
                camera={{
                    position: [1, 0.5, 2.5],
                    fov: 70,
                }}
            >
                <color attach='background' args={['lightblue']} />
                <Experience />
            </Canvas>

            <Controls />
            <Customizations />
        </>
    );
}

export default App;
