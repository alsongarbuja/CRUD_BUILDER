<script>
  import SidenavLink from "./SidenavLink.svelte";

  let nav = [
    {
      name: "Projects",
      href: "/",
      icon: "📁"
    },
    {
      name: "Data",
      href: "/data",
      icon: "B"
    },
    {
      name: "Settings",
      href: "/settings",
      icon: "⚙️"
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
        border-right: #80808017 1px solid;
        height: 100%;
        background-color: #fff;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
</style>