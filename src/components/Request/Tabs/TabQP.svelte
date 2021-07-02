<script lang="ts">
  import InputKeyValue from '../../InputKeyValue.svelte';
  import { random } from '../../../lib/utils';
  import { params } from '../../../lib/store';
  import Tab from '../../Tab.svelte';
  import Button from '../../Button.svelte';

  export let show: boolean;

  const add = () => {
    $params = [...$params, { id: random(), key: '', value: '' }];
  };

  const remove = (id: number) => {
    $params = $params.filter((param) => id !== param.id);
  };
</script>

<Tab {show}>
  <div>
    {#each $params as param (param.id)}
      <InputKeyValue bind:data={param} {remove} />
    {/each}
    <div>
      <Button on:click={add}>Add</Button>
    </div>
  </div>
</Tab>
