<script lang="ts">
  import Tab from '../../Tab.svelte';
  export let show: boolean;
  import setupEditors from '../../../lib/editor';
  import { onMount } from 'svelte';
  import { editor } from '../../../lib/store';

  let json;

  onMount(() => {
    const { requestEditor } = setupEditors();
    $editor = requestEditor(json);
  });
</script>

<Tab {show}>
  <div style="overflow: auto;" bind:this={json} />
</Tab>
