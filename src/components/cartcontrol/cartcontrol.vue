<template>
	<div class="cartcontrol">
		<transition name="move">
			<div class="cart-desc" v-show="food.count>0" @click.stop.prevent="descCart">
				<span class="inner icon-remove_circle_outline"></span>
			</div>
		</transition>
		<div class="count" v-show="food.count>0">{{food.count}}</div>
		<div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
	</div>
</template>

<!--suppress JSUnresolvedFunction, JSUnresolvedVariable -->
<script type="text/ecmascript-6">
	import Vue from 'vue';

	export default {
		props: {
			food: {
				type: Object
			}
		},
		methods: {
			addCart (event) {
				if (!event._constructed) {
					return;
				}
				if (!this.food.count) {
					Vue.set(this.food, 'count', 1);
				} else {
					this.food.count++;
				}
				this.$emit('add', event.target);
			},
			descCart (event) {
				if (!event._constructed) {
					return;
				}
				if (this.food.count) {
					this.food.count--;
				}
			}
		}
	}

</script>

<style lang="stylus" rel="stylesheet/stylus">
	.cartcontrol
		font-size: 0
		.cart-desc
			display: inline-block
			padding: 6px
			opacity: 1
			transition: all 0.4s linear
			transform: translate3d(0, 0, 0)
			.inner
				display: inline-block
				font-size: 24px
				line-height: 24px
				color: rgb(0, 160, 220)
				transition: all 0.4s linear
				transform: rotate(0)
			&.move-enter, &.move-leave-active
				opacity: 0
				transform: translate3d(24px, 0, 0)
				.inner
					transform: rotate(180deg)
			&.move-enter-active, &.move-leave-active
				transition: all 0.4s linear
		.count
			display: inline-block
			vertical-align: top
			padding-top: 6px
			width: 12px
			text-align: center
			font-size: 10px
			line-height: 24px
			color: rgb(147, 153, 159)
		.cart-add
			display: inline-block
			padding: 6px
			font-size: 24px
			line-height: 24px
			color: rgb(0, 160, 220)
</style>
