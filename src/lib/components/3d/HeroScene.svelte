<script lang="ts">
    import { T, useTask } from "@threlte/core";
    import { interactivity, Float } from "@threlte/extras";
    import { spring } from "svelte/motion";

    interactivity();

    let rotation = 0;
    const scale = spring(1);
    const color = spring("#00f0ff", {
        damping: 0.5,
        stiffness: 0.1,
    });

    useTask((delta) => {
        rotation += 0.005;
    });

    function onPointerEnter() {
        scale.set(1.4);
        // @ts-ignore
        color.set("#ff00f0");
    }

    function onPointerLeave() {
        scale.set(1);
        // @ts-ignore
        color.set("#00f0ff");
    }
</script>

<T.PerspectiveCamera
    makeDefault
    position={[10, 10, 10]}
    on:create={({ ref }) => {
        ref.lookAt(0, 0, 0);
    }}
/>

<T.DirectionalLight position={[5, 10, 5]} intensity={1.5} />
<T.AmbientLight intensity={0.5} />
<T.PointLight position={[-5, -5, -5]} intensity={0.5} color="#ff0000" />

<Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
    <T.Group rotation.y={rotation}>
        <T.Mesh
            scale={$scale}
            on:pointerenter={onPointerEnter}
            on:pointerleave={onPointerLeave}
        >
            <T.IcosahedronGeometry args={[2, 1]} />
            <T.MeshStandardMaterial
                color={$color}
                roughness={0.1}
                metalness={0.8}
                wireframe={true}
            />
        </T.Mesh>

        <T.Mesh>
            <T.OctahedronGeometry args={[1, 0]} />
            <T.MeshStandardMaterial
                color="#ffffff"
                emissive="#ffffff"
                emissiveIntensity={2}
            />
        </T.Mesh>
    </T.Group>
</Float>
