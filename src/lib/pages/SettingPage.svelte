<script lang="ts">
    import { projectStore, selectedProjectStore } from "../../database/projectStore";
    import { onMount } from "svelte";
    import type { Project } from "../../types/state";

    let projects: Project[] = $projectStore;
    let selectedProject: Project = $selectedProjectStore;

    onMount(() => {
        projectStore.subscribe((value) => {
            projects = value;
        });
        selectedProjectStore.subscribe((value) => {
            selectedProject = value;
        });
    });

    function handleSelectProject(event) { 
        const selectedProject: Project = projects.find((project) => project.id === event.target.value);
        selectedProjectStore.update((_) => ({
            ...selectedProject,
            isSelected: true,
        }));
        localStorage.setItem("selectedProject", JSON.stringify(selectedProject));
        
        projectStore.update(projects => {
            return projects.map(project => {
                if(project.id === selectedProject.id) {
                    return {
                        ...project,
                        isSelected: true
                    }
                } else {
                    return {
                        ...project,
                        isSelected: false
                    }
                }
            })
        })
        localStorage.setItem("projects", JSON.stringify($projectStore));
    }
</script>

<div>
    <div class="setting-tile-flex">
        <h3>Selected Project</h3>
        <select on:change={handleSelectProject}>
            {#each projects as project (project.id)}
                <option value={project.id} selected={project.id===selectedProject.id}>
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