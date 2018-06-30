<template>
  <div id="app">
	<m-header :seller="seller"></m-header>
	<div class="tab border-1px">
		<div class="tab-item"><router-link to="/goods" class="active">商品</router-link></div>
		<div class="tab-item"><router-link to="/rattings">评论</router-link></div>
		<div class="tab-item"><router-link to="/seller">商家</router-link></div>
	</div>
	<keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script type='text/ecmascript-6'>
import MHeader from './components/header/header.vue'

const ERR_OK = 0;

export default {
  name: 'App',
  data() {
  	return {
  		seller: {
  			type:Object
  		}
  	}
  },
  created() {
  	this.$http.get('https://bird.ioliu.cn/v1?url=http://ustbhuangyi.com/sell/api/seller').then((response) => {
  		response=response.body;
  		if(response.errno===ERR_OK){
			this.seller=response.data
  		}
  	})
  },
  methods: {

  },
  components: {
  	MHeader
  }
};
</script>

<style lang="stylus">
@import "./common/stylus/index.styl"
#app
	.tab
		display:flex
		width:100%
		height:40px
		line-height:40px
		border-1px(rgba(7,17,27,0.1))
		.tab-item
			flex:1
			text-align:center
			& > a
				display:block
				text-decoration:none
				font-size:14px
				color:rgb(77,85,93)
				&.router-link-active
					color:rgb(240,20,20)

</style>
