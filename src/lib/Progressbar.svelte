<script>
	export let target, raised

	const percent = (raised / target) * 100

	const format = (n) =>
		[...String(n)]
			.reverse()
			.map((c, i) => (i != 0 && i % 3 == 0 ? `${c}.` : c))
			.reverse()
			.join('') + ' DKK'
</script>

<div>
	<span>Raised: {format(raised)}</span>
	<div class="bar">
		<div class="progress" style={`width: ${percent}%`}>
			<div class="fill" />
		</div>
	</div>
	<span class="goal">Goal: {format(target)}</span>
</div>

<style lang="scss">
	div {
		display: flex;
		width: 100%;

		> span {
			flex-shrink: 0;
			background: var(--pure-white);
			padding: 1px;
		}
	}

	.bar {
		margin: 2px 25px;
		background: #dbe1e6;
		.progress {
			height: inherit;
			min-width: 10px;
		}
	}

	@media (max-width: 720px) {
		div {
			display: block;
		}

		.bar {
			height: 18px;
			margin: 10px 0;
		}

		.goal {
			float: right;
		}
	}

	@keyframes load {
		from {
			width: 0%;
		}
		to {
			width: 100%;
		}
	}

	.fill {
		background: var(--accent-color);
		width: 100%;
		height: inherit;
		animation: load both;
		animation-delay: 0.4s;
		animation-duration: 1s;
		animation-timing-function: steps(20);
	}
</style>
