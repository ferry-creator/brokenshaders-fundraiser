<script>
	import '../app.css'
	import '../fonts/index.scss'
	import CMatrix from '$lib/CMatrix/index.svelte'
	import GradientFlicker from '$lib/GradientFlicker/index.svelte'
</script>

<CMatrix />
<GradientFlicker />

<main>
	<slot />
</main>

<footer>
	<p>
		visit <a href="https://soundcloud.com/broken_shaders/ep-demo" target="_blank"> SoundCloud ☁ </a>
		to listen <br />
		to the full mixtape 🌴👽🌴
	</p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 712px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
