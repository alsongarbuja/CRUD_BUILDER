<script lang="ts">
  import AppBar from "../components/protected/AppBar.svelte";
  import Sidebar from "../components/protected/Sidebar.svelte";

</script>

<main>
    <AppBar />
    <div class="grid">
        <Sidebar />
        <div class="content">
            <slot />
        </div>
    </div>
</main>

<style>
    .grid {
        display: grid;
        grid-template-columns: 1fr 4fr;
        height: calc(100vh - 70px);
        background-color: #535bf21f;
    }
    .content {
        padding: 1.5em;
        overflow-y: scroll;
        margin: 0 auto;
        width: 80%;
    }
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-thumb {
        background: #535bf2;
        border-radius: 2px;
    }
    @media (max-width: 768px) {
        .grid {
            grid-template-columns: 1fr;
        }
    }
</style>