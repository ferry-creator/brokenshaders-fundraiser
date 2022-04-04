<script>
	import { onMount } from 'svelte'

	const gradient = [
		'#c2c9cf',
		'#c2c9cf',
		'#c2c9cf',
		'#c2c9cf',
		'#c2c9cf',
		'#c2c9cf',
		'#c2c9cf',
		'#c2c9cf',
		'#c2c9cf',
		'#b6b1d7',
		'#e1eef0',
		'#c2c9cf',
		'#c2c9cf',
		'#c2c9cf',
		'#ffa989',
		'#c2c9cf',
		'#c2c9cf',
		'#c4cbd7',
		'#b7bcce',
		'#c2cacf',
		'#c2c9cf',
		'#c2c9cf',
		'#c2c9cf',
		'#c2c9cf'
	]

	let ctx, bfr

	onMount(async () => {
		const { default: flicker } = await import('./flicker.js')

		const canvas = ctx
		const buffer = bfr

		flicker(canvas, buffer, { stops: gradient })
	})
</script>

<canvas bind:this={ctx} class="ctx" />
<canvas bind:this={bfr} class="bfr" />

<style>
	canvas {
		position: absolute;
		z-index: -2;
		image-rendering: optimizeSpeed;
		image-rendering: -moz-crisp-edges;
		image-rendering: -o-crisp-edges;
		image-rendering: -webkit-optimize-contrast;
		image-rendering: pixelated;
		image-rendering: optimize-contrast;
	}

	.ctx {
		width: 100%;
		height: 100%;
	}

	.bfr {
		display: none;
	}
</style>
