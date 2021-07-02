<script lang="ts">
  import Tab from '../../Tab.svelte';
  export let show: boolean;
  import setupEditors from '../../../lib/editor';
  import { onMount, onDestroy } from 'svelte';
  import { response } from '../../../lib/store';

  let ref;
  let editor;

  const unsubscribe = response.subscribe((value) => {
    editor &&
      editor.dispatch({
        changes: {
          from: 0,
          to: editor.state.doc.length,
          insert: value,
        },
      });
  });

  onMount(() => {
    const { responseEditor } = setupEditors();
    editor = responseEditor(ref);
  });

  onDestroy(unsubscribe);
</script>

<Tab {show}>
  <div style="overflow: auto;" bind:this={ref} />
</Tab>
