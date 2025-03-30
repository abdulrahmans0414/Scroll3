import { OrbitControls } from '@react-three/drei' // Note: OrbitControls moved to drei

function Experience() {
    return (
        <>
            <OrbitControls />
            <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshNormalMaterial />
            </mesh>
        </>
    )
}

export default Experience