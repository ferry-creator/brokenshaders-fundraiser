<script>
	import { onMount } from 'svelte'

	let ctx, b

	onMount(async () => {
		// const { default: matrix } = await import('../../../node_modules/cmatrix/dist/matrix.mjs')

		const { default: matrix } = await import('./matrix')

		const canvas = ctx
		const buffer = b

		const cm = matrix(canvas, buffer, {
			chars: [
				'A',
				'B',
				'C',
				'D',
				'E',
				'F',
				'0',
				'1',
				'2',
				'3',
				'3',
				'3',
				'3',
				'3',
				'4',
				'8',
				'/',
				'+',
				'~',
				'*',
				'▀',
				'▌'
			],
			color: '#B8FF2C',
			background: 'rgba(0,0,0,0.1)',
			exit: false,
			font_size: 20
		})
	})
</script>

<canvas bind:this={ctx} />
<canvas bind:this={b} style="display:none" />

<style>
	canvas {
		position: absolute;
		z-index: -1;
		image-rendering: optimizeSpeed;
		image-rendering: -moz-crisp-edges;
		image-rendering: -o-crisp-edges;
		image-rendering: -webkit-optimize-contrast;
		image-rendering: pixelated;
		image-rendering: optimize-contrast;
	}
</style>
