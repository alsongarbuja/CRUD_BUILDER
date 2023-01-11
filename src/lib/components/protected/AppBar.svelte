<script lang="ts">
  import svelteLogo from '../../../assets/svelte.svg'
</script>

<header>
    <img class="logo" src={svelteLogo} alt="CRUD builder logo" />
    <div class="circle-avatar">
        <img src={svelteLogo} alt="User avatar" />
    </div>
</header>

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 70px;
        padding-inline: 2em;
        background-color: #535bf2;
    }
    .logo {
        height: 1.5em;
    }
    .circle-avatar {
        width: 1.5em;
        height: 1.5em;
        border-radius: 50%;
        overflow: hidden;
    }
</style>