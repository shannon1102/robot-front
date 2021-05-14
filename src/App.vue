<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>

</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: 'App',
  components: {
    Navbar: Navbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #34363C;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
body{
  margin: 0;
}
.robot-img{
  height: 200px;
}
.color-light{
  color: #1855F0;
}
a{
  text-decoration: none;
  font-size: 28px;
  font-weight: bold;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
}
</style>
