<script lang="ts">
  export let remove: (id: number) => void;
  export let data;
</script>

<div class="header">
  <input bind:value={data.key} placeholder="Key" />
  <input bind:value={data.value} placeholder="Value" />
  <button on:click={() => remove(data.id)}>Remove</button>
</div>

<style>
  .header {
    display: flex;
  }
  button {
    cursor: pointer;
    background-color: #ff4949;
    color: white;
    border-radius: 3px;
    margin-left: 3px;
  }
</style>
