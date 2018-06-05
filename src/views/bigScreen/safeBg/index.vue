<template>
  <div class="container1">
    <el-row>
      <el-col :span="15"><side-left></side-left></el-col>
      <el-col :span="9"><side-right></side-right></el-col>
    </el-row>
    
    
    
    
    
   
  </div>
</template>

<script>
import { SideLeft,SideRight,Middle} from './components'
export default {
  name: "SafeBg",
  components: {
    SideLeft,
    SideRight,
    Middle
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};




</script>


<style scoped>
.container1{
  width: 100%;
  overflow: hidden;
}


</style>
