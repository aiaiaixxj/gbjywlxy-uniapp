<template>
	<view class="container" style="">
		<el-row type="flex" class="row-bg" justify="center">
			<el-col :span="14">
				<div class="grid-content bg-purple">
					姓名：{{userInfo.realname}}
				</div>
			</el-col>
		</el-row>
		<el-row type="flex" class="row-bg" justify="center">
			<el-col :span="14">
				<div class="grid-content bg-purple">
					已修学时：{{userInfo.times}}</div>
			</el-col>
		</el-row>
		<el-row type="flex" class="row-bg" justify="center">
			<el-col :span="14">
				<div class="grid-content bg-purple">
					全市排名：{{userInfo.ranking}}
				</div>
			</el-col>
		</el-row>
		<div class="main-box-grid">
			<div class="main-box-grid-item" v-for="(item,index) in MyCourses" :key="index" @click="goToOtherPages"
				:data-id="index" :data-text="item.title">
				<img :src="item.url" alt="">
				<div>{{item.title}}</div>
				<!-- <div>{{index}}</div> -->
			</div>
		</div>
	</view>
</template>

<script>
	export default {
		name: "index",
		components: {

		},
		data() {
			return {
				title: 'Hello',
				mseeage: '',
				userInfo: uni.getStorageSync("userInfo"),
				MyCourses: [{
						url: '../../static/images/block1.png',
						title: "通知公告",
						des: "",
						id: 1
					},
					{
						url: '../../static/images/block2.png',
						title: "工作动态",
						des: "",
						id: 2
					},
					{
						url: '../../static/images/block3.png',
						title: "干教资讯",
						des: "",
						id: 3
					},
					{
						url: '../../static/images/block4.png',
						title: "全部课程",
						des: "",
						id: 4
					},
					{
						url: '../../static/images/block5.png',
						title: "所有培训班",
						des: "",
						id: 5
					},
					{
						url: '../../static/images/block6.png',
						title: "全部考试",
						des: "",
						id: 6
					},
					{
						url: '../../static/images/block7.png',
						title: "课程记录",
						des: "",
						id: 7
					},
					{
						url: '../../static/images/block8.png',
						title: "培训班记录",
						des: "",
						id: 8
					},
					{
						url: '../../static/images/block9.png',
						title: "考试记录",
						des: "",
						id: 9
					},
				]
			}
		},
		onLoad(e) {
			console.log("e==>", e)
			console.log("uni.getStorageSync=>", uni.getStorageSync("userInfo"))
		},
		mounted() {

		},
		methods: {
			goToOtherPages(e) {
				console.log("e===>>>", e)
				let aimtext = e.currentTarget.dataset.text; //获取点击目标文本title
				let index = e.currentTarget.dataset.id;
				console.log(index);
				console.log(aimtext);
				if ("通知公告" == aimtext) {
					uni.navigateTo({
						url: '../../pages/Announcements/announcements'
					});
				}
				if ("工作动态" == aimtext) {
					uni.navigateTo({
						url: '../Dynamicwork/Dynamicwork'
					});
				}
				if ("干教资讯" == aimtext) {
					uni.navigateTo({
						url: '../Dryteachinginformation/Dryteachinginformation'
					});
				}
				if ("全部课程" == aimtext) {
					uni.navigateTo({
						url: '../Allcourses/Allcourses'
					});
				}
				if ("所有培训班" == aimtext) {
					uni.navigateTo({
						url: '../AllTrainingCourses/AllTrainingCourses'
					});
				}
				if ("全部考试" == aimtext) {
					uni.navigateTo({
						url: '../Alltest/Alltest'
					});
				}
				if ("课程记录" == aimtext) {
					uni.navigateTo({
						url: '../CourseRecord/CourseRecord'
					});
				}
				if ("培训班记录" == aimtext) {
					uni.navigateTo({
						url: '../TrainingCoursesRecord/TrainingCoursesRecord'
					});
				}
				if ("考试记录" == aimtext) {
					uni.navigateTo({
						url: '../TestRecord/TestRecord'
					});
				}
			}
		}
	}
</script>

<style>
	.container {
		margin: 6px 6px;
	}

	.el-row {
		margin-bottom: 20px;
		margin: 2px 0px;
		&:last-child {
			margin-bottom: 0;
		}
	}

	.el-col {
		border-radius: 4px;

	}

	.bg-purple-dark {
		background: #99a9bf;
	}

	.bg-purple {
		background: #d3dce6;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.grid-content {
		border-radius: 4px;
		min-height: 36px;
		text-align: center;
		line-height: 36px;
	}

	.row-bg {
		padding: 0 0;
		background-color: #f9fafc;
	}

	.main-box-grid {
		display: flex;
		width: 100%;
		flex-wrap: wrap;
		justify-content: center;
	}

	.main-box-grid-item {
		margin: 10px 10px;
		text-align: center;
		line-height: 30px;
	}
</style>
