<template>
	<view>
		<!-- 刷新页面后的顶部提示框 -->
		<view class="tips" :class="{ 'tips-ani': false }">为您更新了10条最新新闻动态</view>
		<unicloud-db @load="load">
			<!-- 基于 uni-list 的页面布局 -->
			<uni-list>
				<!-- to属性：将新闻ID和标题传给详情页 -->
				<!-- TODO：需增加日期格式化的示例 -->
				<!-- to 属性携带参数跳转详情页面，当前只为参考 -->
				<uni-list-item direction="row" v-for="(item,index) in resdata" :key="index" :title="item.title"
					:note="item.date" :to="'/pages/detail/detail?id='+item._id+'&title='+item.title">
					<!-- 通过header插槽定义列表左侧的图片显示，其他内容通过List组件内置属性实现-->
					<template v-slot:header>
						<view class="uni-thumb">
							<!-- 当前判断长度只为简单判断类型，实际业务中，根据逻辑直接渲染即可 -->
						<!-- 	<image :src=" 'http://2020.whce.gov.cn/'+item.typeImg" mode="aspectFill"></image> -->
								<image src="../../static/images/bg_login.png" mode="aspectFill"></image>

						</view>
					</template>
				</uni-list-item>
			</uni-list>
			<!-- 通过 loadMore 组件实现上拉加载效果，如需自定义显示内容，可参考：https://ext.dcloud.net.cn/plugin?id=29 -->
			<uni-load-more v-if="hasMoreData " :status="options.status" />
		</unicloud-db>
	</view>

</template>

<script>
	export default {
		name: "Announcements",
		data() {
			return {
				tipShow: false, // 是否显示顶部提示框
				pageNo: 1,
				totalPage: 1,
				resdata: [],
				hasMoreData: false,
			}
		},
		onLoad() {
			console.log("Announcements is show!")
			this.getData();
		},
	
		methods: {
			load(data, ended) {
				// if (ended) {
				// 	this.formData.status = 'noMore'
				// }
			},
			getData() {
				this.$axios({
						method: 'POST',
						url: '/applets/content-list.jspx',
						params: {
							channelId: 1,
							pageNo: this.pageNo
						},
						header: {
							'content-type': 'application/x-www-form-urlencoded'
						} //请求头的信息
					})
					.then((res) => {
						console.log(res); //调出来的数据在控制台显示，方便查看
						var e = res.contents;
						console.log(e);
			
						// resdata: e.courses,//res.data就是你调出来的所有数据（当然也可以在这里面自定义想要调用的数据），然后把值赋给resdata，之后对resdata进行处理即可，具体见wxml
						this.totalPage = res.totalPage;
			
						var contentlistTem = this.resdata;
						if (this.pageNo == 1) {
							contentlistTem = []
						}
						var resdata = e;
						if (this.pageNo >= e.totalPage) {
			
							this.resdata = contentlistTem.concat(resdata),
								this.hasMoreData = false
			
						} else {
			
							this.resdata = contentlistTem.concat(resdata),
								this.hasMoreData = true,
								this.pageNo = this.pageNo + 1
			
						}
					})
					.catch((error) => {
			
					})
			},
		},
		/**
		 * 下拉刷新回调函数
		 */
		onPullDownRefresh() {
			console.log('下拉');
			this.pageNo = 1
			this.getData()

		},
		/**
		 * 上拉加载回调函数
		 */
		onReachBottom() {
			if (this.hasMoreData) {
				this.getData()
			} else {
			}
		}
	}
</script>

<style lang="scss">
	@import '@/common/uni-ui.scss';

	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4;
		min-height: 100%;
		height: auto;
	}

	.tips {
		color: #67c23a;
		font-size: 14px;
		line-height: 40px;
		text-align: center;
		background-color: #f0f9eb;
		height: 0;
		opacity: 0;
		transform: translateY(-100%);
		transition: all 0.3s;
	}

	.tips-ani {
		transform: translateY(0);
		height: 40px;
		opacity: 1;
	}

	.content {
		width: 100%;
		display: flex;
	}

	.list-picture {
		width: 100%;
		height: 145px;
	}

	.thumb-image {
		width: 100%;
		height: 100%;
	}

	.ellipsis {
		display: flex;
		overflow: hidden;
	}

	.uni-ellipsis-1 {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.uni-ellipsis-2 {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
</style>
