<script lang="ts">
    let projects = [
        {
            id: 1,
            title: "Project 1",
        },
        {
            id: 2,
            title: "Project 2",
        },
        {
            id: 3,
            title: "Project 3",
        },
        {
            id: 4,
            title: "Project 4",
        },
    ];

</script>


<h1>Your Projects</h1>

<div class="project-list">
    {#each projects as project}
        <div class="project-container">
            <a href="/projects/{project.id}">{project.title}</a>
        </div>
    {/each}
    <div class="project-container">
        <span class="new-icon">+</span>
    </div>
</div>

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
    }
</style>