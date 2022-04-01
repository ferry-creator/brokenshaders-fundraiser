<script context="module">
	export const prerender = true
</script>

<script>
	import Progressbar from '$lib/Progressbar.svelte'
</script>

<svelte:head>
	<title>broken_shaders</title>
</svelte:head>

<section>
	<h1>Save my dead HDD</h1>

	<Progressbar target={6000} raised={3000} />

	<h2>
		Hi, this is my project <br /> <strong>broken💎shaders</strong>
	</h2>

	<p>Content</p>
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}
</style>
