<script lang="ts">
    import { resumeStore } from "$lib/stores/resume.svelte";
</script>

<div class="card bg-base-100/50 border border-white/5 p-6 rounded-xl">
    <h3 class="text-xl font-semibold mb-4 text-primary">
        Personal Information
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label class="form-control w-full">
            <div class="label"><span class="label-text">Full Name</span></div>
            <input
                type="text"
                bind:value={resumeStore.personal.fullName}
                class="input input-bordered w-full bg-base-300/50"
            />
        </label>
        <label class="form-control w-full">
            <div class="label"><span class="label-text">Job Title</span></div>
            <input
                type="text"
                bind:value={resumeStore.personal.title}
                class="input input-bordered w-full bg-base-300/50"
            />
        </label>
        <label class="form-control w-full">
            <div class="label"><span class="label-text">Email</span></div>
            <input
                type="text"
                bind:value={resumeStore.personal.email}
                class="input input-bordered w-full bg-base-300/50"
            />
        </label>
        <label class="form-control w-full">
            <div class="label"><span class="label-text">Phone</span></div>
            <input
                type="text"
                bind:value={resumeStore.personal.phone}
                class="input input-bordered w-full bg-base-300/50"
            />
        </label>
        <label class="form-control w-full md:col-span-2">
            <div class="label"><span class="label-text">Summary</span></div>
            <textarea
                bind:value={resumeStore.personal.summary}
                class="textarea textarea-bordered h-24 bg-base-300/50"
            ></textarea>
        </label>
    </div>
</div>
