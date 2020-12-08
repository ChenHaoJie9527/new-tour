<template>
  <div>
    <ul>
      <li v-for="item of list" :key="item.id">
        <p>{{ item.id }}</p>
        <p>{{ item.name }}</p>
        <p>{{ item.age }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
      default: Function,
    },
  },
};
</script>

<style>
</style>