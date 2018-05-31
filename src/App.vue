<template>
  <div id="app" class="fillcontain">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style >
html,body{
    height: 100%;
    width: 100%;
    background-color: #F5F5F5;
}
.fillcontain{
    height: 100%;
    width: 100%;
    
}
</style>
