<script lang="ts">
    import {
        resumeStore,
        addEducation,
        removeEducation,
    } from "$lib/stores/resume.svelte";
    import { Plus, Trash2 } from "lucide-svelte";
</script>

<div class="card bg-base-100/50 border border-white/5 p-6 rounded-xl">
    <div class="flex justify-between items-center mb-4">
        <h3 class="text-xl font-semibold text-primary">Education</h3>
        <button
            class="btn btn-sm btn-outline btn-primary gap-2"
            onclick={addEducation}
        >
            <Plus size={16} /> Add
        </button>
    </div>

    <div class="space-y-4">
        {#each resumeStore.education as edu (edu.id)}
            <div
                class="p-4 bg-base-300/30 rounded-lg border border-white/5 relative group transition-all hover:border-white/10"
            >
                <button
                    class="btn btn-xs btn-square btn-error btn-outline absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    onclick={() => removeEducation(edu.id)}
                    title="Remove"
                >
                    <Trash2 size={12} />
                </button>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        bind:value={edu.school}
                        placeholder="School / University"
                        class="input input-bordered input-sm w-full bg-base-200/50 focus:bg-base-200"
                    />
                    <input
                        type="text"
                        bind:value={edu.degree}
                        placeholder="Degree"
                        class="input input-bordered input-sm w-full bg-base-200/50 focus:bg-base-200"
                    />
                    <input
                        type="text"
                        bind:value={edu.field}
                        placeholder="Field of Study"
                        class="input input-bordered input-sm w-full bg-base-200/50 focus:bg-base-200"
                    />
                    <input
                        type="text"
                        bind:value={edu.location}
                        placeholder="Location"
                        class="input input-bordered input-sm w-full bg-base-200/50 focus:bg-base-200"
                    />

                    <div class="flex gap-2 items-center md:col-span-2">
                        <input
                            type="month"
                            bind:value={edu.startDate}
                            class="input input-bordered input-sm w-full bg-base-200/50"
                        />
                        <span class="text-xs text-gray-500">to</span>
                        <input
                            type="month"
                            bind:value={edu.endDate}
                            class="input input-bordered input-sm w-full bg-base-200/50"
                        />
                    </div>
                </div>
            </div>
        {/each}

        {#if resumeStore.education.length === 0}
            <div
                class="text-center py-8 text-gray-500 bg-base-200/10 rounded-lg border-2 border-dashed border-base-300"
            >
                No education added yet.
            </div>
        {/if}
    </div>
</div>
