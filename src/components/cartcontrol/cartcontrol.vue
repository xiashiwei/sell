<template>
	<div class="cartcontrol">
		<div  class="cart-decrease icon-remove_circle_outline" v-show="food.count>0">
			
		</div>
		<div class="cart-count" v-show="food.count>0">
			{{food.count}}
		</div>
		<div @click="addCart" class="cart-increase icon-add_circle">
			
		</div>
	</div>
</template>

<script type='text/ecmascript-6'>
export default {
	props: {
		food:{
			type: Object
		}
	},
	methods: {
		addCart() {

		}
	}
};
</script>

<style scoped lang="stylus">
.cartcontrol
	font-size 0
	.cart-decrease
		display inline-block
		font-size 24px
		line-height 24px
		padding 6px
		color rgb(0,160,220)
	.cart-count
		display inline-block
	.cart-increase
		display inline-block
		font-size 24px
		line-height 24px
		padding 6px
		color rgb(0,160,220)
</style>
