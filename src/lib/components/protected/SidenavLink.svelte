<script lang="ts">
    export let nav: {
        name: string;
        href: string;
        icon: string;
    };

    import { onMount } from 'svelte';
    let url = `/`;
    onMount(() => url += window.location.href.split('/')[window.location.href.split('/').length - 1]);
</script>

<a href={nav.href}>
    <li class="nav-flex" class:active={nav.href===url}>
        <span class="nav-icon">{nav.icon}</span>
        <span class="nav-text">{nav.name}</span>
    </li>
</a>

<style>
    .nav-flex {
        display: flex;
        align-items: center;
        padding: 1.5em 1em;
        color: black;
    }
    .nav-icon {
        margin-right: 0.5em;
    }
    .nav-text {
        font-size: 0.9em;
    }
    .nav-flex:hover {
        background-color: #535bf21f;
    }
    .nav-flex.active {
        border-right: #535bf2 0.2em solid;
        color: #535bf2;
    }
</style>