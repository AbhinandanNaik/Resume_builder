<script lang="ts">
    import {
        resumeStore,
        addExperience,
        removeExperience,
    } from "$lib/stores/resume.svelte";
    import { Plus, Trash2 } from "lucide-svelte";
</script>

<div class="card bg-base-100/50 border border-white/5 p-6 rounded-xl">
    <div class="flex justify-between items-center mb-4">
        <h3 class="text-xl font-semibold text-primary">Experience</h3>
        <button
            class="btn btn-sm btn-outline btn-primary gap-2"
            onclick={addExperience}
        >
            <Plus size={16} /> Add
        </button>
    </div>

    <div class="space-y-4">
        {#each resumeStore.experience as exp (exp.id)}
            <div
                class="p-4 bg-base-300/30 rounded-lg border border-white/5 relative group transition-all hover:border-white/10"
            >
                <button
                    class="btn btn-xs btn-square btn-error btn-outline absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    onclick={() => removeExperience(exp.id)}
                    title="Remove"
                >
                    <Trash2 size={12} />
                </button>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        bind:value={exp.company}
                        placeholder="Company"
                        class="input input-bordered input-sm w-full bg-base-200/50 focus:bg-base-200"
                    />
                    <input
                        type="text"
                        bind:value={exp.position}
                        placeholder="Position"
                        class="input input-bordered input-sm w-full bg-base-200/50 focus:bg-base-200"
                    />

                    <div class="flex gap-2 items-center">
                        <input
                            type="month"
                            bind:value={exp.startDate}
                            class="input input-bordered input-sm w-full bg-base-200/50"
                        />
                        <span class="text-xs text-gray-500">to</span>
                        <div class="flex-1 flex gap-2 items-center">
                            {#if !exp.current}
                                <input
                                    type="month"
                                    bind:value={exp.endDate}
                                    class="input input-bordered input-sm w-full bg-base-200/50"
                                />
                            {:else}
                                <div
                                    class="badge badge-success badge-outline w-full h-8"
                                >
                                    Present
                                </div>
                            {/if}
                        </div>
                    </div>

                    <div class="form-control">
                        <label class="label cursor-pointer justify-start gap-2">
                            <input
                                type="checkbox"
                                bind:checked={exp.current}
                                class="checkbox checkbox-xs checkbox-primary"
                            />
                            <span class="label-text text-xs"
                                >Currently working here</span
                            >
                        </label>
                    </div>

                    <textarea
                        bind:value={exp.description}
                        placeholder="Description of your role..."
                        class="textarea textarea-bordered h-24 w-full md:col-span-2 bg-base-200/50 focus:bg-base-200"
                    ></textarea>
                </div>
            </div>
        {/each}

        {#if resumeStore.experience.length === 0}
            <div
                class="text-center py-8 text-gray-500 bg-base-200/10 rounded-lg border-2 border-dashed border-base-300"
            >
                No experience added yet.
            </div>
        {/if}
    </div>
</div>
