<script lang="ts">
    export let nav: {
        name: string;
        href: string;
        icon: string;
        active: boolean;
    };
</script>

<a href={nav.href}>
    <li class="nav-flex" class:active={nav.active}>
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