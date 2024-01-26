export default function Experience() {
    return (
        <mesh
            rotation={[-0.5 * Math.PI, 0, 0]}
            position={[0, -1, 0]}
            receiveShadow
        >
            <boxGeometry />
            <meshNormalMaterial />
        </mesh>
    );
}
