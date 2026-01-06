<script lang="ts">
    import { page } from "$app/stores";
    import Button from "$lib/components/ui/Button.svelte";
    import {
        House,
        LayoutTemplate,
        Settings,
        Download,
        Menu,
    } from "lucide-svelte";
    import { uiStore } from "$lib/stores/ui.svelte";

    let { children } = $props();

    let isSidebarOpen = $state(false);
</script>

<div class="drawer lg:drawer-open">
    <input
        id="app-drawer"
        type="checkbox"
        class="drawer-toggle"
        bind:checked={isSidebarOpen}
    />

    <div
        class="drawer-content flex flex-col h-screen overflow-hidden bg-slate-900"
    >
        <!-- Navbar (Mobile/Tablet) -->
        <div
            class="w-full navbar bg-slate-950/50 backdrop-blur-md border-b border-white/5 lg:hidden px-4"
        >
            <div class="flex-none">
                <label
                    for="app-drawer"
                    aria-label="open sidebar"
                    class="btn btn-square btn-ghost"
                >
                    <Menu class="w-6 h-6 text-primary" />
                </label>
            </div>
            <div
                class="flex-1 px-2 mx-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400"
            >
                Builder
            </div>
        </div>

        <!-- Main Content (Split View resides here) -->
        <main class="flex-1 overflow-hidden relative">
            {@render children()}
        </main>
    </div>

    <!-- Sidebar -->
    <div class="drawer-side z-50">
        <label
            for="app-drawer"
            aria-label="close sidebar"
            class="drawer-overlay"
        ></label>
        <ul
            class="menu p-4 w-64 min-h-full bg-slate-950 border-r border-white/5 text-base-content gap-2"
        >
            <!-- Sidebar Header -->
            <li class="mb-6 px-2">
                <a
                    href="/"
                    class="flex items-center gap-2 text-xl font-bold hover:bg-transparent"
                >
                    <span
                        class="w-8 h-8 rounded bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white font-bold"
                        >R</span
                    >
                    <span>Resume<span class="text-primary">.ai</span></span>
                </a>
            </li>

            <!-- Navigation Links -->
            <li>
                <a
                    href="/app"
                    class="flex gap-3 {$page.url.pathname === '/app'
                        ? 'active bg-primary/10 text-primary'
                        : ''}"
                >
                    <LayoutTemplate class="w-5 h-5" />
                    Editor
                </a>
            </li>
            <li>
                <div class="tooltip tooltip-right" data-tip="Coming Soon">
                    <button
                        class="flex gap-3 w-full text-left opacity-50 cursor-not-allowed"
                    >
                        <Settings class="w-5 h-5" />
                        Settings
                    </button>
                </div>
            </li>

            <div class="divider my-2"></div>

            <!-- Actions -->
            <li>
                <button
                    class="flex gap-3 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-400/10"
                    onclick={() => uiStore.triggerExport()}
                >
                    <Download class="w-5 h-5" />
                    Export PDF
                </button>
            </li>
            <li>
                <a href="/" class="flex gap-3 text-gray-400">
                    <House class="w-5 h-5" />
                    Back to Home
                </a>
            </li>
        </ul>
    </div>
</div>
