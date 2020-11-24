<template>
  <div class="footer">
    <slot :foo="foo">
      <h2>公共底部</h2>
    </slot>
  </div>
</template>

<script>
export default {
  name: "btn-footer",
  data() {
    return {
      foo: {
        id: 0,
        name: "chen"
      }
    }
  },
  created() {
  },
}
</script>

<style>

</style>