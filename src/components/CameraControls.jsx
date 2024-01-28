import { useFrame } from '@react-three/fiber';
import {
    useCharacterCustomizations,
    CameraModes,
} from '../contexts/CharacterCustomizations';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';

import { useRef } from 'react';

const cameraPositions = {
    ['FREE']: {
        position: new THREE.Vector3(1, 0.5, 2.5),
        target: new THREE.Vector3(0, 0.5, 0),
    },
    ['HEAD']: {
        position: new THREE.Vector3(0, 0.5, 1),
        target: new THREE.Vector3(0, 0.5, 0),
    },
    ['TOP']: {
        position: new THREE.Vector3(-0.5, 0.2, 1.5),
        target: new THREE.Vector3(0, 0.2, 0),
    },
    ['BOTTOM']: {
        position: new THREE.Vector3(0, -0.5, 2.5),
        target: new THREE.Vector3(0, -0.5, 0),
    },
};

export default function CameraControls() {
    const { cameraMode, currentCamera, setNewCamera } =
        useCharacterCustomizations();

    const orbitControls = useRef();

    const CameraRig = () => {
        useFrame((state, delta) => {
            state.camera.position.lerp(
                cameraPositions[cameraMode].position,
                delta * 3
            );

            orbitControls.current.target.lerp(
                cameraPositions[cameraMode].target,
                3 * delta
            );
        });
    };

    return (
        <>
            <OrbitControls ref={orbitControls} />
            <CameraRig />
        </>
    );
}
