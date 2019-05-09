<template>
	<div id="my">
		<div class="head">
			<span>菜单</span>
		    <p>昵称</p>
		    <span>分享</span>
		</div>
		<div class="photo">
			<van-uploader :after-read="onRead" style="border: 1px solid #999;border-radius: 50%;width: 60px;height: 60px;text-align: center;line-height: 60px;float: left;margin-top: 20px;">
			  <van-icon name="plus" />
			</van-uploader>
			<div class="mess">
				<ul>
					<li>
						<span>{{focus}}</span>
						<p>关注</p>
					</li>
					<li>
						<span>{{fensi}}</span>
						<p>粉丝</p>
					</li>
					<li>
						<span>{{huozan}}</span>
						<p>获赞</p>
					</li>
				</ul>
				<button @click="message()">个人资料</button>
			</div>
		</div> 
	</div>
</template>

<script>
export default {
    name:"Me",
    data(){
    	return{
    		focus:0,
    		fensi:0,
    		huozan:0
    	}
    },
    methods: {
	    onRead(file) {
	      console.log(file)
	    },
	    message(){
	    	this.$router.push('/personal')
	    }
  	}
}
</script>
<style scoped>
	.head{
		height: 45px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: #ccc;
		padding: 0 10px;
	}
	.head span{
		width: 40px;
		height: 30px;
		text-align: center;
		font-size: 12px;
		line-height: 30px;
		background: #fff;
		display: block;
	}
	.photo{
		height: 100px;
		padding: 0 20px;
	}
	.photo .mess{
		float: left;
		height: 100%;
		margin-left: 30px;
	}
	.photo .mess ul{
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 20px;
	}
	.photo .mess ul li{
		margin: 0 15px;
	}
	.photo .mess ul li span{
		width: 25px;
		display: block;
		font-size: 12px;
		text-align: center;
	}
	.photo .mess ul li p{
		font-size: 12px;
		color: #999;
		line-height: 20px;
	}
	.photo .mess button{
		border: 0;
		border: 1px solid #ccc;
		text-align: center;
		line-height: 30px;
		height: 30px;
		width: 200px;
		background: #fff;
		border-radius: 20px;
		font-size: 12px;
		color: #ccc;
		margin-top: 10px;
	}
</style>
