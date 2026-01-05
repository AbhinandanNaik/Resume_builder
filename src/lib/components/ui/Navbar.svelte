<script lang="ts">
</script>

<nav
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-white/5 border-b border-white/10"
>
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" class="text-2xl font-bold tracking-tighter text-white">
            NOVA<span class="text-primary">CV</span>
        </a>

        <div class="hidden md:flex gap-8 items-center">
            <a
                href="#features"
                class="text-gray-300 hover:text-white transition-colors"
                >Features</a
            >
            <a
                href="#templates"
                class="text-gray-300 hover:text-white transition-colors"
                >Templates</a
            >
            <a href="/app" class="btn btn-primary btn-sm glowing-btn"
                >Launch App</a
            >
        </div>
    </div>
</nav>

<style>
    .glowing-btn {
        box-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
        transition: all 0.3s ease;
    }
    .glowing-btn:hover {
        box-shadow:
            0 0 20px rgba(0, 240, 255, 0.8),
            0 0 40px rgba(0, 240, 255, 0.4);
        transform: translateY(-2px);
    }
</style>
