<script lang="ts">
    import { onMount } from "svelte";
    import { Canvas } from "@threlte/core";
    import Navbar from "$lib/components/ui/Navbar.svelte";
    import Button from "$lib/components/ui/Button.svelte";
    import { browser } from "$app/environment";
    import gsap from "gsap";
    import { fade } from "svelte/transition";

    let HeroScene: any;

    onMount(async () => {
        if (browser) {
            const module = await import("$lib/components/3d/HeroScene.svelte");
            HeroScene = module.default;

            // Text Animations
            const tl = gsap.timeline();

            tl.from(".hero-badge", {
                y: 20,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
            })
                .from(
                    ".hero-title span",
                    {
                        y: 100,
                        opacity: 0,
                        duration: 1,
                        stagger: 0.1,
                        ease: "power4.out",
                    },
                    "-=0.4",
                )
                .from(
                    ".hero-desc",
                    {
                        y: 20,
                        opacity: 0,
                        duration: 0.8,
                        ease: "power3.out",
                    },
                    "-=0.6",
                )
                .from(
                    ".hero-btns",
                    {
                        y: 20,
                        opacity: 0,
                        duration: 0.8,
                        ease: "power3.out",
                    },
                    "-=0.6",
                );
        }
    });
</script>

<div
    class="bg-slate-950 text-white min-h-screen overflow-hidden selection:bg-primary selection:text-black"
>
    <Navbar />

    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <!-- Background Gradients -->
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div
                class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow"
            ></div>
            <div
                class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/20 rounded-full blur-[120px] animate-pulse-slow delay-1000"
            ></div>
        </div>

        <div
            class="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center"
        >
            <!-- Text Content -->
            <div class="z-10">
                <div
                    class="hero-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-primary mb-8 backdrop-blur-md"
                >
                    <span class="relative flex h-2 w-2">
                        <span
                            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"
                        ></span>
                        <span
                            class="relative inline-flex rounded-full h-2 w-2 bg-primary"
                        ></span>
                    </span>
                    Next Gen Resume Builder
                </div>

                <h1
                    class="hero-title text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
                >
                    <div class="overflow-hidden"><span>Forge Your</span></div>
                    <div class="overflow-hidden">
                        <span
                            class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400"
                            >Digital Legacy</span
                        >
                    </div>
                </h1>

                <p
                    class="hero-desc text-lg lg:text-xl text-gray-400 mb-10 max-w-lg leading-relaxed"
                >
                    Stop sending static PDFs. Build an immersive, interactive
                    resume that standardizes your skills and impresses
                    recruiters instantly.
                </p>

                <div class="hero-btns flex flex-wrap gap-4">
                    <Button href="/app" size="lg">Start Building</Button>
                    <Button href="#demo" variant="secondary" size="lg"
                        >View Demo</Button
                    >
                </div>
            </div>

            <!-- 3D Visual -->
            <div class="h-[500px] lg:h-[600px] w-full relative z-0">
                {#if browser && HeroScene}
                    <div
                        class="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
                        in:fade
                    >
                        <Canvas>
                            <svelte:component this={HeroScene} />
                        </Canvas>
                    </div>
                {:else}
                    <!-- Loading / Fallback -->
                    <div class="w-full h-full flex items-center justify-center">
                        <div
                            class="animate-pulse w-32 h-32 rounded-full bg-primary/10 border border-primary/20"
                        ></div>
                    </div>
                {/if}
            </div>
        </div>
    </section>
</div>

<style>
    .animate-pulse-slow {
        animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
</style>
