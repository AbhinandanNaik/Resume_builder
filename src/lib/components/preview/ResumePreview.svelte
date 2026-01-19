<script lang="ts">
    import { resumeStore } from "$lib/stores/resume.svelte";
    import { formatDate } from "$lib/utils/date";
</script>

<div
    class="bg-white text-black w-full h-full p-8 flex flex-col font-sans"
    id="resume-preview"
>
    <!-- Header -->
    <header class="border-b-2 border-slate-800 pb-5 mb-6">
        <h1
            class="text-4xl font-bold uppercase tracking-wide text-slate-800 mb-1"
        >
            {resumeStore.personal.fullName || "Your Name"}
        </h1>
        <p class="text-xl text-slate-600 font-medium">
            {resumeStore.personal.title || "Job Title"}
        </p>

        <div class="flex flex-wrap gap-x-6 gap-y-2 text-sm mt-4 text-slate-600">
            {#if resumeStore.personal.email}
                <div class="flex items-center gap-1">
                    <span>{resumeStore.personal.email}</span>
                </div>
            {/if}
            {#if resumeStore.personal.phone}
                <div class="flex items-center gap-1">
                    <span>{resumeStore.personal.phone}</span>
                </div>
            {/if}
            {#if resumeStore.personal.location}
                <div class="flex items-center gap-1">
                    <span>{resumeStore.personal.location}</span>
                </div>
            {/if}
            {#if resumeStore.personal.website}
                <div class="flex items-center gap-1">
                    <span>{resumeStore.personal.website}</span>
                </div>
            {/if}
        </div>
    </header>

    <div class="space-y-8">
        <!-- Summary -->
        {#if resumeStore.personal.summary}
            <section>
                <h2
                    class="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 border-b border-slate-200 pb-1"
                >
                    Professional Summary
                </h2>
                <p class="text-sm leading-relaxed text-slate-700">
                    {resumeStore.personal.summary}
                </p>
            </section>
        {/if}

        <!-- Experience -->
        {#if resumeStore.experience.length > 0}
            <section>
                <h2
                    class="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 border-b border-slate-200 pb-1"
                >
                    Experience
                </h2>
                <div class="space-y-6">
                    {#each resumeStore.experience as exp}
                        <div class="group">
                            <div
                                class="flex justify-between items-baseline mb-1"
                            >
                                <h3 class="font-bold text-slate-800 text-lg">
                                    {exp.position}
                                </h3>
                                <span
                                    class="text-sm text-slate-500 whitespace-nowrap"
                                >
                                    {formatDate(exp.startDate)} – {exp.current
                                        ? "Present"
                                        : formatDate(exp.endDate)}
                                </span>
                            </div>
                            <div class="text-slate-600 font-medium mb-2">
                                {exp.company}
                                {exp.location ? `| ${exp.location}` : ""}
                            </div>
                            <p
                                class="text-sm text-slate-700 whitespace-pre-line leading-relaxed"
                            >
                                {exp.description}
                            </p>
                        </div>
                    {/each}
                </div>
            </section>
        {/if}

        <!-- Education -->
        {#if resumeStore.education.length > 0}
            <section>
                <h2
                    class="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 border-b border-slate-200 pb-1"
                >
                    Education
                </h2>
                <div class="space-y-4">
                    {#each resumeStore.education as edu}
                        <div>
                            <div
                                class="flex justify-between items-baseline mb-1"
                            >
                                <h3 class="font-bold text-slate-800 text-base">
                                    {edu.school}
                                </h3>
                                <span
                                    class="text-sm text-slate-500 whitespace-nowrap"
                                >
                                    {formatDate(edu.startDate)} – {formatDate(
                                        edu.endDate,
                                    )}
                                </span>
                            </div>
                            <div class="text-slate-600 text-sm">
                                {edu.degree} in {edu.field}
                            </div>
                            {#if edu.location}
                                <div class="text-slate-500 text-xs mt-1">
                                    {edu.location}
                                </div>
                            {/if}
                        </div>
                    {/each}
                </div>
            </section>
        {/if}

        <!-- Skills -->
        {#if resumeStore.skills.length > 0}
            <section>
                <h2
                    class="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 border-b border-slate-200 pb-1"
                >
                    Skills
                </h2>
                <div class="flex flex-wrap gap-2">
                    {#each resumeStore.skills as skill}
                        <span
                            class="px-2 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded border border-slate-200"
                            >{skill}</span
                        >
                    {/each}
                </div>
            </section>
        {/if}
    </div>
</div>
