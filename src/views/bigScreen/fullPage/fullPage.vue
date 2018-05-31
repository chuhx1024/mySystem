<template>
  <div class="container">
    <nav-bar></nav-bar>
    
   
  </div>
</template>

<script>
import { NavBar} from './components'
export default {
  name: "FullPage",
  components: {
    NavBar,
    
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};



(function (doc, win) {
		var docEl = doc.documentElement,
			resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		 	recalc = function () {
				var clientHeight = docEl.clientHeight;
				if (!clientHeight) return;
					docEl.style.fontSize = 25 * (clientHeight / 1080) + 'px';
					console.log(document.body.offsetHeight);
			};
		if (!doc.addEventListener) return;
		win.addEventListener(resizeEvt, recalc, false);
		doc.addEventListener('DOMContentLoaded', recalc, false);
		recalc();
	})(document, window);
</script>


<style scoped>
.container {
  margin: 0 auto;
  width: 100%;
  height: 43.2rem;
  position: relative;
  background: url(./img/dbj.jpg) no-repeat;
  background-size: 100% 100%;
}
</style>
