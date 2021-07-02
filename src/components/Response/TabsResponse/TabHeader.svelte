<script lang="ts">
  import Tab from '../../Tab.svelte';
  import { responseHeaders } from '../../../lib/store';

  export let show: boolean;
</script>

<Tab {show}>
  <div>
    {#each Object.entries($responseHeaders) as header}
      <div class="header">
        <div>{header[0]}:</div>
        <div>{header[1]}</div>
      </div>
    {/each}
  </div>
</Tab>

<style>
  .header {
    display: flex;
  }
</style>
