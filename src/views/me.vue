<template>
	<div id="my">
		<div class="head">
			<span>菜单</span>
		    <p>昵称</p>
		    <span>分享</span>
		</div>
		 
	</div>
</template>

<script>
export default {
    name:"Me",
    data(){
    	return{
    		
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
</style>
