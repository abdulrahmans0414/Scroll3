import { OrbitControls, ScrollControls } from '@react-three/drei' // Note: OrbitControls moved to drei
import { NB_FLOORS, Office } from './Office'
import { Overlay } from './Overlay'

function Experience() {
    return (
        <>
            {/* Lights (improved setup) */}
            <ambientLight intensity={0.5} />  {/* Softer ambient light */}
            <directionalLight
                position={[10, 10, 10]}
                intensity={1.5}
                castShadow  // Enable shadows
                shadow-mapSize={[1024, 1024]}  // Higher resolution shadows
            />

            {/* OrbitControls (with smoother settings) */}
            <OrbitControls
                enableZoom={false}
                enablePan={false}  // Disable panning if not needed
                dampingFactor={0.05}  // Smoother rotation
            />

            {/* Scroll Controls */}
            <ScrollControls pages={NB_FLOORS} damping={0.25}>
                {/* Office model with shadow casting */}
                <Office
                    castShadow  // Ensure the model casts shadows
                    receiveShadow  // If it should receive shadows (e.g., floor)
                />

                {/* add Overlay */}
                <Overlay />
            </ScrollControls>

        </>
    )
}

export default Experience