<script lang="ts">
    import { projectStore } from "../../database/projectStore";
    import type { Project } from "../../types/state";
    
    let isAdding = false;
    let projectData: Project = {
        id: "",
        title: "",
        description: "",
        isSelected: false,
        baseUrl: "",
        createEndPoint: "",
        readEndPoint: "",
        updateEndPoint: "",
        deleteEndPoint: "",
    };

    const changeAddingState = () => {
        isAdding = !isAdding;
    };

    const createProject = () => {
        projectData.id = new Date().getTime().toString();
        $projectStore.push(projectData);
        isAdding = false;
    };
</script>


<h1>Your Projects</h1>

<div class="project-list">
    {#each $projectStore as project (project.id)}
        <div class="project-container">
            <a href="/projects/{project.id}">{project.title}</a>
        </div>
    {/each}
    <div class="project-container">
        <button class="new-icon" on:click={changeAddingState}>+</button>
    </div>
</div>

{#if isAdding}
    <div class="create-pop">
        <h2>Create a new project</h2>
        <form on:submit|preventDefault={createProject}>
            <input type="text" name="title" bind:value={projectData.title} />
            <input type="text" name="description" bind:value={projectData.description} />
            <input type="text" name="baseUrl" bind:value={projectData.baseUrl} />
            <input type="text" name="createEndPoint" bind:value={projectData.createEndPoint} />
            <input type="text" name="readEndPoint" bind:value={projectData.readEndPoint} />
            <input type="text" name="updateEndPoint" bind:value={projectData.updateEndPoint} />
            <input type="text" name="deleteEndPoint" bind:value={projectData.deleteEndPoint} />
            <button type="submit">Create</button>
        </form>
    </div>
{/if}

<style>
    .project-list {
        display: flex;
        flex-wrap: wrap;
        gap: 2em;
    }
    .project-container {
        height: 270px;
        width: 270px;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 2px 3px 15px #535bf21f;
        display: flex;
        place-items: center;
        place-content: center;
        cursor: pointer;
    }
    .new-icon {
        font-size: 5em;
        color: #535bf2;
        background-color: transparent;
        border: none;
    }
</style>