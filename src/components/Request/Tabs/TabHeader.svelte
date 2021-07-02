<script lang="ts">
  import Tab from '../../Tab.svelte';
  import Button from '../../Button.svelte';
  import { headers } from '../../../lib/store';
  import { random } from '../../../lib/utils';
  import InputKeyValue from '../../InputKeyValue.svelte';

  export let show: boolean;

  const add = () => {
    $headers = [...$headers, { id: random(), key: '', value: '' }];
  };

  const remove = (id: number) => {
    $headers = $headers.filter((header) => id !== header.id);
  };
</script>

<Tab {show}>
  <div>
    {#each $headers as header (header.id)}
      <InputKeyValue bind:data={header} {remove} />
    {/each}
    <div>
      <Button on:click={add}>Add</Button>
    </div>
  </div>
</Tab>
