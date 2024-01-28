import { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useCharacterAnimations } from '../contexts/CharacterAnimations';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useCharacterCustomizations } from '../contexts/CharacterCustomizations';

export default function Woman(props) {
    const halo = useRef();
    const group = useRef();
    const { setAnimations, animationIndex } = useCharacterAnimations();
    const { nodes, materials, animations } = useGLTF('./models/woman.gltf');
    const { actions, names } = useAnimations(animations, group);
    const { hairColor, setHairColor, setTopColor, setPantsColor } =
        useCharacterCustomizations();

    useEffect(() => {
        setAnimations(names);
    }, [names]);

    useEffect(() => {
        actions[names[animationIndex]].reset().fadeIn(0.5).play();
        return () => {
            actions[names[animationIndex]].fadeOut(0.5);
        };
    }, [animationIndex]);

    useEffect(() => {
        setHairColor('#4D4D4D');
        setTopColor('#194D33');
    }, []);

    useFrame((state, delta) => {
        if (animationIndex === 0) {
            easing.dampC(halo.current.material.color, 'hotpink', 0.2, delta);
        } else if (animationIndex === 1) {
            easing.dampC(halo.current.material.color, 'red', 0.2, delta);
        } else if (animationIndex === 2) {
            easing.dampC(halo.current.material.color, 'green', 0.2, delta);
        } else if (animationIndex === 3) {
            easing.dampC(halo.current.material.color, 'aquamarine', 0.2, delta);
        } else if (animationIndex === 4) {
            easing.dampC(halo.current.material.color, 'white', 0.2, delta);
        }
    });

    return (
        <group ref={group} {...props} dispose={null}>
            <group name='Scene'>
                <group
                    name='Armature'
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.01}
                >
                    <primitive object={nodes.mixamorigHips} />
                    <group name='SM_Chr_Developer_Female_02'>
                        <skinnedMesh
                            castShadow
                            name='Mesh019'
                            geometry={nodes.Mesh019.geometry}
                            material={materials.Glasses}
                            skeleton={nodes.Mesh019.skeleton}
                        />
                        <skinnedMesh
                            castShadow
                            name='Mesh019_1'
                            geometry={nodes.Mesh019_1.geometry}
                            material={materials.Eyes}
                            skeleton={nodes.Mesh019_1.skeleton}
                        />
                        <skinnedMesh
                            castShadow
                            name='Mesh019_2'
                            geometry={nodes.Mesh019_2.geometry}
                            skeleton={nodes.Mesh019_2.skeleton}
                        >
                            <meshStandardMaterial
                                {...materials.Hair}
                                color={hairColor}
                            />
                        </skinnedMesh>
                        <skinnedMesh
                            castShadow
                            name='Mesh019_3'
                            geometry={nodes.Mesh019_3.geometry}
                            material={materials.Skin}
                            skeleton={nodes.Mesh019_3.skeleton}
                        />
                        <skinnedMesh
                            castShadow
                            name='Mesh019_4'
                            geometry={nodes.Mesh019_4.geometry}
                            material={materials.Mouth}
                            skeleton={nodes.Mesh019_4.skeleton}
                        />
                        <skinnedMesh
                            castShadow
                            name='Mesh019_5'
                            geometry={nodes.Mesh019_5.geometry}
                            skeleton={nodes.Mesh019_5.skeleton}
                        >
                            <meshStandardMaterial
                                {...materials.Shirt}
                                color={shirtColor}
                            />
                        </skinnedMesh>
                        <skinnedMesh
                            castShadow
                            name='Mesh019_6'
                            geometry={nodes.Mesh019_6.geometry}
                            material={materials.Pants}
                            skeleton={nodes.Mesh019_6.skeleton}
                        />
                        <skinnedMesh
                            castShadow
                            name='Mesh019_7'
                            geometry={nodes.Mesh019_7.geometry}
                            material={materials.Shoes}
                            skeleton={nodes.Mesh019_7.skeleton}
                        />
                        <skinnedMesh
                            castShadow
                            name='Mesh019_8'
                            geometry={nodes.Mesh019_8.geometry}
                            material={materials.Sole}
                            skeleton={nodes.Mesh019_8.skeleton}
                        />
                        <skinnedMesh
                            castShadow
                            name='Mesh019_9'
                            geometry={nodes.Mesh019_9.geometry}
                            material={materials.Laces}
                            skeleton={nodes.Mesh019_9.skeleton}
                        />
                    </group>
                </group>
            </group>
            <mesh ref={halo} receiveShadow position={[0, 1, -1]}>
                <circleGeometry args={[1, 64]} />
                <meshStandardMaterial />
            </mesh>
        </group>
    );
}

useGLTF.preload('./models/woman.gltf');
