<script>
	export let cover
</script>

<div style="position: relative">
	<div class="cover">
		<span class="center-border" />
		<span class="center-overlay" />
		<span class="outer-overlay" />
		<span class="outer-border" />

		<svg role="none">
			<mask id="mask">
				<rect width="100%" height="100%" fill="white" />
				<circle fill="black" cx="50%" cy="50%" r="4%" />
			</mask>
			<g mask="url(#mask)">
				<image
					x="0"
					y="0"
					width="100%"
					height="100%"
					xlink:href={cover}
					preserveAspectRatio="xMidYMid slice"
				/>
			</g>
		</svg>
	</div>
	<!-- <div class="cd-overlay">
		<svg role="none">
			<mask id="mask">
				<rect width="100%" height="100%" fill="white" />
				<circle fill="black" cx="50%" cy="50%" r="4%" />
			</mask>
			<g mask="url(#mask)">
				<image
					x="0"
					y="0"
					width="100%"
					height="100%"
					xlink:href="/compactdisc.jpg"
					preserveAspectRatio="xMidYMid slice"
				/>
			</g>
		</svg>
	</div> -->
</div>

<style lang="scss">
	svg {
		border-radius: 50%;
	}

	svg,
	svg mask > * {
		width: 100%;
		height: 100%;
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	.cover {
		animation: 10s spin linear infinite;
		width: 512px;
		height: 512px;

		position: relative;

		span {
			position: absolute;
			z-index: 1;
			top: 50%;
			left: 50%;
			border-radius: 50%;
			transform: translate(-50%, -50%);

			&.center-border {
				width: 7.5%;
				padding-bottom: 7.5%;
				border: 2px solid white;
			}

			&.center-overlay {
				width: 12%;
				padding-bottom: 12%;
				border: 20px solid rgba(255, 255, 255, 0.8);
			}

			&.outer-overlay {
				width: calc(100% - 16px);
				padding-bottom: calc(100% - 16px);
				border: 9px solid rgba(255, 255, 255, 0.75);
			}

			&.outer-border {
				width: calc(100% - 4px);
				padding-bottom: calc(100% - 4px);
				border: 1px solid rgba(0, 0, 0, 0.1);
			}
		}
	}

	@media (max-width: 720px) {
		.cover {
			width: 360px;
			height: 360px;

			span {
				&.center-overlay {
					width: 11%;
					padding-bottom: 11%;
					border-width: 10px;
				}
			}
		}
	}

	/* .cd-overlay {
		animation: 2s drift linear infinite;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		opacity: 0.1;
	}

	@keyframes drift {
		0% {
			transform: rotate(1deg);
		}
		45% {
			transform: rotate(-2deg);
		}
		50% {
			transform: rotate(0deg);
		}
		70% {
			transform: rotate(-2deg);
		}
		87% {
			transform: rotate(0deg);
		}
		95% {
			transform: rotate(2deg);
		}
		100% {
			transform: rotate(1deg);
		}
	} */
</style>
