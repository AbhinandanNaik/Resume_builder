<script lang="ts">
    import { ResumePreview } from "$lib/components/preview";
    import {
        PersonalForm,
        ExperienceForm,
        EducationForm,
        SkillsForm,
    } from "$lib/components/editor";
    import { uiStore } from "$lib/stores/ui.svelte";
    import { exportToPdf } from "$lib/utils/pdf";

    $effect(() => {
        // React to export trigger (only if > 0 to avoid initial run if any)
        if (uiStore.exportTrigger > 0) {
            exportToPdf("resume-preview", "my-resume.pdf");
        }
    });
</script>

<div class="flex h-full w-full">
    <!-- Left Panel: Editor Form -->
    <div
        class="w-full lg:w-1/2 h-full overflow-y-auto custom-scrollbar p-6 lg:p-10 pb-32"
    >
        <div class="max-w-2xl mx-auto space-y-10">
            <header>
                <h1 class="text-3xl font-bold mb-2">Edit Resume</h1>
                <p class="text-gray-400">
                    Update your details below. Changes reflect in real-time.
                </p>
            </header>

            <div class="space-y-6">
                <PersonalForm />
                <ExperienceForm />
                <EducationForm />
                <SkillsForm />
            </div>
        </div>
    </div>

    <!-- Right Panel: Preview (Hidden on mobile) -->
    <div
        class="hidden lg:flex w-1/2 h-full bg-slate-950/50 border-l border-white/5 items-center justify-center p-8 relative"
    >
        <div
            class="mockup-window border bg-slate-900 border-white/10 w-full max-w-[600px] h-[850px] shadow-2xl shadow-primary/5"
        >
            <div
                class="w-full h-full overflow-hidden custom-scrollbar overflow-y-auto bg-white"
            >
                <ResumePreview />
            </div>
        </div>

        <!-- Background Decor -->
        <div
            class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none"
        ></div>
    </div>
</div>

<style>
    /* Custom Scrollbar */
    .custom-scrollbar::-webkit-scrollbar {
        width: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
        background: transparent;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.2);
    }
</style>
