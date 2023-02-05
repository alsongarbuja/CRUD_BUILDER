<script lang="ts">
    import { selectedProjectStore } from "../../database/projectStore";

    let datas = [];

    const getData = async () => {
        const response = await fetch($selectedProjectStore.baseUrl+$selectedProjectStore.readEndPoint);
        const d = await response.json();
        datas = d;
    }

    getData();
</script>

<div>
    <h1>{$selectedProjectStore.title}</h1>
    <h2>{$selectedProjectStore.description}</h2>

    <div class="data-list">
        <div class="data-container">
            <div class="data-container">
                <button class="new-icon">Create</button>
            </div>
            <table>
                <tr>
                    {#each Object.keys($selectedProjectStore.model) as key}
                        <th>{key}</th>
                    {/each}
                    <th>Actions</th>
                </tr>
                {#each datas as data}
                    <tr>
                        {#each Object.keys($selectedProjectStore.model) as key}
                            <td>{data[key]}</td>
                        {/each}
                        <td>
                            <div>
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
                        </td>
                    </tr>
                {/each}
            </table>
        </div>
    </div>
</div>

<style>
    table {
        width: 100%;
    }
    th, td {
        padding: 10px;
        text-align: left;
    }
</style>