<script>
	export let icon
	export let size = null
	export let flip = false

	const path = '/icomoon/symbol-defs.svg'
</script>

{#if icon}
	<svg class:sm={size === 'sm'} class:lg={size === 'lg'} class:xl={size === 'xl'} class:flip>
		<use href={`${path}#icon-${icon}`} />
	</svg>
{/if}

<style lang="scss">
	:root {
		--size: 8px;
	}

	svg {
		display: inline-block;
		fill: currentColor;

		height: 12px;
		width: 28px;
		transform: scale(1.2) translate(0, -1px);

		&.sm {
			height: 1.6rem;
			width: 1.6rem;
		}

		&.lg {
			height: 3.2rem;
			width: 3.2rem;
		}

		&.xl {
			height: 5.4rem;
			width: 5.4rem;
		}

		&.flip {
			transform: rotate(180deg);
		}
	}
</style>
