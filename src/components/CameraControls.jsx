import { useFrame } from '@react-three/fiber';
import { useCharacterCustomizations } from '../contexts/CharacterCustomizations';
import * as THREE from 'three';
import { easing } from 'maath';

const cameraPositions = {
    [CameraModes.HEAD]: {
        position: new THREE.Vector3(0, 0.5, 1),
        target: new THREE.Vector3(0, 0.5, 0),
    },
};

export default function CameraControls() {
    const { cameraMode, setCameramode } = useCharacterCustomizations();

    function Rig() {
        return useFrame((state, delta) => {
            if (cameraMode === CameraModes.FREE) {
                easing.damp3(
                    state.camera.position,
                    [1 + state.mouse.x / 4, 1.5 + state.mouse.y / 4, 2.5],
                    0.2,
                    delta
                );
            }
            state.camera.position.lerp();
        });
    }

    return (
        <>
            <Rig />
        </>
    );
}
