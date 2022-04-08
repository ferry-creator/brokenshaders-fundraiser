<button>
	<div>
		<slot />
	</div>
</button>

<style lang="scss">
	button {
		cursor: pointer;
		border: none;
		padding: 2px;
		background: transparent;

		div {
			background: var(--accent-color);
			color: var(--pure-white);
			padding: 10px 12px;
			font-size: 1.2rem;
			letter-spacing: 0.1rem;
		}

		&:hover {
			div {
				background: black;
			}
		}
	}
</style>
