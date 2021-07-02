<script lang="ts">
  export let components;
  export let tab;
</script>

<div class="tab">
  {#each Object.keys(components) as header}
    <div class:selected={tab === header} on:click={() => (tab = header)}>
      {header}
    </div>
  {/each}
</div>
<div class="tab_body">
  {#each Object.entries(components) as component}
    <svelte:component this={component[1]} show={tab === component[0]} />
  {/each}
</div>

<style>
  .tab {
    display: flex;
    width: 100%;
    border-bottom: 1px #ddd solid;
  }
  .tab > div {
    padding: 7px;
    cursor: pointer;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    margin-bottom: -1px;
    border-bottom: 1px transparent solid;
    color: #3e84cd;
  }

  .tab .selected {
    border: 1px #ddd solid;
    border-bottom: unset;
    background-color: white;
    color: black;
  }
  .tab_body {
    border: 1px #ddd solid;
    border-top: unset;
    min-height: 200px;
    padding: 10px;
  }
</style>
