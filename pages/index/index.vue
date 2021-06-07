<template>
<view class="" style="display: flex;flex-direction: column;justify-content: center;width: ;">
<!-- <el-row type="flex" class="row-bg">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
</el-row> -->
<el-row type="flex" class="row-bg" justify="center">
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row type="flex" class="row-bg" justify="center">
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row type="flex" class="row-bg" justify="center">
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
</el-row>

 <view class="" style="width: 200px;height: 40px;background-color: gray;border-radius: 12px;margin-top: 10px;"></view>
  <view class="" style="width: 200px;height: 40px;background-color: gray;border-radius: 12px;margin-top: 10px;"></view>
   <view class="" style="width: 200px;height: 40px;background-color: gray;border-radius: 12px;margin-top: 10px;"></view>
    <view class="" style="width: 200px;height: 40px;background-color: gray;border-radius: 12px;margin-top: 10px;"></view>
  



<!-- <el-row type="flex" class="row-bg" justify="end">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row type="flex" class="row-bg" justify="space-between">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row type="flex" class="row-bg" justify="space-around">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
</el-row> -->
</view>
</template>

<script>
	

	export default {
		components: {
			
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>

 .el-row {
    margin-bottom: 20px;
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
  }
  .row-bg {
    padding: 0 0;
    background-color: #f9fafc;
  }
</style>
