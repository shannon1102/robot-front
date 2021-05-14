<template>
  <div>
    <img src="@/assets/robot-controller.png" alt="" style="height: 400px">
    <h2>Connected to Robot {{ this.$route.params.id }}</h2>
    <router-link to="choose-pattern" class="color-light">Choose pattern to start paving!</router-link>

  </div>
</template>

<script>
export default {
  name: "Resting",
   created() {
   }
}
</script>

<style scoped>

</style>