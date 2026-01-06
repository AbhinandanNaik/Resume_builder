<script lang="ts">
    import { resumeStore } from "$lib/stores/resume.svelte";
    import { X } from "lucide-svelte";

    let newSkill = $state("");

    function addSkill(e: KeyboardEvent) {
        if (e.key === "Enter" && newSkill.trim()) {
            e.preventDefault();
            if (!resumeStore.skills.includes(newSkill.trim())) {
                resumeStore.skills.push(newSkill.trim());
            }
            newSkill = "";
        }
    }

    function removeSkill(skill: string) {
        resumeStore.skills = resumeStore.skills.filter((s) => s !== skill);
    }
</script>

<div class="card bg-base-100/50 border border-white/5 p-6 rounded-xl">
    <h3 class="text-xl font-semibold mb-4 text-primary">Skills</h3>

    <div class="flex flex-wrap gap-2 mb-4">
        {#each resumeStore.skills as skill}
            <div class="badge badge-lg badge-neutral gap-2 p-3">
                {skill}
                <button
                    class="hover:text-error"
                    onclick={() => removeSkill(skill)}
                >
                    <X size={14} />
                </button>
            </div>
        {/each}
    </div>

    <input
        type="text"
        placeholder="Type a skill and press Enter..."
        class="input input-bordered w-full bg-base-300/50"
        bind:value={newSkill}
        onkeydown={addSkill}
    />
    <div class="label">
        <span class="label-text-alt text-gray-500">Press Enter to add</span>
    </div>
</div>
