<script lang="ts">
    import { projectStore } from "../../database/projectStore";
    import type { Project } from "../../types/state";
    import Input from "../components/forms/Input.svelte";
    
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
        projectStore.update(pd => [projectData, ...pd]);
        localStorage.setItem('projects', JSON.stringify($projectStore));
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
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="pop-bg" on:click={changeAddingState} />
    <div class="create-pop">
        <h2>Create a new project</h2>
        <form on:submit|preventDefault={createProject}>
            <Input name="title" isRequired label="Project Title" bind:value={projectData.title} />
            <Input name="description" label="Project Description" bind:value={projectData.description} />
            <Input name="baseUrl" isRequired label="Project BaseUrl" bind:value={projectData.baseUrl} />
            <Input name="createEndPoint" label="Project Create End Point" bind:value={projectData.createEndPoint} />
            <Input name="updateEndPoint" isRequired label="Project Update End Point" bind:value={projectData.updateEndPoint} />
            <Input name="readEndPoint" label="Project Read End Point" bind:value={projectData.readEndPoint} />
            <Input name="deleteEndPoint" isRequired label="Project Delete End Point" bind:value={projectData.deleteEndPoint} />
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
    :global(.pop-bg) {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: #00000080;
    }
    .create-pop {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50vw;
        background-color: #fff;
        padding: 2em;
        border-radius: 1em;
    }
</style>