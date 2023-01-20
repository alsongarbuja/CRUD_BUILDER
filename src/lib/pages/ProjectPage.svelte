<script lang="ts">
    import { projectStore } from "../../database/projectStore";
    import type { Project } from "../../types/state";
    import Input from "../components/forms/Input.svelte";
    
    let isAdding: boolean = false;
    let isEditing: boolean = false;
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
        model: {},
    };
    let keyValues = [];
    let numberOfKeyValues = 1;

    const closePop = () => {
        isAdding = false;
        isEditing = false;
    }
    const changeAddingState = () => {
        isAdding = !isAdding;
    };

    const handleKey = (e: Event) => {
        const target = (e.target as HTMLInputElement)
        const { value } = target;

        keyValues.push({ [value]: '' });
    }

    const handleValue = (e: Event) => {
        const target = (e.target as HTMLInputElement)
        const { value } = target;

        keyValues.push({ [value]: '' });
    }

    const createProject = () => {
        projectData.id = new Date().getTime().toString();

        if($projectStore.length === 0) projectData.isSelected = true;
        else projectData.isSelected = false;
        
        projectStore.update(pd => [projectData, ...pd]);
        localStorage.setItem('projects', JSON.stringify($projectStore));
        isAdding = false;
    };

    const updateProject = () => {
        projectStore.update(pd => pd.map(p => p.id === projectData.id ? projectData : p));
        localStorage.setItem('projects', JSON.stringify($projectStore));
        isEditing = false;
    }

    const deleteProject = (id: string) => {
        projectStore.update(pd => pd.filter(p => p.id !== id));
        localStorage.setItem('projects', JSON.stringify($projectStore));
    };

    const editProject = (id: string) => {
        projectData = $projectStore.find(p => p.id === id);
        isEditing = true;
    };

</script>


<h1>Your Projects</h1>

<div class="project-list">
    {#each $projectStore as project (project.id)}
        <div class="project-container">
            <div>
                <button on:click={()=>editProject(project.id)}>Edit</button>
                <button on:click={()=>deleteProject(project.id)}>Delete</button>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span class:selected={project.isSelected} class="status">
                selected: {project.isSelected}
            </span>
        </div>
    {/each}
    <div class="project-container">
        <button class="new-icon" on:click={changeAddingState}>+</button>
    </div>
</div>

{#if isAdding || isEditing}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="pop-bg" on:click={closePop} />
    <div class="create-pop">
        <h2>
            {#if isAdding}
                Create Project
            {:else if isEditing}
                Edit Project
            {/if}
        </h2>
        <form on:submit|preventDefault={isAdding?createProject:updateProject}>
            <Input name="title" isRequired label="Project Title" bind:value={projectData.title} />
            <Input name="description" label="Project Description" bind:value={projectData.description} />
            <Input name="baseUrl" isRequired label="Project BaseUrl" bind:value={projectData.baseUrl} />
            <Input name="createEndPoint" label="Project Create End Point" bind:value={projectData.createEndPoint} />
            <Input name="updateEndPoint" isRequired label="Project Update End Point" bind:value={projectData.updateEndPoint} />
            <Input name="readEndPoint" label="Project Read End Point" bind:value={projectData.readEndPoint} />
            <Input name="deleteEndPoint" isRequired label="Project Delete End Point" bind:value={projectData.deleteEndPoint} />
            {#each Array(numberOfKeyValues) as _, index (index)}
                <div>
                    <div>
                        <label for="">Key:</label>
                        <input type="text" required on:change={handleKey}>
                    </div>
                    <div>
                        <label for="">Value:</label>
                        <input name={keyValues[index]?Object.keys(keyValues[index])[0]:''} type="text" required on:change={handleValue}>
                    </div>
                </div>
            {/each}
            <button type="button" on:click={()=>numberOfKeyValues++}>Add model</button>
            {#if numberOfKeyValues > 1}
                <button type="button" on:click={()=>numberOfKeyValues--}>Remove model</button>
            {/if}
            <br/>
            <button type="submit">
                {#if isAdding}
                    Create
                {:else if isEditing}
                    Update
                {/if}
            </button>
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
        flex-direction: column;
        place-items: center;
        place-content: center;
        text-align: center;
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
        max-height: 80vh;
        background-color: #fff;
        padding: 2em;
        border-radius: 1em;
        overflow-y: scroll;
    }
    .status {
        color: red;
    }
    .selected {
        color: green;
    }
</style>