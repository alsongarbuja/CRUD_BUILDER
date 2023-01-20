<script lang="ts">
  import { Router, Route } from "svelte-routing";

  import MasterLayout from "./lib/layouts/MasterLayout.svelte";
  import CreatePage from "./lib/pages/CreatePage.svelte";
  import ProjectPage from "./lib/pages/ProjectPage.svelte";
  import ReadPage from "./lib/pages/ReadPage.svelte";
  import SettingPage from "./lib/pages/SettingPage.svelte";
  import ShowPage from "./lib/pages/ShowPage.svelte";
  import UpdatePage from "./lib/pages/UpdatePage.svelte";

</script>

<MasterLayout>
  <Router>
    <Route path="/" component={ProjectPage} />
    <Route path="/settings" component={SettingPage} />
    <Route path="/data" component={ReadPage} />
    <Route path="/create" component={CreatePage} />
    <Route path="/update/:id" component={UpdatePage} />
    <Route path="/show/:id" component={ShowPage} />
  </Router>
</MasterLayout>