<script lang="ts">
  export let show: boolean;
</script>

<div class:show>
  <slot />
</div>

<style>
  div {
    display: none;
  }
  div.show {
    display: initial;
  }
</style>
