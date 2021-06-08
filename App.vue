<!-- <template>
	<div id="app"> -->
		<!-- <img src="./assets/logo.png"> -->
		<!-- 	<div>
			//router-link定义页面中点击触发部分　　
			<router-link to="/page1">Page1</router-link>
			//<router-link to="/page2">Page2</router-link>
		</div> -->
		<!-- //router-view定义页面中显示部分 -->
		<router-view>ss</router-view>
	<!-- </div>
</template> -->
<script>
	export default {
		name: 'App',
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
