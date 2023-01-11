<script>
  import SidenavLink from "./SidenavLink.svelte";

  let nav = [
    {
      name: "Projects",
      href: "/projects",
      icon: "📁",
      active: true,
    },
    {
      name: "Settings",
      href: "/settings",
      icon: "⚙️",
      active: false,
    },
  ];

</script>

<nav>
    <ul>
        {#each nav as n (n.href)}
            <SidenavLink nav={n} />
        {/each}
    </ul>
</nav>

<style>
    nav {
        padding: 0;
        border-right: rgba(128, 128, 128, 0.089) 1px solid;
        height: 100%;
        background-color: #fff;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
</style>