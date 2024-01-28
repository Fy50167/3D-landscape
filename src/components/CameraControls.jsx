import { useFrame } from '@react-three/fiber';
import {
    CameraModes,
    useCharacterCustomizations,
} from '../contexts/CharacterCustomizations';
import { easing } from 'maath';
import { useRef } from 'react';
import * as THREE from 'three';

const cameraPositions = {
    [CameraModes.FREE]: {
        position: new THREE.Vector3(1, 1.5, 2.5),
        target: new THREE.Vector3(0, 0.5, 0),
    },
    [CameraModes.HEAD]: {
        position: new THREE.Vector3(0, 0.5, 1),
        target: new THREE.Vector3(0, 0.5, 0),
    },
    [CameraModes.TOP]: {
        position: new THREE.Vector3(-0.5, 0.2, 1.5),
        target: new THREE.Vector3(0, 0.2, 0),
    },
    [CameraModes.BOTTOM]: {
        position: new THREE.Vector3(0, -0.5, 2.5),
        target: new THREE.Vector3(0, -0.5, 0),
    },
};

export default function CameraControls() {
    const { cameraMode, setCameraMode } = useCharacterCustomizations();

    const CameraRig = () => {
        useFrame((state, delta) => {
            state.camera.position.lerp(
                cameraPositions[cameraMode].position,
                3 * delta
            );
            state.camera.lookAt(cameraPositions[cameraMode].target);
        });
    };

    return (
        <>
            <CameraRig />
        </>
    );
}
