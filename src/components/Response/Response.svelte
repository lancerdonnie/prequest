<script lang="ts">
  import Tabs from '../Tabs.svelte';

  import TabHeader2 from './TabsResponse/TabHeader.svelte';
  import TabBody from './TabsResponse/TabBody.svelte';

  import prettyBytes from 'pretty-bytes';

  import { time, size, status } from '../../lib/store';

  let tabs = {
    Body: TabBody,
    Headers: TabHeader2,
  };

  let tab = 'Body';
</script>

<div class="main">
  <div class="title" style="text-align: left;">Response</div>
  <div style="text-align: left;margin-bottom: 10px;">
    Status: {$status ?? 'unknown'} Time: {$time}ms Size: {prettyBytes($size)}
  </div>
  <Tabs bind:tab components={tabs} />
</div>

<style>
  .main {
    margin-top: 20px;
  }
  .title {
    font-size: 1.1rem;
    font-weight: bold;
  }
</style>
