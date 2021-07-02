<script lang="ts">
  import Tabs from '../Tabs.svelte';

  import TabQP from './Tabs/TabQP.svelte';
  import TabHeader from './Tabs/TabHeader.svelte';
  import TabJSON from './Tabs/TabJSON.svelte';

  let tabs = {
    'Query Params': TabQP,
    Headers: TabHeader,
    JSON: TabJSON,
  };

  let tab = 'Query Params';
</script>

<Tabs bind:tab components={tabs} />
