<script lang="ts">
    import { projectStore, selectedProjectStore } from "../../database/projectStore";
    import { onMount } from "svelte";

    let projects = $projectStore;
    let selectedProject = $selectedProjectStore;

    onMount(() => {
        projectStore.subscribe((value) => {
            projects = value;
        });
        selectedProjectStore.subscribe((value) => {
            selectedProject = value;
        });
    });

    function handleSelectProject(event: any) {
        selectedProjectStore.set(event.target.value);
    }
</script>

<div>
    <div class="setting-tile-flex">
        <h3>Selected Project</h3>
        <select on:change={handleSelectProject}>
            {#each projects as project (project.id)}
                <option value={project} selected={project.id === selectedProject.id}>
                    {project.title}
                </option>
            {/each}
        </select>
    </div>
</div>

<style>
    .setting-tile-flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1em;
    }
</style>