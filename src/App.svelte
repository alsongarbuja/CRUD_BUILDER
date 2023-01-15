<script lang="ts">
  import { Router, Route } from "svelte-routing";

  import MasterLayout from "./lib/layouts/MasterLayout.svelte";
  import ProjectPage from "./lib/pages/ProjectPage.svelte";
  import SettingPage from "./lib/pages/SettingPage.svelte";

</script>

<MasterLayout>
  <Router>
    <Route path="/" component={ProjectPage} />
    <Route path="/settings" component={SettingPage} />
  </Router>
</MasterLayout>