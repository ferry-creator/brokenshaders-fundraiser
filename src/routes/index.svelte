<script context="module">
	export const prerender = true
</script>

<script>
	import Progressbar from '$lib/Progressbar.svelte'
	import Button from '$lib/Button.svelte'
	import Terminal from '$lib/Terminal/index.svelte'
	import TerminalLine from '$lib/Terminal/Line.svelte'
	import Caret from '$lib/Terminal/Caret.svelte'
	import Player from '$lib/Player/index.svelte'
</script>

<svelte:head>
	<title>broken_shaders</title>
</svelte:head>

<section>
	<h1>Save my dead HDD</h1>

	<Progressbar target={6000} raised={3000} />
	<div style="padding-top: 20px">
		<Button>SAVE</Button>
	</div>

	<h2>
		Hi, this is my project <br /> <strong>broken💎shaders</strong>
	</h2>
	<Terminal>
		<TerminalLine>
			<a href="#">whoami</a> ?
		</TerminalLine>
		<TerminalLine>
			<Caret />
		</TerminalLine>
	</Terminal>

	<p>Content</p>

	<Player src="/tracks/demo.mp3" cover="/tracks/cover/butterfly.jpg" />
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
