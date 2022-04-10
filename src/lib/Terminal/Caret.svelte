<script>
	export let blink = true
</script>

<span class:blink> █ </span>

<style>
	@keyframes blink {
		0% {
			opacity: 0%;
		}
		30% {
			opacity: 75%;
		}
		100% {
			opacity: 75%;
		}
	}

	.blink {
		animation: 800ms blink steps(1) infinite;
	}

	span {
		user-select: none;
		opacity: 75%;
	}
</style>
